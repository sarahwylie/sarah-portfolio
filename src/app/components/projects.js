import Image from "next/image";
import Link from "next/link";
import Puppalooza from "./puppalooza.png";
import Wildflower from "./wildflower.png";

export default function Projects() {
  return (
    <>
      <div
        className="flex flex-col items-left justify-items-start text-center sm:text-start w-fit sm:w-auto italic"
        id="projects"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide dark:text-[#FFD43B]">
          Some of my recent projects
        </h2>
        <div className="m-4">
          I always have several things happening at once, as I tend to thrive in
          chaos. Check out the sites, coding puzzles, documentation, and volunteer work
          I&apos;ve been doing lately.
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center">
        <div>
          <Image
            src={Puppalooza}
            alt="Puppalooza Screenshot"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="mx-3 text-center sm:text-left">
          <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
            <strong>Puppalooza</strong>
          </h3>
          <span>
            <p className="my-2">
              What to do when your foster pup turns out to be pregnant? Make a
              website to showcase the adoptable puppies of course!
            </p>
          </span>
          <span className="my-2 dark:text-[#FFD43B] hover:text-[#C25C7E]">
            <strong>
              <Link href="/projects/Puppalooza">Learn More</Link>
            </strong>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap-reverse sm:flex-nowrap items-center justify-center">
        <div className="mx-3 text-center sm:text-right">
          <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
            <strong>Wildflower</strong>
          </h3>
          <span>
            <p className="my-2">
              I picked up WordPress while doing volunteer web maintenance work.
              It was a natural evolution from my Drupal experience, and after
              quickly learning the basics I committed to doing an accessibility
              and design overhaul of the landing page.
            </p>
          </span>
          <span className="my-2 dark:text-[#FFD43B] hover:text-[#C25C7E]">
            <strong>
              <Link href="/projects/Wildflower">Learn More</Link>
            </strong>
          </span>
        </div>

        <div className="xs:order-1">
          <Image
            src={Wildflower}
            alt="Wildflower website transition"
            width={800}
            height={600}
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
