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
          I am a lifelong learner, and I am always seeking out new opportunities
          to grow my skills and knowledge.
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
                I grew up learning that a degree opens doors for my future. I
                was passionate about literature and writing, so I pursued a
                degree in English with minors in Native American Studies (a
                byproduct of the English classes I was already required to take,
                but one that I loved pursuing) and Global Studies. My time at
                the University of Minnesota taught me to think critically,
                communicate effectively, and approach problems with creativity
                and empathy. These skills have been invaluable in my journey as
                a web developer.
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
                I was new to coding, but a fast learner and mature enough to
                really take this seriously. We breezed through HTML and CSS,
                then we dove into React and JavaScript. We also touched on
                backend development with Node.js, Express, and MongoDB. I loved
                the fast pace and the challenge of learning so much in such a
                short time. After only six months, I felt cautiously ready to
                take on the world of web development.
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
                When I was still struggling to find a job after six months of
              being unemployed, I took a long shot on an internship. The premise
              was that a company would pay for me to complete a three-month
              online intensive learning Drupal, then I would intern at that
              company for three months. I had never even heard of Drupal, but{" "}
              <a href="https://www.drupaleasy.com/users/ultimike" target="_blank"
              aria-label="Open Mike Anello's website" className="font-semibold">
                Mike Anello&apos;s
              </a>{" "}
              class (along with the amazing mentorship of{" "}
              <a href="https://www.drupal.org/u/iajon" target="_blank"
            aria-label="See Alex Jones's Drupal profile" className="font-semibold">Alex Jones</a>) got me up
              to speed in time to start at{" "}
              <a href="https://www.palantir.net/" target="_blank"
            aria-label="Visit the Palantir.net company website" className="font-semibold">Palantir.net</a>. By the time
              I was hired at the end of my internship, I was already using my
              JavaScript skills to help build a breakthrough collaborative
              editing module.
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
                Midway through my bootcamp, several accomplished software
                engineers were also seeking work thanks to a major tech
                company&apos;s layoffs. I was applying, networking, applying,
                interviewing, applying... you get the idea. One of the companies
                to which I applied offered a learning oppotunity in conjunction
                with helping to find me a job, so I jumped in.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
