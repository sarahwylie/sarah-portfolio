import Image from "next/image";

export default function EventStyling() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-start text-justify">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
          Event Styling
        </h1>
        <span className="my-4 italic w-full text-justify">
          I was tasked with using a third-party events integration tool to style
          an embedded widget. After several direct attempts failed, I developed
          a custom Drupal module that used JavaScript to inject custom styles.
          This allowed us to apply the necessary styling reliably, even when the
          DOM updated (during user interactions like scrolling or clicking).
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
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
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
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Web Stack and Explanation
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                This project marked my first foray into Site Studio, which is a
                version of Drupal that is supposed to allow companies more
                flexibility by making the majority of the back-end no-code once
                the initial setup is complete. I was part of the initial setup,
                and aside from a couple of people knowledgeable in basic HTML,
                the stakeholders were all non-technical people. I had to keep
                reminding myself not to underestimate the platform, as
                drag-and-drop elements can often be the most difficult to work
                with when someone is accustomed to building with code.
              </p>
            </span>

            <span>
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Struggles and Reflections
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                My project team and I were all learning Site Studio on the fly
                as we built. Additionally, our lead developer was unexpectedly
                hospitalized at the beginning of this project, shortly after he
                had put the development standards in place. I was asked to step
                into the role until his return, but struggled with no access to
                his information. This was a fantastic learning experience for
                me, as I was able to document what I didn&apos;t have, what I
                didn&apos;t know, and how I could record everything I do within
                a group project so someone could easily step into my role.
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
