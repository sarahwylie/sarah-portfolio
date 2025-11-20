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
          <div className="flex w-full justify-stretch image-project-container">
            <Link href="/projects/Puppalooza">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczPo4NFLe9SeaFSGkh34yTj--c14pHVvWmiTMcppthKRtJUYUgUzX4Pcjh6mU2zU7CRXC8pwIvU2EAGg3JXuGdWeyL_VF3OW0NdTJq50DQSi_HDNVw=w2400"
              alt="Puppalooza Screenshot"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczNrG2hXk53IUM0N7VyUa2IRGaKqE4848Tne7fxP-LUiZMSZh1cOBKHg7f9qeYHTIvFc1PUimJSN07Se9DwiH0pPDyovMORb6ytpivDr7Ai9ZkoNfNj70xZ_XhpYVftg3eWiOIWtv8ztuQbFvKvEbfY=w1430-h648-s-no-gm?authuser=0"
              alt="Puppalooza overlay with tech tools listed"
              width={600}
              height={400}
              className="rounded-xl shadow-lg scribble-overlay"
            /></Link>
          </div>
          <div className="mx-3 w-full mb-8 lg:mb-0 items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">Puppalooza</h3>
            <span>
              <p className="my-2 text-justify">
                When our foster pup unexpectedly turned out to be pregnant, I did what any developer faced with ten newborn puppies would do — I built a website. The goal was simple: quickly create a platform to showcase each puppy and connect potential adopters with rescue resources.
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
                While developing a feature for a client website, I identified that the U.S. Web Design System (USWDS) Tooltip component couldn&apos;t dynamically update text, limiting user guidance and accessibility. Instead of building a custom solution under tight deadline constraints, I dug into the USWDS source code, wrote a patch to enable dynamic tooltip functionality, and contributed it back to the open-source project.
              </p>
            </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/Tooltip">Learn More</Link>
            </span>
          </div>

          <div className="flex w-full justify-stretch image-project-container">
            <Link href="/projects/Tooltip">
              <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczMYqj7HnwzLyA1TT27uuIqsJixHcNORa67VPujvPYs3EX-mdPaqiCUDgenj6qATso3jyvpR2wYtS2oH30atMwDURQuO3m845oAv574xlsxboodbHxNNumN_bRSwOPrC3JM_TjL6bvEE5iDkWSG3cRs=w1489-h423-s-no-gm?authuser=0"
              alt="Tooltip code snippet"
              width={1500}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
              <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczO9Ypw3Li5xE4y3M9kL9pzwCNA6Ft5R1HqYRx-Uo9SYOhwHm_7VWUqM_HRD7wTJZqrIXEz-5SAzllxtclhe_Avy5gOccENR54zBUGwo4GxS0SFzsoVCKO_OiywazTkoC28Xp-DGEufN_b8011F3K5w=w1489-h423-s-no-gm?authuser=0"
              alt="Tooltip overlay with tech tools listed"
              width={1500}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto scribble-overlay"
            />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
