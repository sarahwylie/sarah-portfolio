// import Image from "next/image";

export default function Wildflower() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-12 min-h-0">
                <header className="flex flex-col items-center text-center gap-9">
                    <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
                        Wildflower Unitarian Universalist Church 
                    </h1>
                    <span>
                        <strong>Built with</strong>
                        <p>WordPress, PHP</p>
                    </span>
                    <span>
                        <strong>Type</strong>
                        <p>Volunteer</p>
                    </span>
                    <span className="mt-12">
                        <a href="https://wildflowerchurch.org" target="_blank" rel="noopener noreferrer" aria-label="Open the Wildflower site in a new tab"><strong>Visit the site</strong></a>
                    </span>
                </header>
                <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
                    <div className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        {/* <Image
                            src={PuppyPics}
                            alt="Cute puppy pictures"
                            className="rounded-xl mb-10"
                        /> */}
                    <span>
                        <strong>The Purpose</strong>
                    </span>
                    <p className="mb-5">
                        {/* This website did not start with design ideas, color palettes, or wireframes, rather it was an effort to build something quickly to showcase the puppies that had unexpectedly come into our lives. */}
                    </p>
                    <p className="mb-8">
                        {/* I had grown tired of trying to remember all the people that wanted pictures of the puppies, and sending new pictures to each person became exhausting.  */}
                        
                        {/* I built up the frame quickly, added the individual profiles, and realized the site was not only a great means of finding new homes for the puppies, but also a great way to request donations! */}
                    </p>
                    {/* <span>
                        <Image
                            src={Pinky}
                            alt="Pinky's page"
                            className="rounded-xl mb-10"
                        />
                    </span> */}
                    <span className="mb-12">
                        <strong>Reflections</strong>
                        <p></p>
                    </span>

                    {/* <span className="mt-12">
                        <a href="https://wildflowerchurch.org" target="_blank" rel="noopener noreferrer" aria-label="Open the Wildflower site in a new tab"><strong>Visit the site</strong></a>
                    </span> */}
                    </div>
                </div>
            </div>
        </main>
    )
};