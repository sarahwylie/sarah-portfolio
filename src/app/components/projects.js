import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div
        className="flex flex-col items-left justify-items-start text-center sm:text-start w-fit sm:w-auto italic"
        id="projects"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide dark:text-[#FFD43B]">
          Some of my recent projects
        </h2>
        <p className="mx-4">
          I always have several things happening at once, as I tend to thrive in
          chaos.
        </p>
        <p className="mx-4">
          Check out the sites, coding puzzles, documentation, and volunteer work
          I&apos;ve been doing lately.
        </p>
      </div>

      <div className="lg:columns-2 items-center">
        
        <div className="flex flex-wrap w-full justify-center sm:justify-around items-center">
          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczPo4NFLe9SeaFSGkh34yTj--c14pHVvWmiTMcppthKRtJUYUgUzX4Pcjh6mU2zU7CRXC8pwIvU2EAGg3JXuGdWeyL_VF3OW0NdTJq50DQSi_HDNVw=w2400"
              alt="Puppalooza Screenshot"
              width={600}
              height={400}
              className="rounded-xl max-w-md shadow-lg"
            />
          </div>
          <div className="mx-3 max-w-lg mb-8 lg:mb-0 items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
              <strong>Puppalooza</strong>
            </h3>
            <span>
              <p className="my-2">
                What to do when your foster pup turns out to be pregnant? Make a
                website to showcase the adoptable puppies of course!
              </p>
            </span>
            <span className="my-2 dark:text-[#FFD43B] hover:text-[#FF862E]">
              <strong>
                <Link href="/projects/Puppalooza">Learn More</Link>
              </strong>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap-reverse w-full justify-center sm:justify-around items-center">
          <div className="mx-3 max-w-lg items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
              <strong>Wildflower</strong>
            </h3>
            <span>
              <p className="my-2">
                I picked up WordPress while doing volunteer web maintenance
                work. It was a natural evolution from my Drupal experience, and
                after quickly learning the basics I committed to doing an
                accessibility and design overhaul of the landing page.
              </p>
            </span>
            <span className="my-2 dark:text-[#FFD43B] hover:text-[#FF862E]">
              <strong>
                <Link href="/projects/Wildflower">Learn More</Link>
              </strong>
            </span>
          </div>

          <div>
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczMUEVv-iLkkbPpvfv69vctkVZX1f9cMaZmLzaipG5_i4WkBHKyw35pTDuIXlodq_NXv1Np7SfvjhvxABXU9mBtnLXEEvb_ZdiW7l1jWgLqKIUs7tg=w2400"
              alt="Wildflower website transition"
              width={800}
              height={600}
              className="rounded-xl max-w-xs lg:max-w-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
