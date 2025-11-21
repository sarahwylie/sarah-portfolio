import Image from "next/image";
import DynamicTooltip from "./dynamicTooltip.gif";

export default function Tooltip() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-start text-justify">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
          USWDS Dynamic Tooltip
        </h1>
        <span className="my-4 italic w-full text-justify">
          While implementing a new section in a client site, I noticed that the
          tooltip component provided only static content. Because the user
          interface relied on changing button states, we needed dynamic feedback
          to help users understand the context behind each action.
          Custom-building a tooltip wasn&apos;t feasible within the project
          timeline, and the client&apos;s design system heavily depended on
          USWDS. I examined the component&apos;s underlying code and created a
          patch that allowed tooltips to update based on user interactions, all
          while maintaining accessibility and design system consistency. After
          testing and integrating the fix, I submitted the enhancement back to
          the USWDS community.
        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
        <div className="items-center justify-center text-center">
          <Image
            src={DynamicTooltip}
            alt="Tooltip text changing dynamically"
            width="auto"
            height="auto"
            className="rounded-xl shadow-lg"
            unoptimized="true"
          />
          <span className="text-sm tracking-tight italic">
            Demonstration of successful dynamic tooltip updates
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">Type</span>
            <p className="mx-2">Open-Source Contribution</p>
            <br />
            <span className="mb-10">
              <span className="text-2xl my-3 dark:text-[#24e4e3]">Visit</span>
              <a
                href="https://github.com/uswds/uswds/pull/6431"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the USWDS GitHub Pull Request"
              >
                <p className="hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] mx-2">
                  View the Pull Request
                </p>
              </a>
              <a
                href="https://www.dhs.wisconsin.gov/adrc/search.htm?field_adrc_resource_service_area[3636]=3636&field_adrc_resource_category_ref=16186"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the site in a new tab"
              >
                <p className="hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] mx-2">
                  View the Live Site
                </p>
              </a>
            </span>
          </div>
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">
              Built with
            </span>
            <ul className="list-none flex-col mx-2">
              <li>Drupal</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>DOM Manipulation</li>
              <li>APIs</li>
              <li>State</li>
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
                This was a feature for a new section of a client&apos;s website.
                My focus was building out the functionality for a list of
                resources, including toggle buttons that would update state, a
                loading indicator timed to appear before page load and vanish
                when the DOM finished loading, and a button that needed to
                convey several different states depending on user interaction.
                Without the tooltip providing feedback, users would not have a
                clear explanation for the changing state of the button.
              </p>
            </span>
            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Tech Stack & Approach
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                The site was already built in Drupal, which generally uses PHP
                for its backend, but the new functionality would require a
                carefully choreographed dance with the DOM to allow each
                component to appear at the correct time. DOM interactions
                require JavaScript, and the custom module for this functionality
                was written in JavaScript with jQuery.
              </p>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Challenges & Lessons Learned
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                The custom module powering this feature included thousands of
                lines of code and underwent several refactors. As our team
                approached launch, the UX designer, senior engineer, and I
                realized the tooltip was a critical blocker. Without dynamic
                messaging, users wouldn&apos;t understand the shifting states of key
                interface elements. In an emergency planning session, I proposed
                exploring the USWDS source code. Within an hour, I located the
                issue, developed the override, tested it, and patched it into
                the build. The enhancement resolved the UX challenge and allowed
                the team to move forward without rearchitecting major components
                under deadline pressure. Lesson learned: never underestimate my
                capabilities.
              </p>
            </span>
          </div>

          <div className="grid grid-col gap-6 w-full place-items-center content-center">
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczNgIHRkai3Mz9BqKzsS0l31tUn97I5uHbkDtHgdCqwxvQBD81XP75dHA313V9mi1QIOopkEeiL1uj0AWte8XcO-LONnmYBnZlwgC3TgYZBKu6IkBVEvgQTjEShqNeq-hlRwDREYIYadwyDIlUnYxNs=w219-h107-s-no-gm?authuser=0"
                alt="Initial tooltip state"
                width={200}
                height={100}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Tooltip initial messaging
              </span>
            </div>
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczNCdSKChl2UWj53zwIz6NpcW3OK2bxMP1UoPtj7p31Mq8XBtjjzjPI4ddX4I2y5JB0Dlu5IO4_8lsdA9HSBhg6yc2Ok0D2fBCPy8t3lwlRU1lVNGWTMzRkl-xZHTckBTEDCw0XtztUSXXZetSvY8uQ=w436-h104-s-no-gm?authuser=0"
                alt="Dynamically updated tooltip state"
                width={400}
                height={100}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Tooltip message dynamically changed on user interaction
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
        <hr className="h-1 opacity-100 w-full" />
      </div>
    </main>
  );
}
