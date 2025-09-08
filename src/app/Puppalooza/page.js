import Image from "next/image";
import PuppyPics from "./puppyPics.png";
import Pinky from "./pinky.png";

export default function Puppalooza() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Puppalooza 
                    </h1>
                    <span>
                        <strong>Built with</strong>
                        <p>React, Next.js, Tailwind CSS, TypeScript, GitHub Pages</p>
                    </span>
                    
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <div className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        <Image
                            src={PuppyPics}
                            alt="Cute puppy pictures"
                            className="rounded-xl mb-10"
                        />
                    <p className="mb-5">
                        This website did not start with design ideas, color palettes, or wireframes, rather it was an effort to build something quickly to showcase the puppies that had unexpectedly come into our lives.
                    </p>
                    <p className="mb-8">
                        I had grown tired of trying to remember all the people that wanted pictures of the puppies, and sending new pictures out quickly became exhausting. I built up the frame quickly, added the individual profiles, and realized the site was not only a great means of finding new homes for the puppies, but also a great way to request donations!
                    </p>
                    <span>
                        <Image
                            src={Pinky}
                            alt="Pinky's page"
                            className="rounded-xl mb-10"
                        />
                    </span>
                    <span className="mb-12">
                        <strong>Reflections</strong>
                        <p>I should have built one layout to cover the individual pages. I knew this even as I was building, but I just kept copy/pasting the bones. Sometimes the easier route is hard, even when you know better. Luckily I learned my lesson for this site!</p>
                    </span>

                    <span className="mt-12">
                        <a href="https://sarahwylie.github.io/puppalooza/" target="_blank" rel="noopener noreferrer" aria-label="Open the Puppalooza site in a new tab"><strong>Visit the site</strong></a>
                    </span>
                    </div>
                </div>
            </div>
        </main>
    )
};