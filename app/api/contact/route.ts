import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  },
);

const MAX_REQUESTS_PER_DAY = 2;
const RATE_LIMIT_WINDOW_HOURS = 24;

type ContactPayload = {
  email: string;
  fullNames: string;
  company: string;
  selfEmployed: boolean;

  country: string;
  county: string;

  countryCode: string;
  phone: string;

  serviceTopic: string;
  service: string;

  message: string;

  website: string;
};

function getClientIp(
  request: NextRequest,
): string {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for",
    );

  if (forwardedFor) {
    return forwardedFor
      .split(",")[0]
      .trim();
  }

  const realIp =
    request.headers.get(
      "x-real-ip",
    );

  return realIp ?? "unknown";
}

function validatePayload(
  payload: ContactPayload,
): string | null {
  if (
    !payload.email ||
    !payload.fullNames ||
    !payload.country ||
    !payload.county ||
    !payload.countryCode ||
    !payload.phone ||
    !payload.serviceTopic ||
    !payload.service ||
    !payload.message
  ) {
    return "Missing required fields.";
  }

  if (
    !payload.selfEmployed &&
    !payload.company
  ) {
    return "Company name is required.";
  }

  return null;
}

async function checkRateLimit(
  ip: string,
) {
  const sinceDate =
    new Date(
      Date.now() -
        RATE_LIMIT_WINDOW_HOURS *
          60 *
          60 *
          1000,
    ).toISOString();

  const { count, error } =
    await supabase
      .from(
        "contact_rate_limits",
      )
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("ip_address", ip)
      .gte(
        "created_at",
        sinceDate,
      );

  if (error) {
    throw error;
  }

  return (
    (count ?? 0) <
    MAX_REQUESTS_PER_DAY
  );
}

export async function POST(
  request: NextRequest,
) {
  try {
    const payload =
      (await request.json()) as ContactPayload;

    /*
     * Layer 1:
     * Honeypot Protection
     */
    if (
      payload.website?.trim()
    ) {
      return NextResponse.json(
        {
          message:
            "Request rejected.",
        },
        {
          status: 400,
        },
      );
    }

    const validationError =
      validatePayload(payload);

    if (validationError) {
      return NextResponse.json(
        {
          message:
            validationError,
        },
        {
          status: 400,
        },
      );
    }

    const ip =
      getClientIp(request);

    /*
     * Layer 2:
     * IP Rate Limiting
     */
    const allowed =
      await checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          message:
            "Daily contact limit reached. Please try again after 24 hours.",
        },
        {
          status: 429,
        },
      );
    }

    const {
      error:
        contactInsertError,
    } = await supabase
      .from("contact")
      .insert({
        email:
          payload.email,
        full_names:
          payload.fullNames,
        company:
          payload.company,
        self_employed:
          payload.selfEmployed,

        country:
          payload.country,

        county:
          payload.county,

        country_code:
          payload.countryCode,

        phone:
          payload.phone,

        service_topic:
          payload.serviceTopic,

        service:
          payload.service,

        message:
          payload.message,

        ip_address: ip,
      });

    if (
      contactInsertError
    ) {
      throw contactInsertError;
    }

    const {
      error:
        rateLimitInsertError,
    } = await supabase
      .from(
        "contact_rate_limits",
      )
      .insert({
        ip_address: ip,
      });

    if (
      rateLimitInsertError
    ) {
      throw rateLimitInsertError;
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Message submitted successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "[CONTACT_ROUTE_ERROR]",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to process your request at the moment.",
      },
      {
        status: 500,
      },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message:
        "Method not allowed.",
    },
    {
      status: 405,
    },
  );
}
