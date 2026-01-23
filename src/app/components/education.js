import Image from "next/image";

export default function Education() {
  return (
    <>
      <div
        className="flex flex-col items-left justify-items-start text-start w-fit sm:w-auto italic"
        id="education"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide dark:text-[#FFD43B]">
          My educational journey
        </h2>
        <p className="mt-3">
          Just having a diploma doesn&apos;t cut it in this industry.
        </p>
        <p>
          I am a lifelong learner, always seeking new opportunities to level up
          my skills and expand what I can build.
        </p>
      </div>

      <div className="flex lg:columns-2 items-center gap-10">
        <div className="flex flex-wrap-reverse w-full justify-start items-center gap-4 mb-10 lg:mb-0">
          <div className="items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
              Bachelor&apos;s Degree
            </h3>
            <span>
              <p className="my-2 text-base w-full text-justify">
                I grew up believing education opened doors, so I pursued what I
                loved most—literature and writing. I earned my English degree
                from the University of Minnesota, along with minors in Native
                American Studies and Global Studies. My time at the University
                of Minnesota taught me to think critically, communicate
                effectively, and approach problems with creativity and empathy.
                Those same skills now anchor the way I approach problem-solving
                and collaboration as a web developer.
              </p>
            </span>
          </div>
          <div className="flex w-full justify-center">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczO9qSbMFibY-tu-ZrXwyfswiZHChTuyP9ZUFbH6A4f6DDsQDiXgMTUbT-b6KnQPmR9-fRkLRGGwMkDxI8Y9W19GpBHu50_ubVGsadj4nqOobZ4RwQ=w2400"
              alt="University of Minnesota Logo"
              width={800}
              height={600}
              className="rounded-xl shadow-lg max-w-3xs"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-full justify-start items-center gap-4">
          <div className="flex w-full justify-center">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczOSdEZU-OQUlT4jgY2wfLfFW6uPm989Pqk68BwiJyNwEdkWEPtndcIXNrnt71l_dAkBdJs7-C2vhZThQz60FRGsUmmC0F85xSfIWV8zATwiNrbv4g=s225-p-k"
              alt="University of Texas at Austin Logo"
              width={800}
              height={800}
              className="rounded-xl shadow-lg max-w-3xs"
            />
          </div>
          <div className="mb-8 lg:mb-0 items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">Bootcamp</h3>
            <span>
              <p className="my-2 text-base w-full text-justify">
                I came into coding fresh but ready to grind. We sped through
                HTML and CSS before diving deep into JavaScript and React, with
                a taste of backend development using Node.js, Express, and
                MongoDB. The pace was intense, but I thrived. By the end of six
                months, I felt cautiously, but genuinely, ready to step into the
                world of web development.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex lg:columns-2 items-center gap-10">
        <div className="flex flex-wrap-reverse w-full justify-start items-center gap-4">
          <div className="mx-2 items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">DrupalEasy</h3>
            <span>
              <p className="my-2 text-base w-full text-justify">
                Six months into unemployment, I took a chance on a specialized internship. A partner company would fund a three-month online Drupal intensive and bring me on as an intern for another three. I had never even heard
                of Drupal, but{" "}
                <a
                  href="https://www.drupaleasy.com/users/ultimike"
                  target="_blank"
                  aria-label="Open Mike Anello's website"
                  className="font-semibold"
                >
                  Mike Anello&apos;s
                </a>{" "}
                course (along with the amazing mentorship of{" "}
                <a
                  href="https://www.drupal.org/u/iajon"
                  target="_blank"
                  aria-label="See Alex Jones's Drupal profile"
                  className="font-semibold"
                >
                  Alex Jones
                </a>
                ) got me up to speed fast. By the time I joined {" "}
                <a
                  href="https://www.palantir.net/"
                  target="_blank"
                  aria-label="Visit the Palantir.net company website"
                  className="font-semibold"
                >
                  Palantir.net
                </a>
                , I was
                already contributing JavaScript expertise to a breakthrough collaborative editing module. I was hired full-time at the end of the internship.
              </p>
            </span>
          </div>
          <div className="flex w-full justify-center">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczPkPktMLe8luyLR-gmvf4GuGCkMUD0nOjoOXOCVpDiQ8V8MStePkqac4r38TNxUJF2RxqAAdgIvloxZKMdxPDaGaBBhqYHDi9gYJsAx-I5Y9PoZvg=w2400"
              alt="Sarah with Drupal Career Online Certificate"
              width={600}
              height={800}
              className="rounded-xl shadow-lg max-w-3xs"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-full justify-start items-center gap-10">
          <div className="flex w-full justify-center">
            <a
              href="https://www.credential.net/embed/bd46cc82-4e3f-409b-a2a3-f29b28415385"
              target="_blank"
              aria-label="See the full certificate in a new tab"
            >
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczPLwcZHC34W9dabwLZbKBAh81nJaXR8IEM5bMgUxJ9gBLHr1w9hbJITpR0SPL04NbF1F_bJ_tAyipe4PDWalM5nGwLuMIVYAK1uluLc5AZuPycc7zQCEoX0E2SnAji7fmyARRqZ-rmsxVs68MoTXlA=w380-h379-s-no-gm?authuser=0"
                alt="FastTrack Training Program Badge"
                width={800}
                height={800}
                className="rounded-full shadow-lg max-w-3xs"
              />
            </a>
          </div>
          <div className="mx-3 mb-8 lg:mb-0 items-center">
            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">Cook Systems</h3>
            <span>
              <p className="my-2 text-base w-full text-justify">
                Midway through my bootcamp, the job market tightened as seasoned engineers flooded the field after major tech layoffs.  I was deep in the apply-network-interview cycle when Cook Systems offered a structured learning program paired with job placement support. I jumped in and kept sharpening my skills while searching for the right opportunity.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
