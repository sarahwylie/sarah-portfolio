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
          While customizing a page for a client, I realized that the U.S. Web
          Design System (USWDS) Tooltip component we were using did not allow
          developers to dynamically update text. Since the client&apos;s theme
          library relied heavily on USWDS components, I had the choice to either
          create a custom tooltip component (which was unrealistic given the
          timeline) or dig into the open-source code to change the static
          properties of the existing component. The dynamic properties of this
          component were important, as a static tooltip couldn&apos;t provide
          the contextual guidance users needed. I wrote a custom patch that
          overrode the default USWDS component behavior, enabling real-time
          updates to the tooltip text based on user actions. This solution
          preserved accessibility, improved the user experience, and allowed us
          to maintain design system consistency. After testing and refining the
          patch, I contributed it back to USWDS so others in the community could
          benefit from the enhancement.
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
        <hr className="my-12 h-1 opacity-100 w-2/3" />
      </div>

      <div className="w-full space-y-6 items-center content-center">
        <div className="grid sm:grid-cols-2 gap-2">
          <div className="text-left place-items-center content-center">
            <span>
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
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
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Web Stack and Explanation
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                The site was already built in Drupal, which generally uses PHP
                for its backend, but the new functionality would require a
                carefully choreographed dance with the DOM to allow each
                component to appear at the correct time. DOM interactions
                require JavaScript, and the custom module for this functionality
                was written in JavaScript.
              </p>
            </span>

            <span>
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Struggles and Reflections
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                This custom module held thousands of lines of code and required
                several refactors. I didn&apos;t complete this feat alone, but
                while working closely with the senior developer and the UX
                designer, we realized quickly that our time until launch was
                running thin and the functionality was not yet logical. The
                three of us held an emergency planning meeting to determine how
                to wrap up this portion of the site, and the takeaway was that
                we would have to overhaul and restrategize major sections if we
                couldn&apos;t make the tooltip dynamic. I offered to explore the
                USWDS source code, and the team placed a lot of trust in me to
                deliver the solution rapidly. Luckily, I found the relevant code
                almost immediately, and I had overwritten and tested the
                solution within an hour. I created the patch, and we integrated
                it into the module seamlessly. The experience taught me a lot
                about trusting my instincts and digging into unfamiliar
                codebases with confidence. Once the code was hands-off for
                launch, I submitted the patch back to USWDS so others could
                benefit from the functionality.
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
