import Image from "next/image";

export default function Wildflower() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-start text-justify">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
          Wildflower Unitarian Universalist
        </h1>
        <span className="my-4 italic w-full text-justify">
          I am always seeking volunteer opportunities, but I often have to be
          discerning because I have too many causes that are close to my heart. I was
          raised{" "}
          <a
            href="https://www.uua.org/"
            target="_blank"
            aria-label="Visit the UUA website in a new tab"
            className="font-semibold"
          >Unitarian Universalist </a>
          in Wisconsin, and when all four of my children
          came into our lives, I sought all the community help I could find,
          including joining the local UU church. One of the membership
          requirements included volunteer hours, and after looking through my
          options, I decided maintaining the website would fulfill my drive to
          continuously learn new things.
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
                  <p className="hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] mx-2">View the live site</p>
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
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Project Purpose
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                As mentioned above, this site fulfilled my drive to learn while
                simultaneously allowing me to fulfill a volunteer requirement.
                The beauty of this site is that I had full control with bits of
                help as I got up to speed. I started with simple updates each
                week, then commited to overhauling some of the more major
                responsivity and accessibility faults on the homepage. This is
                an ongoing project, but I am proud of the progress I have made
                so far. Baby steps to success!
              </p>
            </span>

            <span>
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Web Stack and Explanation
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                The Wildflower site was already built in WordPress, so I
                inherited it from a series of people (some developers and some
                not) who had piecemealed new sections into the existing
                framework. I noticed immediately that the site was not
                responsive, not WCAG-compliant, and its SEO score was low,
                mostly due to excessive load times. I cleared out any
                unnecessary plugins, added in an SEO tool, overhauled the menu,
                and utilized cache clearing. I dug into the codebase and started
                updating color contrast values in locations that don&apos;t
                allow for a direct change. I am continuing to work on this in my
                spare time, so it will continue to evolve (as we should all
                strive to do).
              </p>
            </span>

            <span>
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Struggles and Reflections
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                I have no design training, so knowing how to arrange all the
                elements in a cohesive and understandable order was challenging,
                but figuring out color schemes was even harder. My Figma board
                started out messy, but once I copied each of the existing
                elements onto the board, the layout of the new homepage became a
                little easier. I hit some roadblocks working with the existing
                theme, but learned to work with it as often as possible (using
                the theme to override CSS), or work around it when necessary
                (adding a plugin to make the menu responsive).
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
