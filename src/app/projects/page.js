import Image from "next/image";
import Link from "next/link";
import Projects from "../components/projects";

export default function ProjectPage() {
  return (
    <>
      <Projects />

      <div className="lg:columns-2 items-center">

      <div className="flex flex-wrap w-full justify-center sm:justify-around items-center">
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczPzZYUHE9Ox8JeO8X_en16D3SGPrrRZw48BkUTVaNjmbIn8nyyR6U_BHyQiL7n2XJLv6Y8RY6HZPx3TkRmfoXJghTN42r7mG116Z4tvkZ6PhH3UPj4-80S02UQNuAz3-kSogULT3U8NAvcbkHwbFeY=w843-h255-s-no-gm?authuser=0"
            alt="Finished styling of the events with client identifiers blacked out"
            width={800}
            height={400}
            className="rounded-xl max-w-md shadow-lg"
          />
        </div>
        <div className="mx-3 max-w-lg mb-8 lg:mb-0 items-center">
          <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
            Event Styling
          </h3>
          <span>
            <p className="my-2">
              While working on a group project, I offered to lead usage of a
              third-party API and integration with the client&apos;s Drupal
              site. By the time I wrapped, I had written a custom Drupal module
              with a full page of JavaScript to manipulate the DOM.
            </p>
          </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/EventStyling">Learn More</Link>
          </span>
        </div>
      </div>

        <div className="flex flex-wrap-reverse w-full justify-center sm:justify-around items-center">
          <div className="mx-3 max-w-lg items-center">
          <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
            USWDS Dynamic Tooltip
          </h3>
          <span>
            <p className="my-2">
              When I had to write a patch to override the default behavior of a
              U.S. Web Design System (USWDS) component for a client, I took it a
              step further and used my own time to contribute the code back to
              the open-source community.
            </p>
          </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/Tooltip">Learn More</Link>
          </span>
        </div>
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczMYqj7HnwzLyA1TT27uuIqsJixHcNORa67VPujvPYs3EX-mdPaqiCUDgenj6qATso3jyvpR2wYtS2oH30atMwDURQuO3m845oAv574xlsxboodbHxNNumN_bRSwOPrC3JM_TjL6bvEE5iDkWSG3cRs=w1489-h423-s-no-gm?authuser=0"
            alt="Tooltip code snippet"
            width={1500}
            height={400}
            className="rounded-xl max-w-xs lg:max-w-md shadow-lg"
          />
        </div>
      </div>
      </div>

<div className="items-center">
      <div className="flex flex-wrap w-full justify-center sm:justify-around items-center">
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczOFj4B07PZdOdrVd_01iESQye7BEcV0rsMgZS1PbiURjfXOIqKL1kTVyjo1y1aDwGKxbLIDXxS26m2bo7b2_IlzjlSzdInQK1ltfMu2mi7JeyDgWA=w2400"
            alt="Table comparing SASS features with CSS alternatives"
            width={1000}
            height={800}
            className="rounded-xl max-w-xs lg:max-w-md shadow-lg"
          />
        </div>
        <div className="mx-3 max-w-lg mb-8 lg:mb-0 items-center">
          <h3 className="text-2xl my-3 dark:text-[#24e4e3] font-medium">
            CSS v SASS
          </h3>
          <span>
            <p className="my-2">
              I was tasked with determining whether an entire theme could be
              overhauled and changed from SASS-based to fully Vanilla CSS. The
              twist was whether it could be done with only a few weeks of solid
              work until it would be presented to the world.
            </p>
          </span>
          <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
            <Link href="/projects/CSSvSASS">Learn More</Link>
          </span>
        </div>
      </div>
      </div>
                <div className="flex gap-4 flex-row w-full items-center justify-center">
            <hr className="my-12 h-1 opacity-100 w-2/3" />
          </div>
    </>
  );
}
