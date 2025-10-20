import Image from "next/image";
import Divider from "../../divider.jpg";

export default function EventStyling() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-10 dark:text-[#FFD43B]">
          Event Styling
        </h1>
        <span className="m-4 italic">

        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mx-3 items-center justify-center text-center">
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczMXrMggiaXMiJGlX-axk4TAOXXE0nh9jbmx3aoIdGp65ZlnYqVrozkiXCsmvkQZf4d8ed7LJWh0zD5EoMLysJ7lckaXuwLxSvUsjQw98JKUEUYkeQ=w2400"
            alt="Custom module setup code"
            width={950}
            height={300}
            className="rounded-xl shadow-lg"
          />
          <span className="text-sm tracking-tight text-center italic">
            Base files needed for setting up the custom module
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <span className="gap-4">
              <strong className="text-2xl my-3 dark:text-[#24e4e3]">
                Type
              </strong>
              <p>Group Work Assignment</p>
            </span>
            <br />
            <span className="mb-10">
              <strong className="text-2xl my-3 dark:text-[#24e4e3]">
                Visit
              </strong>
              <p>
                <a
                  href="https://gist.github.com/sarahwylie/039f4d55df8ab88a92397566817ca960"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the GitHub Gist code"
                >
                  <strong className="dark:text-[#FFD43B]">View the Gist</strong>
                </a>
              </p>
            </span>
          </div>
          <div>
            <strong className="text-2xl my-3 dark:text-[#24e4e3]">
              Built with
            </strong>
            <span>
              <ul className="text-center list-none flex-col">
                <li>Drupal</li>
                <li>JavaScript</li>
                <li>Mutation Observer</li>
                <li>Custom Module</li>
                <li>Third-Party API</li>
              </ul>
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center my-6">
        <Image
          src={Divider}
          alt="Horizontal divider"
          className="rounded-md text-center"
        />
      </div>

      <div className="w-full space-y-6 px-4 items-center content-center">
        <div className="grid sm:grid-cols-2 gap-2">
          <div className="text-center sm:text-left place-items-center content-center">
            <span className="mx-3">
              <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                <strong>Project Purpose</strong>
              </h3>
              <p className="m-4 text-base">
                This project's client relied on a third-party events integration tool, 25Live, to manage and display event data. The client wanted the embedded calendar component (“Event Slider Spud”) to match specific wireframes—centered text, consistently placed navigation arrows, and customized styling. However, 25Live&apos;s widget offered limited styling options and no native support for the requested layout.
Rather than tell the client their request couldn&apos;t be fulfilled, I obtained approval to investigate a workaround. After analyzing the integration&apos;s structure, I discovered the widget was rendered inside an iframe, which restricted our ability to style or manipulate its content directly. I developed a custom Drupal module that used JavaScript to monitor the iframe&apos;s DOM state. Using a combination of a MutationObserver, a Promise, and a setTimeout, I delayed the injection of custom styles until the iframe had fully rendered. This allowed us to apply the necessary styling reliably—even during user interactions like scrolling or clicking. Initially, the styles could be injected without the observer, but user interaction would cause them to disappear until the page reloaded. Implementing the observer resolved this, ensuring a seamless and persistent experience for end users.
To ensure long-term maintainability, I wrote detailed documentation for the client. It covered how to create and manage event calendars in 25Live, how to connect them to the Drupal site, and how to update the slider configuration and code as needed. This solution allowed us to fully meet the design specifications within a limited framework, while providing a sustainable approach for the client post-launch.
              </p>
            </span>

            <span className="mx-3">
              <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                <strong>Web Stack and Explanation</strong>
              </h3>
              <p className="m-4 text-base">
                This project marked my first foray into Site Studio, which is a version of Drupal that is supposed to allow companies more flexibility by making the majority of the back-end no-code once the initial setup is complete. I was part of the initial setup, and aside from a couple of people knowledgeable in basic HTML, the stakeholders were all non-technical people. I had to keep reminding myself not to underestimate the platform, as drag-and-drop elements can often be the most difficult to work with when someone is accustomed to building with code.
              </p>
            </span>

            <span className="mx-3">
              <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                <strong>Struggles and Reflections</strong>
              </h3>
              <p className="m-4 text-base">
                My project team and I were all learning Site Studio on the fly as we built. Additionally, our lead developer was unexpectedly hospitalized at the beginning of this project, shortly after he had put the development standards in place. I was asked to step into the role until his return, but struggled with no access to his information. This was a fantastic learning experience for me, as I was able to document what I didn't have, what I didn't know, and how I could record everything I do within a group project so someone could easily step into my role. 
              </p>
            </span>
          </div>
          <div className="grid grid-col md:grid-cols-2 gap-4 w-full place-items-center content-center">
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczMSuHDZW_fsjFbZYvL4XMBtdshwa3V-VykOBth_4JbjBLkvLmvkNqzfaQjFkLO5xevgdwzGLyV9BthyUaWmvzWAHEko9GniCtcC4DbxuSDd8kMINQ=w2400"
                alt="Final live version with identifying information blocked"
                width={1550}
                height={350}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Live version of the event listing with identifying information blocked
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
    </main>
  );
}
