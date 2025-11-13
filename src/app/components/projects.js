import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div
        className="flex flex-col w-full items-start justify-start text-start italic"
        id="projects"
      >
        <h2 className="text-3xl sm:text-4xl font-medium tracking-wide dark:text-[#FFD43B]">
          Some of my recent projects
        </h2>
        <p className=" mt-3">
          I always have several things happening at once, as I tend to thrive in
          chaos.
        </p>
        <p>
          Check out the sites, coding puzzles, documentation, and volunteer work
          I&apos;ve been doing lately.
        </p>
      </div>

      <div className="flex lg:columns-2 items-center gap-10">
        <div className="flex flex-wrap w-full">
          <div className="flex w-full justify-stretch">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczPo4NFLe9SeaFSGkh34yTj--c14pHVvWmiTMcppthKRtJUYUgUzX4Pcjh6mU2zU7CRXC8pwIvU2EAGg3JXuGdWeyL_VF3OW0NdTJq50DQSi_HDNVw=w2400"
              alt="Puppalooza Screenshot"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="mx-3 w-full mb-8 lg:mb-0 items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">Puppalooza</h3>
            <span>
              <p className="my-2 text-justify">
                What to do when your foster pup turns out to be pregnant? Make a
                website to showcase the adoptable puppies along with links out
                to adoption information!
              </p>
            </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/Puppalooza">Learn More</Link>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap-reverse w-full justify-center sm:justify-start items-center">
          <div className="mx-3 items-center w-full">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
              USWDS Dynamic Tooltip
            </h3>
            <span className="flex w-full text-justify">
              <p className="my-2">
                A U.S. Web Design System (USWDS) component wasn't dynamic, so I
                dug into the source code, wrote a patch, and contributed the
                updated code back to the open-source community.
              </p>
            </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/Tooltip">Learn More</Link>
            </span>
          </div>

          <div className="w-full">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczMYqj7HnwzLyA1TT27uuIqsJixHcNORa67VPujvPYs3EX-mdPaqiCUDgenj6qATso3jyvpR2wYtS2oH30atMwDURQuO3m845oAv574xlsxboodbHxNNumN_bRSwOPrC3JM_TjL6bvEE5iDkWSG3cRs=w1489-h423-s-no-gm?authuser=0"
              alt="Tooltip code snippet"
              width={1500}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
