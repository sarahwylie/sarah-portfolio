import Image from "next/image";
import Link from "next/link";
import Projects from "../components/projects";

export default function ProjectPage() {
  return (
    <>
      <Projects />

      <div className="flex lg:columns-2 items-center gap-10">
        <div className="flex flex-wrap w-full">
          <div className="flex w-full justify-stretch zoom-hover">
            <Link href="/projects/EventStyling">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczPzZYUHE9Ox8JeO8X_en16D3SGPrrRZw48BkUTVaNjmbIn8nyyR6U_BHyQiL7n2XJLv6Y8RY6HZPx3TkRmfoXJghTN42r7mG116Z4tvkZ6PhH3UPj4-80S02UQNuAz3-kSogULT3U8NAvcbkHwbFeY=w843-h255-s-no-gm?authuser=0"
                alt="Finished styling of the events with client identifiers blacked out"
                width={800}
                height={400}
                className="rounded-xl  w-full h-auto shadow-lg"
              />
            </Link>
          </div>
          <div className="mx-3 w-full mb-8 lg:mb-0 items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">Event Styling</h3>
            <span>
              <p className="my-2 text-justify">
                While working on a group project, I offered to lead usage of a
                third-party API and integration with the client&apos;s Drupal
                site. By the time I wrapped, I had written a custom Drupal
                module with a full page of JavaScript to manipulate the DOM.
              </p>
            </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/EventStyling">Learn More</Link>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap-reverse w-full justify-center sm:justify-start items-center">
          <div className="mx-3 w-full items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">Wildflower</h3>
            <span className="flex w-full text-justify">
              <p className="my-2">
                I gave myself a crash-course in WordPress by diving into
                volunteer web maintenance work.
              </p>
            </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/Wildflower">Learn More</Link>
            </span>
          </div>
          <div className="flex w-full justify-stretch zoom-hover">
            <Link href="/projects/Wildflower">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczMUEVv-iLkkbPpvfv69vctkVZX1f9cMaZmLzaipG5_i4WkBHKyw35pTDuIXlodq_NXv1Np7SfvjhvxABXU9mBtnLXEEvb_ZdiW7l1jWgLqKIUs7tg=w2400"
                alt="Wildflower website transition"
                width={800}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex lg:columns-2 items-center gap-10">
        <div className="flex flex-wrap w-full basis-1/2">
          <div className="flex w-full justify-stretch zoom-hover">
            <Link href="/projects/CSSvSASS">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczOFj4B07PZdOdrVd_01iESQye7BEcV0rsMgZS1PbiURjfXOIqKL1kTVyjo1y1aDwGKxbLIDXxS26m2bo7b2_IlzjlSzdInQK1ltfMu2mi7JeyDgWA=w2400"
                alt="Table comparing SASS features with CSS alternatives"
                width={1000}
                height={800}
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </Link>
          </div>
          <div className="mx-3 w-full mb-8 lg:mb-0 items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3] font-medium">
              CSS v SASS
            </h3>
            <span>
              <p className="my-2 text-justify">
                I was tasked with determining whether an entire theme could be
                overhauled and changed from SASS-based to fully Vanilla CSS. The
                twist was whether it could be done with only a few weeks of
                solid work until it would be presented to the world.
              </p>
            </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/CSSvSASS">Learn More</Link>
            </span>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex gap-4 flex-row w-full items-center justify-center">
        <hr className="my-12 h-1 opacity-100 w-full" />
      </div>
    </>
  );
}
