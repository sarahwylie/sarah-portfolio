import Image from "next/image";

export default function Wildflower() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-start text-justify">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
          Wildflower Unitarian Universalist
        </h1>
        <span className="my-4 italic w-full text-justify">
          I’ve always been drawn to mission-driven work, and when I joined my
          local{" "}
          <a
            href="https://www.uua.org/"
            target="_blank"
            aria-label="Visit the UUA website in a new tab"
            className="font-semibold"
          >
            Unitarian Universalist{" "}
          </a>{" "}
          congregation, I saw website maintenance as a meaningful way to
          contribute while expanding my technical skills. I began with weekly
          content updates and gradually took ownership of larger improvement
          efforts. Over time, I transitioned from small edits to addressing
          significant accessibility and performance issues. With full autonomy
          and occasional support, I transformed the experience into an ongoing
          self-directed learning project that continues to this day.
        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
        <div className="items-center justify-center text-center">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczPvTMGoh2_lJuGmE1mBhuxuvF0-vgJK6yoM_q8GzncxOHSPnOv-7Yw5QOnbdYLT00kdPoUfPB6zUuB492Ksk3nelDf4jLN60PdlAn45pb7l6bik2A=w2400"
            alt="Overlapping menu items in non-responsive menu"
            width={950}
            height={600}
            className="rounded-xl shadow-lg"
          />
          <span className="text-sm tracking-tight italic">
            Old homepage design with overlapping menu
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">Type</span>
            <p className="mx-2">Volunteer</p>
            <br />
            <span className="mb-10">
              <span className="text-2xl my-3 dark:text-[#24e4e3]">Visit</span>
              <a
                href="https://wildflowerchurch.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the Wildflower site in a new tab"
              >
                <p className="hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] mx-2">
                  View the live site
                </p>
              </a>
            </span>
          </div>
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">
              Built with
            </span>
            <ul className="list-none flex-col mx-2">
              <li>WordPress</li>
              <li>PHP</li>
              <li>CSS</li>
              <li>WP Plugins</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
        <hr className="h-1 opacity-100 w-full" />
      </div>

      <div className="w-full space-y-6 items-center content-center">
        <div className="grid sm:grid-cols-2 gap-2">
          <div className="text-left place-items-center content-center">
            <span>
              <h2 className="text-2xl my-2 dark:text-[#24e4e3] font-semibold">
                Project Purpose
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                This initiative allowed me to grow professionally while
                contributing to an organization I care about. I focused on
                making incremental improvements, prioritizing responsiveness,
                WCAG compliance, and user accessibility. While still in
                progress, the evolution of the site reflects my commitment to
                continuous learning and purposeful design.
              </p>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Tech Stack & Approach
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                <ul className="list-disc">
                  <li className="ml-6 my-1">
                    <span className="font-semibold">Platform</span>: WordPress
                    (inherited, multi-contributor history)
                  </li>
                  <li className="ml-6 my-1">
                    <span className="font-semibold">Focus Areas</span>:
                    Accessibility, responsive layout, performance,
                    maintainability
                  </li>
                  <li className="ml-6 my-1">
                    <span className="font-semibold">Key Improvements</span>:
                  </li>
                  <ul className="list-circle">
                    <li className="ml-10 my-1">
                      Removed unnecessary plugins and resolved theme conflicts
                    </li>
                    <li className="ml-10 my-1">
                      Configured SEO tooling and optimized page load performance
                    </li>
                    <li className="ml-10 my-1">
                      Redesigned navigation structure and menu responsiveness
                    </li>
                    <li className="ml-10 my-1">
                      Updated color contrast and layout inconsistencies directly
                      in codebase
                    </li>
                    <li className="ml-10 my-1">
                      Cleared caching issues and streamlined page rendering
                    </li>
                  </ul>
                </ul>
                I treated the inherited framework much like legacy code by
                respecting constraints while introducing modern improvements
                whenever possible.
              </p>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Challenges & Lessons Learned
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                With no formal design background, creating a cohesive visual
                structure was initially daunting. I started with a rough Figma
                board to map existing components, and once I visualized the
                layout, the redesign began to take shape. Working within the
                limits of the existing theme taught me to problem-solve
                pragmatically — leveraging theme overrides where possible and
                introducing custom plugins only when necessary. This project
                reminded me that impactful improvements often start with patient
                iteration rather than full rebuilds.
              </p>
            </span>
          </div>
          <div className="grid grid-col md:grid-cols-2 gap-4 w-full place-items-center content-center">
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczM3Y2WWdwxZRty6NAI6YOKRuFT4ZiaKBKo0yqon8c3iIPLlA-3bf45aIhIDGDQS_t42HlV-4FWGN6KptAAOK8Y5_AKrGyPUv529pAH_oMLiJgMLLg=w2400"
                alt="Redesigned Wildflower homepage"
                width={375}
                height={1000}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Redesigned homepage
              </span>
            </div>
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczOWfnxGPqdakjq_RTixHvB8aKU5M1JJ-22LOaUW-TBBSrYY1ciML8HLov88M5t49JEo5qYwsI2pxoVlVtE6ljdMSde4Nc3oO3BPAFYGd0LUx-aWjA=w2400"
                alt="Figma wireframe"
                width={400}
                height={650}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Rough wireframe in Figma
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
        <hr className="mt-12 h-1 opacity-100 w-full" />
      </div>
    </main>
  );
}
