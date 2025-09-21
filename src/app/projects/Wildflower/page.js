import Image from "next/image";
import Divider from "../../divider.jpg";

export default function Wildflower() {
    return (
        <main className="flex flex-col gap-[32px] row-start-2 mb-10">
            <div className="items-center justify-center text-center">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-10 dark:text-[#FFD43B]">
                    Wildflower Unitarian Universalist 
                </h1>
                <span className="m-4 italic">
                    I am always seeking volunteer opportunities, but I often have to be picky because I have too many causes that are close to my heart. I was raised <a href="https://www.uua.org/" target="_blank"
            aria-label="Visit the UUA website in a new tab"></a>Unitarian Universalist in Wisconsin, and when all four of my children came into our lives, I sought all the community help I could find, including joining the local UU church. One of the membership requirements included volunteer hours, and after looking through my options, I decided maintaining the website would fulfill my drive to continuously learn new things.         
            </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mx-3 items-center justify-center text-center">
                <div>
                    <Image
                        src="https://lh3.googleusercontent.com/pw/AP1GczPvTMGoh2_lJuGmE1mBhuxuvF0-vgJK6yoM_q8GzncxOHSPnOv-7Yw5QOnbdYLT00kdPoUfPB6zUuB492Ksk3nelDf4jLN60PdlAn45pb7l6bik2A=w2400" 
                        alt="Overlapping menu items in non-responsive menu"
                        width={950}
                        height={600}
                        className="rounded-xl shadow-lg"
                    />
                    <span className="text-sm tracking-tight text-center italic">
                        Old homepage design with overlapping menu
                    </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <span className="gap-4">
                            <strong className="text-2xl my-3 dark:text-[#24e4e3]">Type</strong>
                            <p>Volunteer</p>
                        </span>
                        <br />
                        <span className="mb-10">
                            <strong className="text-2xl my-3 dark:text-[#24e4e3]">Visit</strong>
                            <p><a href="https://wildflowerchurch.org" target="_blank" rel="noopener noreferrer" aria-label="Open the Wildflower site in a new tab"><strong className="dark:text-[#FFD43B]">View the live site</strong></a></p>
                        </span>
                    </div>
                    <div>
                        <strong className="text-2xl my-3 dark:text-[#24e4e3]">Built with</strong>
                        <span>
                            <ul className="text-center list-none flex-col">
                            <li>WordPress</li> 
                            <li>PHP</li> 
                            <li>CSS</li> 
                            <li>WP Plugins</li>
                            <li>Figma</li>
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
                                As mentioned above, this site fulfilled my drive to learn while simultaneously allowing me to fulfill a volunteer requirement. The beauty of this site is that I had full control with bits of help as I got up to speed. I started with simple updates each week, then commited to overhauling some of the more major responsivity and accessibility faults on the homepage. 
                            </p>
                        </span>

                        <span className="mx-3">
                            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                                <strong>Web Stack and Explanation</strong>
                            </h3>
                            <p className="m-4 text-base">
                                The Wildflower site was already built in WordPress, so I inherited it from a series of people (some developers and some not) who had piecemealed new sections into the existing framework. I noticed immediately that the site was not responsive, not WCAG-compliant, and its SEO score was low, mostly due to excessive load times. I cleared out any unnecessary plugins, added in an SEO tool, overhauled the menu, and utilized cache clearing. I dug into the codebase and started updating color contrast values in locations that don't allow for a direct change. This is still a work in progress, but baby steps to success.
                            </p>
                        </span>

                        <span className="mx-3">
                            <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                                <strong>Struggles and Reflections</strong>
                            </h3>
                            <p className="m-4 text-base">
                                I am not a designer. Clearing my brain enough to place all the elements in the correct places in a wireframe was challenging, but figuring out color schemes was even harder. My Figma board was messy and cluttered, but once I had each of the existing elements cut out and moved to the board, the layout of the new homepage became a little easier. I hit some roadblocks working with the existing theme, but learned to work with it as often as possible (using the theme to override CSS), or work around it when necessary (adding a plugin to make the menu responsive).
                            </p>
                        </span>
                    </div>
                    <div className="grid grid-col md:grid-cols-2 gap-4 w-full place-items-center content-center">
                        <div>
                            <Image
                                src="https://lh3.googleusercontent.com/pw/AP1GczM3Y2WWdwxZRty6NAI6YOKRuFT4ZiaKBKo0yqon8c3iIPLlA-3bf45aIhIDGDQS_t42HlV-4FWGN6KptAAOK8Y5_AKrGyPUv529pAH_oMLiJgMLLg=w2400"
                                alt="Redesigned Wildflower homepage"
                                width={375}
                                height={1000}
                                className="rounded-xl shadow-lg"
                            />
                            <span className="text-sm tracking-tight text-center italic">
                                Redesigned homepage
                            </span>
                        </div>
                        <div>
                            <Image
                                src="https://lh3.googleusercontent.com/pw/AP1GczOWfnxGPqdakjq_RTixHvB8aKU5M1JJ-22LOaUW-TBBSrYY1ciML8HLov88M5t49JEo5qYwsI2pxoVlVtE6ljdMSde4Nc3oO3BPAFYGd0LUx-aWjA=w2400"
                                alt="Figma wireframe"
                                width={400}
                                height={650}
                                className="rounded-xl shadow-lg"
                            />
                            <span className="text-sm tracking-tight text-center italic">
                                Rough wireframe in Figma
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};