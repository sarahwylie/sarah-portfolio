import Link from "next/link";
import Projects from "../components/projects";
import HoverImage from "../components/hoverImage";

export default function ProjectPage() {
  return (
    <>
      <Projects />

      <div className="grid lg:grid-cols-2 content-center gap-10">
        <div className="w-full">
          <div className="w-full content-stretch">
            <Link href="/projects/EventStyling">
              <HoverImage
                defaultSrc="https://lh3.googleusercontent.com/pw/AP1GczPzZYUHE9Ox8JeO8X_en16D3SGPrrRZw48BkUTVaNjmbIn8nyyR6U_BHyQiL7n2XJLv6Y8RY6HZPx3TkRmfoXJghTN42r7mG116Z4tvkZ6PhH3UPj4-80S02UQNuAz3-kSogULT3U8NAvcbkHwbFeY=w843-h255-s-no-gm?authuser=0"
                hoverSrc="https://lh3.googleusercontent.com/pw/AP1GczMEDAP0QM7_F2Abj_RUZ2bXiiWgNOmHT3-zwzNvesCh6thOUYH8Xi2-t-W8svKnm0y8EhjkoVcQkv7bFx2eEV90ceF0M8NOdWhb2aTCngWZW_hlqM68AJZ_xtF9YqDfSM8XDmygFqqhFWIiKsLEXtg=w843-h255-s-no-gm?authuser=0"
                altText="Finished styling of the events with client identifiers blacked out"
                width={800}
                height={400}
              />
            </Link>
          </div>
          <div className="mx-3 w-full mb-8 lg:mb-0 content-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">Event Styling</h3>
            <span>
              <p className="my-2 text-justify">
                I led integration of a third-party events API into a
                client&apos;s Drupal site and ultimately designed a custom
                module to apply dynamic styling to a stubborn embedded widget.
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
                I taught myself WordPress by volunteering as the primary site
                maintainer for a nonprofit — turning community service into a
                hands-on crash course in responsive design, accessibility, and
                performance optimization.
              </p>
            </span>
            <span className="my-2 hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] tracking-widest font-medium">
              <Link href="/projects/Wildflower">Learn More</Link>
            </span>
          </div>
          <div className="flex w-full justify-stretch">
            <Link href="/projects/Wildflower">
              <HoverImage
                defaultSrc="https://lh3.googleusercontent.com/pw/AP1GczMUEVv-iLkkbPpvfv69vctkVZX1f9cMaZmLzaipG5_i4WkBHKyw35pTDuIXlodq_NXv1Np7SfvjhvxABXU9mBtnLXEEvb_ZdiW7l1jWgLqKIUs7tg=w2400"
                hoverSrc="https://lh3.googleusercontent.com/pw/AP1GczMehNSD5_uuvmh6FemH1xwyFvb0E1YL-kAXIjZ0mec189jVL9Ee-q51KMSpnQvcko215coRpmPM-dGIoZcCO8ufZKBHoGQRcQQL2PXWM60rPzl0HffIDeqZuaQzMyZ28iTKRZWGws-04c5zTfP2-QI=w932-h448-s-no-gm?authuser=0"
                altText="Wildflower website transition"
                width={800}
                height={600}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 content-center gap-10">
        <div className="w-full">
          <div className="w-full content-stretch">
            <Link href="/projects/CSSvSASS">
              <HoverImage
                hoverSrc="https://lh3.googleusercontent.com/pw/AP1GczOxIaLOKsRVIObSnvUAQrYtTDN0LMZuUPuFdWRYz3j12v8mdJsLNC-OefyBFIqOhkIXeDQPi-R-3TuBe9KlX3Bcy0FQUhxAI-3wgSVZIz5Pl4Zb-XJrn2UM6uzYDiBp09IDvllZwC7TbR7MM7n6jJE=w519-h381-s-no-gm?authuser=0"
                defaultSrc="https://lh3.googleusercontent.com/pw/AP1GczOFj4B07PZdOdrVd_01iESQye7BEcV0rsMgZS1PbiURjfXOIqKL1kTVyjo1y1aDwGKxbLIDXxS26m2bo7b2_IlzjlSzdInQK1ltfMu2mi7JeyDgWA=w2400"
                altText="Table comparing SASS features with CSS alternatives"
                width={1000}
                height={800}
              />
            </Link>
          </div>
          <div className="mx-3 w-full mb-8 lg:mb-0 content-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3] font-medium">
              CSS v SASS
            </h3>
            <span>
              <p className="my-2 text-justify">
                I was assigned to evaluate whether the{" "}
                <a
                  href="https://www.drupal.org/"
                  target="_blank"
                  aria-label="Visit Drupal.org website"
                  className="font-semibold"
                >
                  Drupal.org
                </a>
                site could replace its SASS-based theme with fully Vanilla CSS
                under an aggressive timeline of just a few weeks before the
                public reveal.
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
