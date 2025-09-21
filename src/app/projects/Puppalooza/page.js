import Image from "next/image";
import PuppyPics from "./puppyPics.png";
import puppa from "./puppa.png";
import Divider from "../../divider.jpg"

export default function Puppalooza() {
    return (
        <main className="flex flex-col gap-[32px] row-start-2 mb-10">
            <div className="items-center justify-center text-center">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-10 dark:text-[#FFD43B]">
                    Puppalooza 
                </h1>
                <span className="m-4 italic">
                    A cute pup was running around the neighborhood, and a rescue offered to catch her on the condition that someone offer to foster. One hour later we welcomed Willa into our home. As we settled into a new normal over the following weeks, we started to fall in love with this sweet baby. We also started to notice something was... off. We braced ourselves and prepped our lives, then rolled up our sleeves and helped Willa birth ten puppies! They grew quickly, and as they got older, I quickly threw together a website in hopes of finding them all great adoptive homes.
                </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mx-3 items-center justify-center text-center">
                <div>
                    <Image
                        src={PuppyPics}
                        alt="Cute puppy pictures"
                        className="rounded-xl shadow-lg"
                    />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <span className="gap-4">
                            <strong className="text-2xl my-3 dark:text-[#24e4e3]">Type</strong>
                            <p>Personal</p>
                        </span>
                        <br />
                        <span className="mb-10">
                            <strong className="text-2xl my-3 dark:text-[#24e4e3]">Visit</strong>
                            <p><a href="https://sarahwylie.github.io/puppalooza/" target="_blank" rel="noopener noreferrer" aria-label="Open the Puppalooza site in a new tab"><strong className="dark:text-[#FFD43B]">View the live site</strong></a></p>
                        </span>
                    </div>
                    <div>
                        <strong className="text-2xl my-3 dark:text-[#24e4e3]">Built with</strong>
                            <span>
                                <ul className="text-center list-none flex-col">
                                <li>React</li> 
                                <li>Next.js</li> 
                                <li>Tailwind CSS</li> 
                                <li>TypeScript</li> 
                                <li>GitHub Pages</li>
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

            <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                <div className="grid sm:grid-cols-2 gap-2">
<div>
                <span className="mx-3 text-center sm:text-left">
                    <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                        <strong>Project Purpose</strong>
                    </h3>
                    <p className="m-4 text-base">
                        This website did not start with design ideas, color palettes, or wireframes, rather it was an effort to build something quickly to showcase the puppies that had unexpectedly come into our lives. I knew I could go back and add some flare to the site later, but who has time with so many puppies running around?!
                    </p>
                </span>

                <div className="mx-3 text-center sm:text-left">
                    <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                        <strong>Web Stack and Explanation</strong>
                    </h3>
                    <p className="m-4 text-base">
                        I needed to build this site quickly, and I wouldn&apos;t need to scale up or store anything on the backend, so React felt like the logical choice. I already had experience with React, Tailwind made styling faster, and I was able to initiate the codebase, gather all the data, and publish within a couple days.
                        <br/>
                        After I got the basic information posted, I needed to come up with a photo storage solution. With a massive focus on displaying photos for so many puppies (plus adding videos), this site wouldn&apos;t be able to host all that data on GitHub. After searching for a Content Delivery Network where I could store, host, deliver, and optimize the images, I ended up lowering my expectations considerably. CDNs can be pricey, and ultimately I needed a cheap option with minimal fuss. I decided on Google for its unbeatable price tag (free).
                    </p>
                </div>

                <div className="mx-3 text-center sm:text-left">
                    <h3 className="text-2xl my-3 dark:text-[#24e4e3]">
                        <strong>Struggles and Reflections</strong>
                    </h3>
                    <p className="m-4 text-base">
                        I took a big leap of faith in my ability to get a React project running quickly. Although I learned to code with React and JavaScript, I had never used Next.js, and my TypeScript was a bit rusty. Just like riding a bike, I wobbled a bit, but found myself moving quickly through each step. If I had to do it all over again, I might pay for a CDN to optimize the images. I am grateful that I used object arrays to map through the photos, though, as that made adding in new photos quick and easy. 
                    </p>
                </div>
                </div>
<div>
    <Image
        src={puppa}
        alt="Puppalooza homepage"
        width={300}
        height={850}
        className="rounded-xl shadow-lg"
    />
</div>

</div>
            </div>
        </main>
    )
};