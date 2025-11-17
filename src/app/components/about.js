import Image from "next/image";

export default function About() {
  return (
    <div className="text-base text-start" id="about">
      <h2 className="text-3xl sm:text-4xl font-medium italic tracking-wide dark:text-[#FFD43B]">
        A bit about me
      </h2>
      <p className="italic mt-3">
        I have always loved puzzles, but my route to web
        development was circuitous.
      </p>
      <br />
      <div className="md:columns-2 mb-5 w-full text-justify gap-10">
        <p>
          Shortly after college, I landed a job I adored running youth programs at a major public library. The work was meaningful and energizing, but the part-time, grant-funded nature of the role pushed me to consider a more sustainable path.
        </p>
        <br />
        <p>
          I opted to follow a different passion, quit the job, and moved to
          Chicago to play roller derby at the highest competitive level. To support that dream, I stepped into a role in the financial industry—one that gave me the flexibility and stability to travel the world competing.
        </p>
        <br />
        <p>
          After I hung up my skates and moved across the country to Austin, TX,
          I realized I wanted a career that combined my love of helping others with my drive for continuous learning. That search led me to a coding bootcamp, where I immediately fell in love with the process of building things and solving problems in creative, logical ways.
        </p>
        <br />
        <p>
          I took the leap, left finance behind, and committed to web development full-time. Since then, I&apos;ve had the privilege of learning from incredible mentors — some expected, some delightfully unexpected. My learning journey is still unfolding, and I&apos;m consistently inspired by the people and challenges I encounter along the way.
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
