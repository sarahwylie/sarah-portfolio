import Image from "next/image";
import Divider from "./divider.jpg";
import Header from "./components/header";
import About from "./components/about";
import Education from "./components/education";
import Footer from "./components/footer";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-8 pb-10 gap-16 font-[family-name:var(--font-geist-sans)] w-full">
      <Header />
      <div>
        <main className="flex flex-col gap-[32px] row-start-2 mb-10">
          <div className="items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-10 dark:text-[#FFD43B]">
              Hi! I&apos;m Sarah.
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold italic">
              I am a Web Developer, Nature Enthusiast, Animal Lover, and
              Lifelong Learner.
            </h2>
            <br />
            <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center">
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczPaSJpGLRfIGX3QN_DvAP5VQyJxMXcOHCzlyxVq0ZA-Bm4auzk5R7pKRqfAVF9Dh0PLeuJpZuVhQQN1zTtjVX-rEguMjJM3f6uuClcoUZDIWLT3vQ=w2400"
                alt="Woman emitting code from her hand"
                width={2000}
                height={400}
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

          <About />

          <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center">
            <Image
              src={Divider}
              alt="Horizontal divider"
              className="rounded-md text-center mb-6"
            />
          </div>

          <Education />

          <div className="flex w-fit sm:w-auto items-center justify-center">
            <Image
              src={Divider}
              alt="Horizontal divider"
              className="rounded-md text-center mb-6"
            />
          </div>

          <Projects />

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
          <div className="flex flex-col mb-6 text-center sm:text-start w-fit sm:w-auto italic" id="contact">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide dark:text-[#FFD43B]">
              Reach out to me
            </h2>
            <span className="m-4">
              I&apos;d love to hear from you! Whether you have a question about
              my work, want to collaborate on a project, or just want to say hi,
              feel free to reach out.
            </span>
          </div>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
