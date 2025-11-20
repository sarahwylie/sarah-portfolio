import Image from "next/image";

export default function EventStyling() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-start text-justify">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
          Event Styling
        </h1>
        <span className="my-4 italic w-full text-justify">
          Our client used 25Live to manage events and requested that its
          embedded “Event Slider Spud” calendar widget match specific
          wireframes. Native styling options were extremely limited, and early
          attempts at CSS overrides failed due to iframe rendering constraints.
          Rather than tell the client their request was unachievable, I wrote a
          custom Drupal module to override the default behavior.
        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
        <div className="items-center justify-center text-center">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczMXrMggiaXMiJGlX-axk4TAOXXE0nh9jbmx3aoIdGp65ZlnYqVrozkiXCsmvkQZf4d8ed7LJWh0zD5EoMLysJ7lckaXuwLxSvUsjQw98JKUEUYkeQ=w2400"
            alt="Custom module setup code"
            width={950}
            height={300}
            className="rounded-xl shadow-lg"
          />
          <span className="text-sm tracking-tight italic">
            Base files needed for setting up the custom module
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">Type</span>
            <p className="mx-2">Group Work Assignment</p>
            <br />
            <div className="mb-10">
              <span className="text-2xl my-3 dark:text-[#24e4e3]">Visit</span>
              <a
                href="https://gist.github.com/sarahwylie/039f4d55df8ab88a92397566817ca960"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the GitHub Gist code"
              >
                <p className="hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] mx-2">
                  View the Gist
                </p>
              </a>
            </div>
          </div>
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">
              Built with
            </span>
            <ul className="list-none flex-col mx-2">
              <li>Drupal</li>
              <li>JavaScript</li>
              <li>Mutation Observer</li>
              <li>Custom Module</li>
              <li>Third-Party API</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
        <hr className="h-1 opacity-100 w-full" />
      </div>

      <div className="w-full space-y-6 items-center content-center">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="text-left place-items-center content-center">
            <span>
              <h2 className="text-2xl my-2 dark:text-[#24e4e3] font-semibold">
                Project Purpose
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                This project&apos;s client relied on a third-party events
                integration tool, 25Live, to manage and display event data. The
                client wanted the embedded calendar component (“Event Slider
                Spud”) to match specific wireframes, including centered text,
                consistently placed navigation arrows, and customized styling.
                However, 25Live&apos;s widget offered limited styling options
                and no native support for the requested layout. Rather than tell
                the client their request couldn&apos;t be fulfilled, I obtained
                approval to investigate a workaround. After analyzing the
                integration&apos;s structure, I discovered the widget was
                rendered inside an iframe, which restricted our ability to style
                or manipulate its content directly. I developed a custom Drupal
                module that used JavaScript to monitor the iframe&apos;s DOM
                state. Using a combination of a MutationObserver, a Promise, and
                a setTimeout, I delayed the injection of custom styles until the
                iframe had fully rendered. This allowed us to apply the
                necessary styling reliably—even during user interactions like
                scrolling or clicking. Initially, the styles could be injected
                without the observer, but user interaction would cause them to
                disappear until the page reloaded. Implementing the observer
                resolved this, ensuring a seamless and persistent experience for
                end users. To ensure long-term maintainability, I wrote detailed
                documentation for the client. It covered how to create and
                manage event calendars in 25Live, how to connect them to the
                Drupal site, and how to update the slider configuration and code
                as needed. This solution allowed us to fully meet the design
                specifications within a limited framework, while providing a
                sustainable approach for the client post-launch.
              </p>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Tech Stack & Approach
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                This was my first foray into Site Studio, which allows for visual page building but can limit direct code access. Balancing drag-and-drop restrictions with developer-level customization required careful analysis and creative engineering.
              </p>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Challenges & Lessons Learned
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                The team learned Site Studio in real time, and early in the
                project, the lead developer was unexpectedly hospitalized. I was
                asked to step in as technical lead with limited access to his
                documentation and implementation plans. To keep the project
                moving forward with minimal disruption, I:
                <ul className="list-disc">
                  <li className="ml-6 my-1">
                    Documented existing gaps and restructured our technical
                    workflow
                  </li>

                  <li className="ml-6 my-1">
                    Led integration strategy and module development
                  </li>

                  <li className="ml-6 my-1">
                    Created long-term documentation to support future handoffs
                  </li>
                </ul>
                This project strengthened my confidence in solution-oriented
                engineering and leadership under unexpected circumstances.
              </p>
            </span>
          </div>
          <div className="grid grid-col gap-4 w-full place-items-center content-center">
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczMSuHDZW_fsjFbZYvL4XMBtdshwa3V-VykOBth_4JbjBLkvLmvkNqzfaQjFkLO5xevgdwzGLyV9BthyUaWmvzWAHEko9GniCtcC4DbxuSDd8kMINQ=w2400"
                alt="Final live version with identifying information blocked"
                width={1550}
                height={350}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Live version of the event listing with identifying information
                blocked
              </span>
            </div>
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczM8JkpWoM0fzFzgXp6XFUAKPoChrb7UBjpNPE9PwW_XIeLOqXRN8Mnop5MsnyyyFkKqUfy3habNm5FnKJLXbkJzPPXw5UCsto3rLjSK1k7YpPoHNw=w2400"
                alt="Code snippet"
                width={750}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Snippet of the code
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
