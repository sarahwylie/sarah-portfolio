import Image from "next/image";

export default function Puppalooza() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
          Puppalooza
        </h1>
        <span className="m-4 italic">
          A cute pup was running around the neighborhood, and a rescue offered
          to catch her on the condition that someone offer to foster. One hour
          later we welcomed Willa into our home. As we settled into a new normal
          over the following weeks, we started to fall in love with this sweet
          baby. We also started to notice something was... off. We braced
          ourselves and prepped our lives, then rolled up our sleeves and helped
          Willa birth ten puppies! They grew quickly, and as they got older, I
          threw together a website in hopes of finding them all great adoptive
          homes.
        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mx-3 items-center justify-center">
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
              <span className="text-2xl my-3 dark:text-[#24e4e3]">
                Type
              </span>
              <p className="mx-2">Personal</p>
            <br />
            <div className="mb-10">
              <span className="text-2xl my-3 dark:text-[#24e4e3]">
                Visit
              </span>
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
        <hr className="my-12 h-1 opacity-100 w-2/3" />
      </div>

      <div className="w-full space-y-6 px-4 items-center content-center">
        <div className="grid sm:grid-cols-2 gap-2">
          <div className="text-left place-items-center content-center">
            <span className="mx-3">
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Project Purpose
              </h2>
              <p className="m-4 text-base">
                This website did not start with design ideas, color palettes, or
                wireframes, rather it was an effort to build something quickly
                to showcase the puppies that had unexpectedly come into our
                lives. I knew I could go back and add some flare to the site
                later, but who has time with so many puppies running around?!
              </p>
            </span>

            <span className="mx-3">
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Web Stack and Explanation
              </h2>
              <p className="m-4 text-base">
                I needed to build this site quickly, and I wouldn&apos;t need to
                scale up or store anything on the backend, so React felt like
                the logical choice. I already had experience with React,
                Tailwind made styling faster, and I was able to initiate the
                codebase, gather all the data, and publish within a couple days.
                <br />
                After I got the basic information posted, I needed to come up
                with a photo storage solution. With a massive focus on
                displaying photos for so many puppies (plus adding videos), this
                site wouldn&apos;t be able to host all that data on GitHub.
                After searching for a Content Delivery Network where I could
                store, host, deliver, and optimize the images, I ended up
                lowering my expectations considerably. CDNs can be pricey, and
                ultimately I needed a cheap option with minimal fuss. I decided
                on Google for its unbeatable price tag (free).
              </p>
            </span>

            <span className="mx-3">
              <h2 className="text-2xl my-3 dark:text-[#24e4e3]">
                Struggles and Reflections
              </h2>
              <p className="m-4 text-base">
                I took a big leap of faith in my ability to get a React project
                running quickly. Although I learned to code with React and
                JavaScript, I had never used Next.js, and my TypeScript was a
                bit rusty. Just like riding a bike, I wobbled a bit, but found
                myself moving quickly through each step. If I had to do it all
                over again, I might pay for a CDN to optimize the images. I am
                grateful that I used object arrays to map through the photos,
                though, as that made adding in new photos quick and easy.
              </p>
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
        <hr className="my-12 h-1 opacity-100 w-2/3" />
      </div>
    </main>
  );
}
