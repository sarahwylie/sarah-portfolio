import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import About from "./components/about";
import Education from "./components/education";
import Footer from "./components/footer";
import Projects from "./components/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-8 px-15 pb-10 gap-12 font-[family-name:var(--font-noto-sans)] w-full">
      <Header />
      <div>
        <main className="flex flex-col gap-[32px] row-start-2 mb-10">
          <div className="items-center justify-center text-center">
            <div className="flex flex-row items-center justify-center -mx-20 -px-10">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczPaSJpGLRfIGX3QN_DvAP5VQyJxMXcOHCzlyxVq0ZA-Bm4auzk5R7pKRqfAVF9Dh0PLeuJpZuVhQQN1zTtjVX-rEguMjJM3f6uuClcoUZDIWLT3vQ=w2400"
                alt="Woman emitting code from her hand"
                width={3000}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="text-xs sm:text-sm tracking-tight text-center italic mb-10">
              <a
                href="https://www.jackgraham.net/"
                title="World's finest UX-er"
                target="_blank"
              >
                Image courtesy of Jack Graham - view his work
              </a>
            </div>
            <br />
            <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
              Hi! I&apos;m Sarah.
            </h1>
            {/* <h2 className="text-2xl sm:text-3xl font-semibold italic">
              I am a Web Developer, Nature Enthusiast, Animal Lover, and
              Lifelong Learner.
            </h2> */}
            <div className="whitespace-pre-line text-lg/8 sm:text-xl/9 text-center font-medium">
              <p>
                I am a passionate web developer with a love for creating
                beautiful, functional, and accessible web applications.
              </p>
              <p>
                I believe in the power of technology to make a positive impact
                on the world.
              </p>
              <br />
              <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
                <hr className="my-12 h-1 opacity-100 w-full" />
              </div>
            </div>
          </div>

          <About />

          <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
            <hr className="my-12 h-1 opacity-100 w-full" />
          </div>

          <Projects />
          <div
            className="flex flex-col justify-center w-fit sm:w-auto italic mt-10"
            id="projects"
          >
            <Link href="/projects">
              <span className="text-3xl sm:text-4xl font-medium tracking-wide hover:font-bold hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E]">
                See more projects here{" "}
                <FontAwesomeIcon icon={faArrowRight} aria-label="Link to more projects" />
              </span>
            </Link>
          </div>

          <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
            <hr className="my-12 h-1 opacity-100 w-full" />
          </div>

          <Education />

          <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
            <hr className="my-12 h-1 opacity-100 w-full" />
          </div>

        </main>
        <footer className="flex flex-wrap flex-col">
          {/* CONTACT  */}
          <div
            className="flex flex-col mb-10 text-start w-full sm:w-auto italic"
            id="contact"
          >
            <h2 className="text-3xl sm:text-4xl font-medium tracking-wide dark:text-[#FFD43B]">
              Reach out to me
            </h2>
            <p className="mt-4">I&apos;d love to hear from you!</p>
            <p>
              Whether you have a question about my work, want to collaborate on
              a project,
            </p>
            <p>or just want to say hi, feel free to reach out.</p>
          </div>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
