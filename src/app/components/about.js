import Image from "next/image";

export default function About() {
  return (
    <div className="text-base text-start" id="about">
      <h2 className="text-3xl sm:text-4xl font-medium italic tracking-wide dark:text-[#FFD43B]">
        A bit about me
      </h2>
      <p className="italic mt-3">
        Although I have always loved puzzles, I had a circuitous route to web
        development.
      </p>
      <br />
      <div className="md:columns-2 mb-5 w-full text-justify gap-10">
        <p>
          Shortly out of college, I scored a job I loved running youth
          programming at a major public library. Unfortunately, the role was
          only part-time and contingent on grant funding.
        </p>
        <br />
        <p>
          I opted to follow a different passion, quit the job, and moved to
          Chicago to play roller derby at the highest level. Out of necessity, I
          obtained a role in the financial industry, and that supported me
          enough to travel the world playing roller derby.
        </p>
        <br />
        <p>
          After I hung up my skates and moved across the country to Austin, TX,
          I knew I wanted to find something that would fulfill my drive to help
          others. I also knew I wanted to pursue my drive for continuous
          learning, so I found a coding bootcamp and fell in love with the
          process of building things.
        </p>
        <br />
        <p>
          I took the plunge and left the financial industry to pursue web
          development full-time, which started my journey with some of the most
          incredible mentors. My learning journey is still ongoing, and I am
          astounded by all the (sometimes unlikely) mentors I encounter along
          the way.
        </p>
      </div>
      <div className="place-items-center">
        <div className="flex gap-4 flex-row w-full">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczN3uek2CzxKMmzXeSzMerC15i6xGEwAcrc-soCxFC4t5GsWw3HrzGJXBInkUVqwBhxXwzndcMWNlt1tqIIQmdoajHNkho7NKdCj969f-SfEwUtV2A=w2400"
            alt="Roller derby skater surrounded by code"
            width={3250}
            height={800}
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="text-sm tracking-tight text-center italic">
          <a
            href="https://www.jackgraham.net/"
            title="World's finest UX-er"
            target="_blank"
          >
            Image courtesy of Jack Graham - view his work
          </a>
        </div>
      </div>
    </div>
  );
}
