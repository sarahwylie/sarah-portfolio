import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDrupal,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import CoderGirl from "./codergirl.jpg";
import Divider from "./divider.jpg";
import Puppalooza from "./puppalooza.png";
import Wildflower from "./wildflower.png";
import Sk8rGirl from "./linkedin.webp";
import FastTrack from "./FastTrackBadge.png";
import UT from "./UT.png";
import DCO from "./DCOCert.JPG";
import UMN from "./umn.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-8 pb-10 gap-16 font-[family-name:var(--font-geist-sans)] w-full">
      <div className="mt-10 flex flex-col xs:flex-row">
        <header className="grid gap-6 md:gap-24 grid-cols-4 justify-items-center dark:text-[#FFD43B] ">
          <span>
            <a href="#about" className="sm:text-3xl text-xl/9 font-bold">
              About
            </a>
          </span>
          <span>
            <a href="#education" className="sm:text-3xl text-xl/9 font-bold">
              Education
            </a>
          </span>
          <span>
            <a href="#projects" className="sm:text-3xl text-xl/9 font-bold">
              Projects
            </a>
          </span>
          <span>
            <a href="#contact" className="sm:text-3xl text-xl/9 font-bold">
              Contact
            </a>
          </span>
        </header>
      </div>
      <div>
        <main className="flex flex-col gap-[32px] row-start-2 mb-10">
          <div className="items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-10">
              Hi! I&apos;m Sarah.
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold italic">
              I am a Web Developer, Nature Enthusiast, Animal Lover, and
              Lifelong Learner.
            </h2>
            <br />
            <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center">
              <Image
                src={CoderGirl}
                alt="Woman emitting code from her hand"
                className="rounded-md"
              />
            </div>
            <div className="text-sm tracking-tight text-center italic">
              Image courtesy of{" "}
              <a
                href="https://www.jackgraham.net/"
                title="World's finest UX-er"
                target="_blank"
              >
                Jack Graham
              </a>
            </div>
            <br />
            <div className="whitespace-pre-line text-lg/8 sm:text-xl/9 text-center font-bold">
              <p>
                I am a passionate web developer with a love for creating
                beautiful, functional, and accessible web applications.
              </p>
              <p>
                I believe in the power of technology to make a positive impact
                on the world.
              </p>
              <br />
              <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center">
                <Image
                  src={Divider}
                  alt="Horizontal divider"
                  className="rounded-md text-center"
                />
              </div>
            </div>
          </div>
          {/* ABOUT  */}
          <div
            className="text-base sm:text-lg justify-items-start text-start"
            id="about"
          >
            <p>
              Although I have always loved puzzles, I had a circuitous route to
              web development.
            </p>
            <br />
            <p className="md:indent-4">
              Shortly out of college, I scored a job I loved running youth
              programming at a major public library. Unfortunately, the role was
              only part-time and contingent on grant funding.
            </p>
            <br />
            <p className="md:indent-8">
              I opted to follow a different passion, quit the job, and moved to
              Chicago to play roller derby at the highest level. Out of
              necessity, I obtained a role in the financial industry, and that
              supported me enough to travel the world playing roller derby.
            </p>
            <br />
            <div className="items-center justify-center">
              <div className="flex gap-4 flex-row w-fit sm:w-auto">
                <Image
                  src={Sk8rGirl}
                  alt="Roller derby skater surrounded by code"
                  className="rounded-md"
                />
              </div>
              <div className="text-sm tracking-tight text-center italic">
                Image courtesy of{" "}
                <a
                  href="https://www.jackgraham.net/"
                  title="World's finest UX-er"
                  target="_blank"
                >
                  Jack Graham
                </a>
              </div>
            </div>
            <br />
            <p className="md:indent-12">
              After I hung up my skates and moved across the country to Austin,
              TX, I knew I wanted to find something that would fulfill my drive
              to help others. I also knew I wanted to pursue my drive for
              continuous learning, so I found a coding bootcamp and fell in love
              with the process of building things.
            </p>
            <br />
            <p className="md:indent-16">
              I took the plunge and left the financial industry to pursue web
              development full-time, which started my journey with some of the
              most incredible mentors. My learning journey is still ongoing, and
              I am astounded by all the (sometimes unlikely) mentors I encounter
              along the way.
            </p>
          </div>

          <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center">
            <Image
              src={Divider}
              alt="Horizontal divider"
              className="rounded-md text-center mb-6"
            />
          </div>
          {/* EDUCATION  */}
          <div
            className="flex flex-col items-left justify-items-start text-center sm:text-start"
            id="education"
          >
            <h2 className="text-3xl sm:text-4xl font-bold italic tracking-wide mb-6 dark:text-[#FFD43B]">
              My educational journey
            </h2>
            <span>
              Just having a diploma doesn&apos;t cut it in this industry. I am a
              lifelong learner, and I am always seeking out new opportunities to
              grow my skills and knowledge.
            </span>
          </div>

          <div className="flex flex-wrap-reverse sm:flex-nowrap items-center justify-center">
            <div className="mx-3 text-center sm:text-right">
              <h3 className="text-2xl my-3 dark:text-[#FFD43B]">
                <strong>Bachelor&apos;s Degree</strong>
              </h3>
              <span>
                <p className="my-2">
                  I grew up learning that a degree opens doors for my future. I
                  was passionate about literature and writing, so I pursued a
                  degree in English with minors in Native American Studies (a
                  byproduct of the English classes I was already required to
                  take, but one that I loved pursuing) and Global Studies. My
                  time at the University of Minnesota taught me to think
                  critically, communicate effectively, and approach problems
                  with creativity and empathy. These skills have been invaluable
                  in my journey as a web developer.
                </p>
              </span>
            </div>
            <div className="xs:order-1">
              <Image
                src={UMN}
                alt="University of Minnesota Logo"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center">
            <div>
              <Image
                src={UT}
                alt="University of Texas at Austin Logo"
                width={800}
                height={800}
                className="rounded-xl"
              />
            </div>
            <div className="mx-3 text-center sm:text-left">
              <h3 className="text-2xl my-3 dark:text-[#FFD43B]">
                <strong>Bootcamp</strong>
              </h3>
              <span>
                <p className="my-2">
                  I was new to coding, but a fast learner and mature enough to
                  really take this seriously. We breezed through HTML and CSS,
                  then we dove into React and JavaScript. We also touched on
                  backend development with Node.js, Express, and MongoDB. I
                  loved the fast pace and the challenge of learning so much in
                  such a short time. After only six months, I felt cautiously
                  ready to take on the world of web development.
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap-reverse sm:flex-nowrap items-center justify-center">
            <div className="mx-3 text-center sm:text-right">
              <h3 className="text-2xl my-3 dark:text-[#FFD43B]">
                <strong>Cook Systems</strong>
              </h3>
              <span>
                <p className="my-2">
                  Midway through my bootcamp, several accomplished software
                  engineers were also seeking work thanks to a major tech
                  company&apos;s layoffs. I was applying, networking, applying,
                  interviewing, applying... you get the idea. One of the
                  companies to which I applied offered a learning oppotunity in
                  conjunction with helping to find me a job, so I jumped in.
                </p>
              </span>
            </div>
            <div className="xs:order-1">
              <a
                href="https://www.credential.net/embed/bd46cc82-4e3f-409b-a2a3-f29b28415385"
                target="_blank"
                aria-label="See the full bootcamp certificate in a new tab"
              >
                <Image
                  src={FastTrack}
                  alt="FastTrack Training Program Badge"
                  width={800}
                  height={800}
                  className="rounded-xl"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center">
            <div>
              <a
                href="https://www.credential.net/embed/bd46cc82-4e3f-409b-a2a3-f29b28415385"
                target="_blank"
                aria-label="See the full bootcamp certificate in a new tab"
              >
                <Image
                  src={DCO}
                  alt="Sarah with Drupal Career Online Certificate"
                  width={600}
                  height={800}
                  className="rounded-xl"
                />
              </a>
            </div>
            <div className="mx-3 text-center sm:text-left">
              <h3 className="text-2xl my-3">
                <strong>DrupalEasy</strong>
              </h3>
              <span>
                <p className="my-2">
                  When I was still struggling to find a job after six months of
                  being unemployed, I took a long shot on an internship. The
                  premise was that a company would pay for me to complete a
                  three-month online intensive learning Drupal, then I would
                  intern at that company for three months. I had never even
                  heard of Drupal, but{" "}
                  <a href="https://www.drupaleasy.com/users/ultimike">
                    Mike Anello&apos;s
                  </a>{" "}
                  class (along with the amazing mentorship of{" "}
                  <a href="https://www.drupal.org/u/iajon">Alex Jones</a>) got
                  me up to speed in time to start at{" "}
                  <a href="https://www.palantir.net/">Palantir.net</a>. By the
                  time I was hired at the end of my internship, I was already
                  using my JavaScript skills to help build a breakthrough
                  collaborative editing module.
                </p>
              </span>
            </div>
          </div>

          <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center">
            <Image
              src={Divider}
              alt="Horizontal divider"
              className="rounded-md text-center mb-6"
            />
          </div>
          {/* PROJECTS  */}
          <div
            className="flex flex-col items-left justify-items-start text-center sm:text-start"
            id="projects"
          >
            <h2 className="text-3xl sm:text-4xl font-bold italic tracking-wide">
              Some of my recent projects
            </h2>
            <br />
            <div>
              I always have several things happening at once, as I tend to
              thrive in chaos. Check out the sites, coding puzzles, and
              volunteer work I&apos;ve been doing lately.
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
              <h3 className="text-2xl my-3 dark:text-[#FFD43B]">
                <strong>Puppalooza</strong>
              </h3>
              <span>
                <p className="my-2">
                  What to do when your foster pup turns out to be pregnant? Make
                  a website to showcase the adoptable puppies of course!
                </p>
              </span>
              <span className="my-2 hover:text-[#C25C7E]">
                <strong>
                  <Link href="/Puppalooza">Learn More</Link>
                </strong>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap-reverse sm:flex-nowrap items-center justify-center">
            <div className="mx-3 text-center sm:text-right">
              <h3 className="text-2xl my-3 dark:text-[#FFD43B]">
                <strong>Wildflower</strong>
              </h3>
              <span>
                <p className="my-2">
                  I picked up WordPress while doing volunteer web maintenance
                  work. It was a natural evolution from my Drupal experience,
                  and after quickly learning the basics I committed to doing an
                  accessibility and design overhaul of the landing page.
                </p>
              </span>
              <span className="my-2 hover:text-[#FFD43B]">
                <strong>
                  <Link href="/Wildflower">Learn More</Link>
                </strong>
              </span>
            </div>

            <div className="xs:order-1">
              <Image
                src={Wildflower}
                alt="Wildflower website transition"
                className="rounded-xl"
              />
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex flex-wrap flex-col items-center justify-center">
          <div className="flex gap-4 flex-row w-fit sm:w-auto">
            <Image
              src={Divider}
              alt="Horizontal divider"
              className="rounded-md text-center mb-6"
            />
          </div>
          {/* CONTACT  */}
          <div className="flex flex-col mb-6" id="contact">
            <h2 className="text-3xl sm:text-4xl font-bold italic tracking-wide">
              Reach out to me
            </h2>
            <span className="m-4">
              I&apos;d love to hear from you! Whether you have a question about
              my work, want to collaborate on a project, or just want to say hi,
              feel free to reach out.
            </span>
            <div className="grid gap-4 grid-cols-4 w-fit sm:w-auto items-center justify-items-center">
              <Link href="mailto:SarahWylieWebDev@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#FFD43B" }}
                  aria-label="Email me"
                  size="6x"
                />
              </Link>
              <Link href="https://github.com/sarahwylie" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="dark:text-[#FFD43B]"
                  aria-label="GitHub"
                  size="6x"
                />
              </Link>
              <Link href="https://drupal.org/u/sarahwylie" target="_blank">
                <FontAwesomeIcon
                  icon={faDrupal}
                  style={{ color: "#FFD43B" }}
                  aria-label="Drupal"
                  size="6x"
                />
              </Link>
              <Link href="https://linkedin.com/in/sarahamwylie" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#FFD43B" }}
                  aria-label="LinkedIn"
                  size="6x"
                />
              </Link>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 py-2">
            © {new Date().getFullYear()} Sarah Wylie
          </div>
        </footer>
      </div>
    </div>
  );
}
