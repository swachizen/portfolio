// components/about/PersonalTouch.tsx

import {
  Gamepad2,
  Waves,
  Users,
  Palette,
} from "lucide-react";

const interests = [
  {
    title: "Video Games",
    description:
      "Gaming helps me develop strategic thinking, problem-solving skills and an appreciation for great digital experiences.",
    icon: Gamepad2,
  },
  {
    title: "Swimming",
    description:
      "Swimming provides balance outside of academics and development while encouraging discipline and consistency.",
    icon: Waves,
  },
  {
    title: "Group Discussions",
    description:
      "I enjoy exchanging ideas, participating in meaningful discussions and learning from different perspectives.",
    icon: Users,
  },
  {
    title: "Design",
    description:
      "Design allows me to explore creativity and build interfaces that are both functional and visually refined.",
    icon: Palette,
  },
];

export default function PersonalTouch() {
  return (
    <section
      id="personal-touch"
      aria-labelledby="personal-touch-heading"
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Personal Touch
          </p>

          <h2
            id="personal-touch-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Beyond engineering and software development.
          </h2>

          <p className="mt-6 text-base leading-8 text-text-body sm:text-lg">
            While much of my time is dedicated to Civil Engineering and software
            development, I also value activities that encourage creativity,
            collaboration and personal growth. These interests help me maintain
            balance while continuously learning both professionally and
            personally.
          </p>
        </div>

        <div
          className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2"
          aria-label="Personal interests and hobbies"
        >
          {interests.map((interest) => {
            const Icon = interest.icon;

            return (
              <article
                key={interest.title}
                className="flex gap-4"
              >
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background"
                >
                  <Icon size={22}
                   className="text-primary"
                />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {interest.title}
                  </h3>

                  <p className="mt-3 leading-8 text-text-body">
                    {interest.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <div className="flex items-start gap-4">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold text-foreground">
                Continuous Growth
              </h3>

              <p className="mt-4 leading-8 text-text-body">
                Whether I&apos;m building web applications, studying
                engineering, collaborating with others or exploring creative
                interests, I believe growth comes from curiosity, consistency
                and a willingness to keep learning. That mindset continues to
                shape both my professional work and personal development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
