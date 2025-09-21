import Image from "next/image";
import Sk8rGirl from "./linkedin.webp";

export default function About() {
  return (
    <div
      className="text-base justify-items-start text-start"
      id="about"
    >
        <h2 className="text-3xl sm:text-4xl font-bold italic tracking-wide dark:text-[#FFD43B]">
            A bit about me
        </h2>

      <p className="italic m-4">
        Although I have always loved puzzles, I had a circuitous route to web
        development.
      </p>
      <br />
      <p className="md:indent-6">
        Shortly out of college, I scored a job I loved running youth programming
        at a major public library. Unfortunately, the role was only part-time
        and contingent on grant funding.
      </p>
      <br />
      <p className="md:indent-10">
        I opted to follow a different passion, quit the job, and moved to
        Chicago to play roller derby at the highest level. Out of necessity, I
        obtained a role in the financial industry, and that supported me enough
        to travel the world playing roller derby.
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
      <p className="md:indent-14">
        After I hung up my skates and moved across the country to Austin, TX, I
        knew I wanted to find something that would fulfill my drive to help
        others. I also knew I wanted to pursue my drive for continuous learning,
        so I found a coding bootcamp and fell in love with the process of
        building things.
      </p>
      <br />
      <p className="md:indent-18">
        I took the plunge and left the financial industry to pursue web
        development full-time, which started my journey with some of the most
        incredible mentors. My learning journey is still ongoing, and I am
        astounded by all the (sometimes unlikely) mentors I encounter along the
        way.
      </p>
    </div>
  );
}
