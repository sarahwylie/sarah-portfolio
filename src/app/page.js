import Image from "next/image";
import CoderGirl from "./codergirl.jpg";
import Divider from "./divider.jpg";
import Puppalooza from "./puppalooza.png";
import Wildflower from "./wildflower.png";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2">
        <div className="items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
            Hi! I'm Sarah.
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold italic">
            I am a Web Developer, Nature Enthusiast, and Animal Lover.
          </h2>
          <br />
          <div className="flex gap-4 flex-row w-fit sm:w-auto">
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
              I believe in the power of technology to make a positive impact on
              the world.
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
        <div className="text-base sm:text-lg justify-items-start text-start">
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
            Chicago to play roller derby at the highest level. Out of necessity,
            I obtained a role in the financial industry, and that supported me
            enough to travel the world playing roller derby.
          </p>
          <br />
          <p className="md:indent-12">
            After I hung up my skates and moved across the country to Austin,
            TX, I knew I wanted to find something that would fulfill my drive to
            help others. I found a coding bootcamp and fell in love with the
            process of building things.
          </p>
          <br />
          <p className="md:indent-16">
            I took the plunge and left the financial industry to pursue web
            development full-time.
          </p>
        </div>
        <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center">
          <Image
            src={Divider}
            alt="Horizontal divider"
            className="rounded-md text-center mb-6"
          />
        </div>
        <div className="flex flex-wrap items-left justify-items-start text-center sm:text-start">
          <h2 className="text-3xl sm:text-4xl font-bold italic tracking-wide mb-6">
            Some of my recent projects
          </h2>
          <span>
            I always have several things happening at once, as I tend to thrive in chaos. 
            Check out the sites, coding puzzles, and volunteer work I've been doing lately.
          </span>
        </div>
        
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center">
          <div>
            <Image
              src={Puppalooza}
              alt="Puppalooza Screenshot"
              className="rounded-xl"
            />
          </div>
          <div className="mx-3 text-center sm:text-left">
            <h3 className="text-2xl my-3">
              <strong>Puppalooza</strong>
            </h3>
            <span>
              <p className="my-2">
                What to do when your foster pup turns out to be pregnant? Make a
                website to showcase the adoptable puppies of course!
              </p>
            </span>
            <span className="my-2">
              <strong>
                <Link href="/Puppalooza">Learn More</Link>
              </strong>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap-reverse sm:flex-nowrap items-center justify-center">

          <div className="mx-3 text-center sm:text-right">
            <h3 className="text-2xl my-3">
              <strong>Wildflower</strong>
            </h3>
            <span>
              <p className="my-2">
                I picked up WordPress while doing volunteer web maintenance work. It was a natural evolution from my Drupal experience, and after quickly learning the basics I committed to doing an accessibility and design overhaul of the landing page.
              </p>
            </span>
            <span className="my-2">
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
        </a> */}
      </footer>
    </div>
  );
}
