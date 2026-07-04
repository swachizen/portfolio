// app/api/login/route.ts

import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  login,
  type LoginCredentials,
} from "@/lib/loginServer";

import createSupabaseRouteClient
  from "@/components/supabaseRoute";

export const runtime =
  "nodejs";

export const dynamic =
  "force-dynamic";

type ErrorResponse = {
  success: false;
  message: string;
};

type SuccessResponse = {
  success: true;
  message: string;
};

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_EMAIL_LENGTH = 254;

const MAX_PASSWORD_LENGTH = 1024;

function createErrorResponse(
  message: string,
  status: number,
): NextResponse<ErrorResponse> {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    {
      status,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate",
      },
    },
  );
}

function createSuccessResponse(
  message: string,
): NextResponse<SuccessResponse> {
  return NextResponse.json(
    {
      success: true,
      message,
    },
    {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate",
      },
    },
  );
}

function validateBody(
  body: unknown,
): LoginCredentials | null {
  if (
    !body ||
    typeof body !==
      "object"
  ) {
    return null;
  }

  const {
    email,
    password,
  } = body as Record<
    string,
    unknown
  >;

  if (
    typeof email !==
      "string" ||
    typeof password !==
      "string"
  ) {
    return null;
  }

  const normalizedEmail =
    email
      .trim()
      .toLowerCase();

  const normalizedPassword =
    password.trim();

  if (
    normalizedEmail.length ===
      0 ||
    normalizedEmail.length >
      MAX_EMAIL_LENGTH
  ) {
    return null;
  }

  if (
    !EMAIL_PATTERN.test(
      normalizedEmail,
    )
  ) {
    return null;
  }

  if (
    normalizedPassword.length <
      8 ||
    normalizedPassword.length >
      MAX_PASSWORD_LENGTH
  ) {
    return null;
  }

  return {
    email:
      normalizedEmail,
    password,
  };
}

export async function POST(
  request: NextRequest,
) {
  try {
    const contentType =
      request.headers.get(
        "content-type",
      );

    if (
      !contentType?.includes(
        "application/json",
      )
    ) {
      return createErrorResponse(
        "Unsupported content type.",
        415,
      );
    }

    let body: unknown;

    try {
      body =
        await request.json();
    } catch {
      return createErrorResponse(
        "Invalid JSON payload.",
        400,
      );
    }

    const credentials =
      validateBody(body);

    if (!credentials) {
      return createErrorResponse(
        "Invalid login credentials.",
        400,
      );
    }

    const supabase =
      await createSupabaseRouteClient();

    const result =
      await login(
        supabase,
        credentials,
      );

    if (!result.success) {
      return createErrorResponse(
        result.message,
        401,
      );
    }

    return createSuccessResponse(
      result.message,
    );
  } catch (error) {
    console.error(
      "[LOGIN_ROUTE]",
      error,
    );

    return createErrorResponse(
      "An unexpected server error occurred.",
      500,
    );
  }
}

function methodNotAllowed() {
  return createErrorResponse(
    "Method not allowed.",
    405,
  );
}

export const GET =
  methodNotAllowed;

export const PUT =
  methodNotAllowed;

export const PATCH =
  methodNotAllowed;

export const DELETE =
  methodNotAllowed;

export const OPTIONS =
  methodNotAllowed;
