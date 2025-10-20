import Image from "next/image";
import Divider from "../../divider.jpg";

export default function CSSvSASS() {
    return (
        <main className="flex flex-col gap-[32px] row-start-2 mb-10">
            <div className="items-center justify-center text-center">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-10 dark:text-[#FFD43B]">
                    CSS vs SASS 
                </h1>
                <span className="m-4 italic">
                When I received the assignment to work with the Drupal Organization to help accelerate the upgrade of the Drupal.org website, I also learned that I would be the only person from my company assigned to the project full-time in the beginning. The team at Drupal asked me to focus on overhauling the theme, so I started a series of documents outlining the current state of the theme, what it would take to upgrade each part, and recommendations for moving forward. Then they asked about the feasibility of removing SASS from the theme entirely and doing a CSS-only structure, so I started in on the research.
            </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mx-3 items-center justify-center text-center">
                <div>
                    <Image
                        src="https://lh3.googleusercontent.com/pw/AP1GczPQ73D2bP8Zm7uhFr9P_F23eqKXdOAqGpI3iBuVCKF0l3io8LqBrEo-9ls_ouBA3JmaymK-SZgBGuv5C2Zn9TbrUQAGoCYPC19DhoF4k3OXrG-94w=w2400" 
                        alt="Issue filed on Drupal.org"
                        width={950}
                        height={600}
                        className="rounded-xl shadow-lg"
                    />
                    <span className="text-sm tracking-tight text-center italic">
                        One of the issues filed on Drupal.org during the redesign
                    </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <span className="gap-4">
                            <strong className="text-2xl my-3 dark:text-[#24e4e3]">Type</strong>
                            <p>Documentation</p>
                        </span>
                        <br />
                        <span className="mb-10">
                            <strong className="text-2xl my-3 dark:text-[#24e4e3]">Visit</strong>
                            <p><a href="https://docs.google.com/document/d/1nf-D3DGHVT0S-ol4JhOII9klHSeWcPQn/edit?usp=sharing&ouid=107479961347007881341&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" aria-label="Open the documentation"><strong className="dark:text-[#FFD43B]">View the full documentation</strong></a></p>
                        </span>
                    </div>
                    <div>
                        <strong className="text-2xl my-3 dark:text-[#24e4e3]">Built with</strong>
                        <span>
                            <ul className="text-center list-none flex-col">
                            <li>Google Docs</li> 
                            <li>Research</li> 
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center my-6">
                <Image
                    src={Divider}
                    alt="Horizontal divider"
                    className="rounded-md text-center"
                />
            </div>

            <div className="w-full space-y-6 px-4 items-center content-center">
                <div className="grid sm:grid-cols-2 gap-2">
                    <div className="text-center sm:text-left place-items-center content-center">
                        <span className="mx-3">
                            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                                <strong>Project Purpose</strong>
                            </h3>
                            <p className="m-4 text-base">
                                When asked if phasing out SASS and moving the theme to Vanilla CSS would be feasible, I couldn't give a simple yes or no. I needed a fully researched, step-by-step plan of whether we could make it happen. I ended up writing four different in-depth analyses with recommendations to allow us a fully developed plan with accountability to the Drupal community:</p>
                                    <p className="m-6 text-base"><a href="https://docs.google.com/document/d/1D-a0rnpYLyk9stwbxL6lKvPXk-3ByJsi/edit?usp=sharing&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" aria-label="Open the Theme Audit documentation">1. Theme Audit</a></p>
                                    <p className="m-6 text-base"><a href="https://docs.google.com/document/d/1nf-D3DGHVT0S-ol4JhOII9klHSeWcPQn/edit?usp=sharing&ouid=107479961347007881341&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" aria-label="Open the CSS vs SASS Analysis documentation">2. SASS vs CSS Analysis</a></p>
                                    <p className="m-6 text-base"><a href="https://docs.google.com/document/d/1MYRWpTiM_fYWL6jspjgEQQxbKB1ndVow/edit?usp=sharing&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" aria-label="Open the Scrubbing Out SASS documentation">3. How to Scrub out SASS</a></p>
                                    <p className="m-6 text-base"><a href="https://docs.google.com/document/d/1umOM4Fxd0hnjabvSfhFlh7qqGRfRDm3t/edit?usp=sharing&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" aria-label="Open the CSS Implementation documentation">4. How to Implement CSS</a></p>
                                <p className="m-4 text-base">Each of these documents attempted to cover all aspects of the project, keeping in mind not not only the functional and technical aspects, but also the community and collaborative nature of Drupal as an open-source project. The theme would need to be written with future development in mind, ensuring anyone in the community could reasonably write and contribute code that followed the same standards we would put in place.
                            </p>
                        </span>

                        <span className="mx-3">
                            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                                <strong>Web Stack and Explanation</strong>
                            </h3>
                            <p className="m-4 text-base">
                                Since this was a redesign and modernization of the Drupal.org site, building it anywhere besides Drupal would have been pretty silly. Being able to deliver and present solutions directly to some of the biggest leaders in the Drupalverse was an incredible opportunity, and I did my best not to squander even one minute of it. Since we needed a plan before we could move forward, this portion of the project focused mainly on research and planning, but I stayed on for the early stages of theme building, doing my best to stay involved even as I transitioned off the project.
                            </p>
                        </span>

                        <span className="mx-3">
                            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                                <strong>Struggles and Reflections</strong>
                            </h3>
                            <p className="m-4 text-base">
                                Getting this project off the ground was challenging, as I had time and resources stacked against me. I was the only full-time person from my company on this project at the start, which is why I handled so much of the initial documentation and auditing. We had only three months from learning about the project before the new website would be unveiled to the world at DrupalCon Barcelona, and at least one month of this time was spent analyzing the existing theme and strategizing how to move forward. Luckily some talented developers joined after a few weeks, and we quickly started adding components to the theme so the Drupal.org team could start testing and providing feedback. Overall, this was an incredible learning experience for me, and I am proud of the work we accomplished in such a short time.
                            </p>
                        </span>
                    </div>
                    <div className="grid grid-col md:grid-cols-2 gap-4 w-full place-items-center content-center">
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
        </main>
    )
};