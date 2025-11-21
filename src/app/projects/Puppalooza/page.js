import Image from "next/image";

export default function Puppalooza() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-start text-justify">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
          Puppalooza
        </h1>
        <span className="my-4 italic w-full text-justify">
          A stray pup was roaming the neighborhood when a local rescue agreed to
          catch her on the condition that someone step up to foster. An hour later, Willa
          settled into our home. Over the following weeks, we grew attached to
          her and also realized something was... off. We prepared ourselves, and
          before long, we welcomed ten puppies into the world.
          As they grew, I spun up a website to help them find loving homes. This
          website wasn&apos;t about polish, it was about speed, functionality,
          and sharing the puppies&apos; stories with prospective adopters.
        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
        <div className="items-center justify-center text-center">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczNuFh4L2WRBprzDUZLzoIPjAqxdit7352e92p5dYp6Lp8XsanU2Y7MO11LIrbDeRAry9C6-O0Nm2UK2Vwj5YsEPpbU4HyVb6DlMJ8RaFJdl3Xlwyg=w2400"
            alt="Cute puppy pictures"
            width={1450}
            height={275}
            className="rounded-xl shadow-lg"
          />
          <span className="text-sm tracking-tight italic">
            Sleepy puppy pictures
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">Type</span>
            <p className="mx-2">Personal</p>
            <br />
            <div className="mb-10">
              <span className="text-2xl my-3 dark:text-[#24e4e3]">Visit</span>
              <p className="dark:text-[#FFD43B] mx-2">
                <a
                  href="https://sarahwylie.github.io/puppalooza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the Puppalooza site in a new tab"
                >
                  View the live site
                </a>
              </p>
            </div>
          </div>
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">
              Built with
            </span>
            <ul className="list-none flex-col mx-2">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
              <li>GitHub Pages</li>
              <li>Google Images</li>
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
              <h2 className="text-2xl my-2 dark:text-[#24e4e3] font-semibold">
                Project Purpose
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                This project started out of necessity, not aesthetics. With ten
                puppies needing attention (and energy), there was no time for
                design planning or wireframing. I built the first version fast
                to get the word out, knowing I could iterate on the visuals
                later.
              </p>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Tech Stack & Approach
              </h2>
              <span className="mt-4 text-base w-full text-justify">
                <ul className="list-disc">
                  <li className="ml-6 my-1">
                    <span className="font-semibold">React & Next.js</span>: I
                    already knew React from bootcamp, so I quickly ramped up on
                    Next.js to speed up development and simplify deployment.
                  </li>

                  <li className="ml-6 my-1">
                    <span className="font-semibold">Tailwind CSS</span>: Enabled
                    rapid styling without losing time on UI details.
                  </li>

                  <li className="ml-6 my-1">
                    <span className="font-semibold">
                      Static content strategy
                    </span>
                    : Since the site didn&apos;t require backend scaling or
                    persistent data, a statically generated approach made the
                    most sense.
                  </li>

                  <li className="ml-6 my-1">
                    <span className="font-semibold">Photo hosting</span>: With
                    so many images (and some videos), GitHub storage wasn&apos;t
                    feasible. After researching CDNs, I opted to use Google
                    Photos due to cost-effectiveness and simplicity (free {">"}{" "}
                    fancy).
                  </li>
                </ul>
                I launched the site within a couple of days of initiating the
                codebase.
              </span>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Challenges & Lessons Learned
              </h2>
              <span className="mt-4 text-base w-full text-justify">
                I leaned heavily on fast decision-making and fundamentals. I
                navigated:
                <ul className="list-disc">
                  <li className="ml-6 my-1">
                    Ramp-up on Next.js while building under time pressure
                  </li>
                  <li className="ml-6 my-1">
                    Brushing off rusty TypeScript skills{" "}
                  </li>
                  <li className="ml-6 my-1">
                    Managing large image handling efficiently{" "}
                  </li>
                  <li className="ml-6 my-1">
                    Designing for usability without formal prep
                  </li>
                </ul>
                If I were to revisit the project, I might invest in a proper CDN
                to optimize images and performance. One thing I was grateful to
                have done from the beginning was creating object arrays to map
                photos — it made adding new puppy pics and (p)updates incredibly
                efficient.
              </span>
            </span>
          </div>
          <div className="grid grid-col md:grid-cols-2 gap-4 w-full place-items-center content-center">
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczO7H3QgD6oVnB0sqITbdEBPWIFB4Nadu7OEtrGZR7JChSgwyjDylxE7WNnkIPacwxPAkKw6KyU6iS-mJDLXi4bRSop03cQWjE6iSHq4qs9G4EtyPw=w2400"
                alt="Puppalooza homepage"
                width={300}
                height={850}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Puppalooza homepage
              </span>
            </div>
            <div className="grid grid-col justify-items-center gap-4">
              <div>
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczNf-wiE9DDr51mlyejKkpVedTe9cLQpnqPg2RO6dy5fA6i0Z59EFZ346xGWA4d9Kvhv_cFCiro6VFmWol-dFLeDa_1WMEOqNokTwI4mkzynF4ekIA=w2400"
                  alt="Kathleen's page"
                  width={200}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <span className="text-sm tracking-tight text-center italic">
                  Kathleen&apos;s page
                </span>
              </div>
              <div>
                <Image
                  src="https://lh3.googleusercontent.com/pw/AP1GczNm1trZzClOTzjcvUGl1ZWIOYA2uJb7ogwpyH26BuTk2XD8tjoACuZXYt2Ighyg8q354C3DaIYbI4wDZ1ou-Qgx1_ERXcBn9G34C_gqnXEYxXHARA=w2400"
                  alt="Playtime Album"
                  width={175}
                  height={450}
                  className="rounded-xl shadow-lg"
                />
                <span className="text-sm tracking-tight text-center italic">
                  Playtime page
                </span>
              </div>
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
