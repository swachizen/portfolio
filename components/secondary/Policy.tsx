import React from "react";

export default function Policy() {
  return (
    <section  
      id="policy"  
      aria-labelledby="policy-heading"  
      className="scroll-mt-24 border-b border-border bg-background text-foreground"  
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 sm:px-8 lg:px-10">
        
        {/* Header */}
        <header className="space-y-5">
          <span className="inline-flex items-center px-4 py-2 tracking-[0.18em] uppercase text-sm font-medium text-primary">
            Privacy Compliance
          </span>

          <h2  
            id="policy-heading"  
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"  
          >  
            Privacy Policy  
          </h2>  

          <p className="max-w-3xl text-base leading-8 text-text-body sm:text-lg">  
            Your privacy is of paramount importance. This Privacy Policy outlines the specific types of data 
            collected through this portfolio application, how that information is securely handled, and the measures 
            taken to safeguard your identity. This platform is designed to align with the Kenya Data Protection Act 
            (KDPA) alongside international frameworks like GDPR and CCPA.
          </p>  
        </header>  

        {/* 1. Data Collection */}  
        <section aria-labelledby="collection-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="collection-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Data Collection &amp; Purpose  
            </h3>  
          </div>

          <p className="text-base leading-8 text-text-body max-w-3xl">  
            This website strictly minimizes data acquisition to explicit user interactions. Data is only 
            captured through the following conduits:
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            <article className="space-y-2">
              <h4 className="font-heading text-lg font-semibold text-foreground">Contact Form Interaction</h4>
              <p className="text-base max-w-3xl leading-7 text-text-body">
                When sending a query, the application collects your <strong>name</strong>, <strong>email address</strong>, 
                and the raw text of your <strong>message</strong>. This data is exclusively processed to establish 
                direct communication regarding professional opportunities or feedback.
              </p>
            </article>

            <article className="space-y-2">
              <h4 className="font-heading text-lg font-semibold text-foreground">Blog Engagement</h4>
              <p className="text-base max-w-3xl leading-7 text-text-body">
                Interacting with published blog items (such as submitting optional reader comments or analytical feedback) 
                may require contextual indexing of user identities or timestamps to maintain high comment integrity and protect 
                against automated scripts.
              </p>
            </article>
          </div>
        </section>  

        {/* 2. AI Assistant Data Handling */}  
        <section aria-labelledby="ai-data-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="ai-data-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              AI Assistant Data Processing  
            </h3>  
          </div>

          <div className="space-y-4 max-w-3xl text-base leading-8 text-text-body">
            <p>  
              The embedded conversational assistant uses Google&apos;s Gemini API to process prompts. Any text queries or 
              code inputs you submit directly to the AI assistant are securely transmitted to Google cloud infrastructure 
              for dynamic real-time generation.
            </p>  
            <p>  
              Conversations managed by the assistant are intended to be completely transient. Chat interactions are not 
              persistently written to my core databases, nor are they used to build hidden advertising identities. Please 
              avoid entering highly sensitive financial credentials, private API keys, or confidential source files into the 
              chat prompt interface.
            </p>  
          </div>
        </section>  

        {/* 3. Third-Party Processors */}  
        <section aria-labelledby="processors-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="processors-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Third-Party Infrastructure &amp; Sub-processors  
            </h3>  
          </div>

          <p className="text-base leading-8 text-text-body max-w-3xl">  
            To preserve the security and delivery of this portfolio, specific transactional metadata is routed through 
            trusted technology providers:
          </p>  

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-1">
              <span className="text-sm font-medium tracking-[0.18em] text-primary uppercase">LLM Engine</span>
              <h4 className="font-heading font-semibold text-foreground text-base">Google Gemini API</h4>
              <p className="text-base max-w-3xl leading-7 text-text-body">
                Dynamically evaluates natural language input to deliver responsive portfolio summaries and tech support context.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium tracking-[0.18em] text-primary uppercase">Cloud Infrastructure</span>
              <h4 className="font-heading font-semibold text-foreground text-base">Supabase</h4>
              <p className="text-base max-w-3xl leading-7 text-text-body">
                Hosts core structured relational tables, administers contact messages, and governs security schemas for Admin portal authentication.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium tracking-[0.18em] text-primary uppercase">Security Edge</span>
              <h4 className="font-heading font-semibold text-foreground text-base">Cloudflare Turnstile</h4>
              <p className="text-base max-w-3xl leading-7 text-text-body">
                Validates human telemetry during form submissions without tracking user habits or collecting commercial cookies.
              </p>
            </div>
          </div>
        </section>  

        {/* 4. Cookies and Local Storage */}  
        <section aria-labelledby="storage-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="storage-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Cookies &amp; Local Storage Mechanisms  
            </h3>  
          </div>

          <div className="space-y-4 max-w-3xl text-base leading-8 text-text-body">
            <p>  
              This application avoids invasive or commercial retargeting cookies. Instead, the architecture utilizes browser 
              <code className="mx-1 rounded bg-border/50 px-1.5 py-0.5 text-sm font-mono text-foreground">localStorage</code> 
              and essential telemetry keys purely to handle security and system continuity:
            </p>  
            <ul className="list-disc space-y-2 pl-6 marker:text-primary">
              <li><strong>Rate-Limiting Tokens:</strong> Tracks the threshold of contact messages and AI chats submitted during a single browser lifecycle to block denial-of-service attempts.</li>
              <li><strong>Theme Configuration:</strong> Preserves light or dark mode styling selections across consecutive page navigations.</li>
              <li><strong>Security Tokens:</strong> Non-intrusive variables deployed via Cloudflare Turnstile to verify client machines against algorithmic scraping.</li>
            </ul>
          </div>
        </section>  

        {/* 5. Data Security */}  
        <section aria-labelledby="security-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="security-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Data Protection &amp; Anti-Abuse Controls  
            </h3>  
          </div>

          <p className="max-w-3xl text-base leading-8 text-text-body">  
            Robust defensive measures protect user submissions from intercepted exfiltration. Data streams are fully encrypted 
            in transit using Secure Sockets Layer (SSL/TLS) mechanisms. Backend access layers are hardened via programmatic 
            honeypots and multi-factor admin guardrails to keep internal logs resilient against malicious exploits or bulk data harvesting.
          </p>  
        </section>  

        {/* 6. User Rights */}  
        <section aria-labelledby="rights-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="rights-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Your Data Rights  
            </h3>  
          </div>

          <div className="space-y-4 max-w-3xl text-base leading-8 text-text-body">
            <p>  
              Pursuant to the provisions of the Kenya Data Protection Act (KDPA) and related global frameworks, you retain complete 
              ownership of your information. You possess the following legal entitlements regarding any personal data processed on this site:
            </p>  
            <ul className="list-disc space-y-2 pl-6 marker:text-primary">
              <li>The right to inspect any personal communications preserved inside platform systems.</li>
              <li>The right to modify, correct, or amend out-of-date records.</li>
              <li>The right to enforce total erasure of your historical contact messages from production databases.</li>
            </ul>
            <p className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-foreground">
              <span>To initiate an explicit data deletion or inspection request, please reach out directly through the <strong>Contact</strong> interface.</span>
            </p>
          </div>
        </section>  

        {/* Last Updated Footer */}  
        <footer className="border-t border-border pt-8 mt-4">  
          <div className="flex items-start gap-2 text-sm text-foreground-muted leading-7">
            <div>
              <p><strong>Last reviewed:</strong> June 2026</p>
              <p className="mt-2">
                This Privacy Policy stays aligned with evolving database additions, API parameter modifications, and legal regulatory developments.
              </p>
            </div>
          </div>
        </footer>  
      </div>  
    </section>
  );
}

