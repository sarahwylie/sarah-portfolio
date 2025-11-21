import Image from "next/image";

export default function CSSvSASS() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 mb-10">
      <div className="items-center justify-start text-justify">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-10 dark:text-[#FFD43B]">
          CSS vs SASS
        </h1>
        <span className="my-4 italic w-full text-justify">
          When I joined the Drupal.org site modernization project, I was the
          only full-time contributor from my company during its initial phase. I
          was tasked with auditing the existing theme and developing a
          recommendation for migrating away from SASS. To support
          decision-making, I created a series of discovery documents outlining
          the current architecture, upgrade feasibility, and implementation
          strategy. What began as a technical inquiry quickly evolved into a
          full-scale transition proposal for the Drupal.org theme.
        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
        <div className="items-center justify-center text-center">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczPQ73D2bP8Zm7uhFr9P_F23eqKXdOAqGpI3iBuVCKF0l3io8LqBrEo-9ls_ouBA3JmaymK-SZgBGuv5C2Zn9TbrUQAGoCYPC19DhoF4k3OXrG-94w=w2400"
            alt="Issue filed on Drupal.org"
            width={950}
            height={600}
            className="rounded-xl shadow-lg"
          />
          <span className="text-sm tracking-tight italic">
            One of the issues filed on Drupal.org during the redesign
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">Type</span>
            <p className="mx-2">Documentation</p>
            <br />
            <span className="mb-10">
              <span className="text-2xl my-3 dark:text-[#24e4e3]">Visit</span>
              <a
                href="https://docs.google.com/document/d/1nf-D3DGHVT0S-ol4JhOII9klHSeWcPQn/edit?usp=sharing&ouid=107479961347007881341&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the documentation"
              >
                <p className="hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E] mx-2">
                  View the full documentation
                </p>
              </a>
            </span>
          </div>
          <div>
            <span className="text-2xl my-3 dark:text-[#24e4e3]">
              Built with
            </span>
            <ul className="mx-2 list-none flex-col">
              <li>Google Docs</li>
              <li>Research</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
        <hr className="h-1 opacity-100 w-full" />
      </div>

      <div className="w-full space-y-6 items-center content-center">
        <div className="grid sm:grid-cols-2 gap-2">
          <div className="text-left place-items-center content-center">
            <span>
              <h2 className="text-2xl my-3 dark:text-[#24e4e3] font-semibold">
                Project Purpose
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                When asked if phasing out SASS and moving the theme to Vanilla
                CSS would be feasible, a simple yes-or-no answer wouldn&apos;t
                do. To determine whether replacing SASS with CSS was viable, I
                developed four in-depth analyses:
              </p>
              <ol>
                <li className="ml-6 my-1 text-base hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E]">
                  <a
                    href="https://docs.google.com/document/d/1D-a0rnpYLyk9stwbxL6lKvPXk-3ByJsi/edit?usp=sharing&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the Theme Audit documentation"
                  >
                    1. Theme Audit
                  </a>
                </li>
                <li className="ml-6 my-1 text-base hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E]">
                  <a
                    href="https://docs.google.com/document/d/1nf-D3DGHVT0S-ol4JhOII9klHSeWcPQn/edit?usp=sharing&ouid=107479961347007881341&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the CSS vs SASS Analysis documentation"
                  >
                    2. SASS vs CSS Analysis
                  </a>
                </li>
                <li className="ml-6 my-1 text-base hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E]">
                  <a
                    href="https://docs.google.com/document/d/1MYRWpTiM_fYWL6jspjgEQQxbKB1ndVow/edit?usp=sharing&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the Scrubbing Out SASS documentation"
                  >
                    3. How to Scrub out SASS
                  </a>
                </li>
                <li className="ml-6 my-1 text-base hover:text-[#B84D00] dark:text-[#FFD43B] dark:hover:text-[#FF862E]">
                  <a
                    href="https://docs.google.com/document/d/1umOM4Fxd0hnjabvSfhFlh7qqGRfRDm3t/edit?usp=sharing&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the CSS Implementation documentation"
                  >
                    4. How to Implement CSS
                  </a>
                </li>
              </ol>
              <p className="mt-4 text-base w-full text-justify">
                Each deliverable accounted not only for technical and
                performance impacts, but also for the collaborative and
                open-source nature of Drupal development. The proposed theme
                architecture balanced modernization with accessibility,
                maintainability, and ease of contribution for the wider
                community.
              </p>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Tech Stack & Approach
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                The project centered around Drupal, with the early phase focused
                heavily on technical research, design system planning, and
                preparation for development handoff. Once the direction was
                approved, I remained involved in the initial implementation
                phase—helping establish scalable standards for future
                contributions and theme expansion.
              </p>
            </span>

            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Challenges & Lessons Learned
              </h2>
              <p className="mt-4 text-base w-full text-justify">
                At the project&apos;s outset, I was the sole full-time resource
                on the theme overhaul and had limited time before the redesign
                would be showcased at DrupalCon Barcelona. Nearly a third of the
                timeline was dedicated to research and strategic planning,
                leaving very little room for implementation. Fortunately,
                additional developers joined shortly after the foundation was
                set, and we quickly transitioned into component development and
                feedback cycles. This experience pushed me to operate with
                clarity under pressure—balancing innovation with
                community-focused responsibility. It was a rare opportunity to
                contribute to the future of Drupal.org, and I&apos;m proud of
                what we achieved in such a condensed timeline.
              </p>
            </span>
            <span>
              <h2 className="text-2xl mb-2 mt-6 dark:text-[#24e4e3] font-semibold">
                Impact
              </h2>
              <span className="mt-4 text-base w-full text-justify">
                <ul className="list-none">
                  <li className="my-1">
                    ✔ Delivered a comprehensive migration strategy that
                    influenced Drupal.org&apos;s front-end modernization
                  </li>
                  <li className="my-1">
                    ✔ Established early standards for theme development and
                    community contribution
                  </li>
                  <li className="my-1">
                    ✔ Demonstrated leadership through documentation, planning,
                    and early implementation
                  </li>
                  <li className="my-1">
                    ✔ Enabled faster onboarding for additional developers
                    joining mid-project
                  </li>
                </ul>
              </span>
            </span>
          </div>
          <div className="grid grid-col xl:grid-cols-2 gap-4 w-full place-items-center content-center">
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczPFNLWdkWS3zwpkDQBcFZCq0jp9dkZSj2nRSP3j16cYzIDaYOJ1ClK0nTf7RI56KVhoFuTXwdCagr7WEvYsg_mbEsOrk4AFTy_JSdd1syZZZq83Lw=w2400"
                alt="Folder structure of the old bluecheese theme"
                width={375}
                height={1000}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                Full layout of the folder and file structure in the old theme
              </span>
            </div>
            <div>
              <Image
                src="https://lh3.googleusercontent.com/pw/AP1GczMPr1Xy8wUnm2pjJFbad1NnBzKLuF2F1C2xua8zbn2SGZ6uDuFvQaXEkXY6YpALiDpnGNnPg70KILlHvzYz2WZI6W8Jbtij_YyFDGDVpUiyGlAi0w=w2400"
                alt="Documentation Table of Contents"
                width={400}
                height={650}
                className="rounded-xl shadow-lg"
              />
              <span className="text-sm tracking-tight text-center italic">
                The final listing of contents in the initial document
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-row w-full sm:w-auto items-center justify-center">
        <hr className="h-1 opacity-100 w-full" />
      </div>
    </main>
  );
}
