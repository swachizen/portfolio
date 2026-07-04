import React from "react";
import { 
  Accessibility as AccessibilityIcon, 
  Code2, 
  Keyboard, 
  Eye, 
  Contrast, 
  Smartphone, 
  Activity, 
  Compass, 
  Cpu, 
  BookOpen, 
  Layers, 
} from "lucide-react";

export default function Accessibility() {
  return (
    <section  
      id="accessibility"  
      aria-labelledby="accessibility-heading"  
      className="scroll-mt-24 border-b border-border bg-background text-foreground"  
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 sm:px-8 lg:px-10">
        
        {/* Header */}
        <header className="space-y-5">
          <span className="inline-flex items-center tracking-[0.18em] uppercase px-4 py-2 text-sm font-medium text-primary">
            Accessibility
          </span>

          <h2  
            id="accessibility-heading"  
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"  
          >  
            Accessibility Statement  
          </h2>  

          <p className="max-w-3xl text-base leading-8 text-text-body sm:text-lg">  
            I believe the web should be accessible to everyone, regardless of  
            ability, device, or assistive technology. Accessibility is  
            considered throughout the design and development process of this  
            portfolio rather than being treated as an afterthought. My goal is  
            to create an experience that is inclusive, intuitive, and usable  
            for every visitor.  
          </p>  
        </header>  

        {/* Commitment */}  
        <section aria-labelledby="commitment-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="commitment-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Commitment to Accessibility  
            </h3>  
          </div>

          <div className="space-y-4 max-w-3xl text-base leading-8 text-text-body">
            <p>  
              This website is designed with accessibility in mind and aims to  
              align with the principles of the Web Content Accessibility  
              Guidelines (WCAG) 2.1 Level AA wherever reasonably possible. While  
              accessibility is an ongoing process rather than a finished task, I  
              continuously review and improve the experience as the portfolio  
              evolves.  
            </p>  

            <p>  
              Every new feature, project showcase, and interface enhancement is  
              evaluated with usability, readability, and keyboard accessibility  
              in mind to provide a consistent experience across desktop,  
              tablet, and mobile devices.  
            </p>  
          </div>
        </section>  

        {/* Features */}  
        <section aria-labelledby="implemented-features-heading" className="space-y-8 border-t border-border pt-10">  
          <div className="space-y-3">  
            <h3  
              id="implemented-features-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Accessibility Features  
            </h3>  

            <p className="max-w-3xl text-base leading-8 text-text-body">  
              The following practices have been incorporated throughout the  
              development of this portfolio to improve usability for all  
              visitors.  
            </p>  
          </div>  

          <div className="grid gap-8 sm:grid-cols-2">  
            <article className="space-y-3">  
              <div className="flex items-center gap-4">
               <div
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
               >
                <Code2
                  size={22}
                  className="text-primary"
                  />
               </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Semantic HTML  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body break-words">  
                Proper semantic elements such as  
                <code className="mx-1 rounded bg-border/50 px-1.5 py-0.5 text-sm font-mono text-foreground">header</code>,  
                <code className="mx-1 rounded bg-border/50 px-1.5 py-0.5 text-sm font-mono text-foreground">main</code>,  
                <code className="mx-1 rounded bg-border/50 px-1.5 py-0.5 text-sm font-mono text-foreground">nav</code>,  
                <code className="mx-1 rounded bg-border/50 px-1.5 py-0.5 text-sm font-mono text-foreground">section</code>, and  
                <code className="mx-1 rounded bg-border/50 px-1.5 py-0.5 text-sm font-mono text-foreground">footer</code>  
                are used to improve document structure and compatibility with assistive technologies.  
              </p>  
            </article>  

            <article className="space-y-3">  
              <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
               >
                <Keyboard
                  size={22} 
                  className="text-primary"
                />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Keyboard Navigation  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body">  
                Interactive components are designed to be fully operable using a  
                keyboard, with logical focus order, visible focus indicators,  
                and support for standard keyboard interactions.  
              </p>  
            </article>  

            <article className="space-y-3">  
              <div className="flex items-center gap-4">
              <div
               aria-hidden="true"
               className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
              >
                <Eye
                  size={22}
                  className="text-primary"
                />
               </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Screen Reader Support  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body">  
                ARIA attributes are added where appropriate to improve context  
                for screen readers without replacing semantic HTML. Decorative  
                elements are hidden from assistive technologies whenever  
                possible.  
              </p>  
            </article>  

            <article className="space-y-3">  
              <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
               >
                <Contrast
                  size={22}
                  className="text-primary"
                />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Colour Contrast  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body">  
                The light and dark themes are designed with sufficient colour  
                contrast to improve readability while maintaining a clean,  
                modern appearance across different lighting environments.  
              </p>  
            </article>  

            <article className="space-y-3">  
              <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
              >
                <Smartphone
                  size={22}
                  className="text-primary"
                 />
               </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Responsive Design  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body">  
                Every page is built using responsive layouts that adapt to  
                various screen sizes without compromising usability or content  
                accessibility.  
              </p>  
            </article>  

            <article className="space-y-3">  
              <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
              >
                <Activity
                  size={22}
                  className="text-primary"
                />
              </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Motion Preferences  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body break-words">  
                Reduced motion preferences are respected using the  
                <code className="mx-1 rounded bg-border/50 px-1.5 py-0.5 text-sm font-mono text-foreground">prefers-reduced-motion</code>  
                media query to minimise animations for visitors who request a  
                less animated experience.  
              </p>  
            </article>  
          </div>  
        </section>  

        {/* Accessibility Principles */}
        <section aria-labelledby="principles-heading" className="space-y-8 border-t border-border pt-10">
          <div className="space-y-3">
            <h3  
              id="principles-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >
              Accessibility Principles
            </h3>

            <p className="max-w-3xl text-base leading-8 text-text-body">  
              The development of this portfolio is guided by four core  
              accessibility principles that help create an inclusive browsing  
              experience for all visitors.  
            </p>  
          </div>  

          <div className="grid gap-8 sm:grid-cols-2">  
            <article className="space-y-3">  
              <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
              >
                <Compass
                  size={22}
                  className="text-primary"
                />
              </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Perceivable  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body">  
                Content is structured with clear headings, descriptive text,  
                meaningful labels, and sufficient colour contrast to improve  
                readability across different devices and assistive  
                technologies.  
              </p>  
            </article>  

            <article className="space-y-3">  
              <div className="flex items-center gap-4">
               <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
               >
                <Cpu
                  size={22}
                  className="text-primary"
                 />
               </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Operable  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body">  
                Navigation and interactive elements are designed to be usable  
                with a keyboard and compatible with modern browsers and  
                accessibility tools.  
              </p>  
            </article>  

            <article className="space-y-3">  
              <div className="flex items-center gap-4">
               <div
                 aria-hidden="true"
                 className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
               >
                <BookOpen
                  size={22}
                  className="text-primary"
               />
               </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Understandable  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body">  
                Information is presented using consistent layouts, descriptive  
                headings, and straightforward language to improve clarity for  
                all users.  
              </p>  
            </article>  

            <article className="space-y-3">  
              <div className="flex items-center gap-4">
               <div
                 aria-hidden="true"
                 className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
               >
                <Layers
                  size={22}
                  className="text-primary"
                />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">  
                  Robust  
                </h4>  
              </div>
              <p className="text-base leading-7 text-text-body">  
                Modern web standards, semantic HTML, and progressive  
                enhancement are used to maximise compatibility with browsers,  
                assistive technologies, and future platform improvements.  
              </p>  
            </article>  
          </div>  
        </section>  

        {/* Performance */}  
        <section aria-labelledby="performance-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="performance-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Performance &amp; User Experience  
            </h3>  
          </div>

          <div className="space-y-4 max-w-3xl text-base leading-8 text-text-body">
            <p>  
              Accessibility extends beyond visual design. A fast and responsive  
              website benefits everyone, including visitors using assistive  
              technologies, mobile networks, or lower-powered devices.  
            </p>  

            <p>  
              This portfolio follows modern development practices such as  
              server-side rendering, responsive layouts, optimized images,  
              semantic markup, efficient code splitting, and performance  
              monitoring to deliver a reliable browsing experience while aiming  
              for excellent Google Lighthouse scores.  
            </p>  
          </div>
        </section>  

        {/* Known Limitations */}  
        <section aria-labelledby="limitations-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="limitations-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Known Limitations  
            </h3>  
          </div>

          <p className="text-base leading-8 text-text-body max-w-3xl">  
            Although accessibility is considered throughout development, some  
            limitations may still exist while new features continue to be  
            improved.  
          </p>  

          <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-text-body marker:text-primary max-w-3xl">  
            <li>  
              AI-generated responses may vary depending on the capabilities of  
              the underlying language model and may not always provide perfectly  
              accessible formatting.  
            </li>  
            <li>  
              Certain third-party embedded content may have accessibility  
              limitations outside my direct control.  
            </li>  
            <li>  
              Some project demonstrations or videos may not yet include captions  
              or audio descriptions. Improvements will continue as additional  
              content is published.  
            </li>  
          </ul>  
        </section>  

        {/* Feedback */}  
        <section aria-labelledby="feedback-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="feedback-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Feedback &amp; Assistance  
            </h3>  
          </div>

          <div className="space-y-4 max-w-3xl text-base leading-8 text-text-bodt">
            <p>  
              Accessibility is an ongoing commitment. If you experience any  
              difficulty accessing content, encounter an accessibility barrier,  
              or have suggestions that could improve your experience, I would  
              appreciate hearing from you.  
            </p>  

            <p>  
              Please use the <strong>Contact</strong> page to report any  
              accessibility issue or provide feedback. Every report is reviewed  
              carefully and helps improve the portfolio for all visitors.  
            </p>  
          </div>
        </section>  

        {/* Continuous Improvement */}  
        <section aria-labelledby="improvement-heading" className="space-y-5 border-t border-border pt-10">  
          <div className="flex items-center gap-3">
            <h3  
              id="improvement-heading"  
              className="font-heading text-2xl font-semibold text-foreground"  
            >  
              Continuous Improvement  
            </h3>  
          </div>

          <p className="max-w-3xl text-base leading-8 text-text-body">  
            As my experience as a full-stack developer continues to grow, this  
            portfolio will evolve alongside modern accessibility standards,  
            browser capabilities, and user expectations. Regular reviews,  
            testing, and updates are performed to improve usability,  
            performance, and compatibility over time.  
          </p>  
        </section>  

        {/* Last Updated Footer */}  
        <footer className="border-t border-border pt-8 mt-4">  
          <p className="text-sm leading-7 text-foreground-muted">  
            <strong>Last reviewed:</strong> June 2026  
          </p>  

          <p className="mt-2 text-sm leading-7 text-foreground-muted">  
            This Accessibility Statement will be updated periodically to reflect  
            improvements, new features, and evolving accessibility standards.  
          </p>  
        </footer>  
      </div>  
    </section>
  );
}

