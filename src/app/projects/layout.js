import Image from "next/image";
import Link from "next/link";
import SWLogo from "../components/SWlogo.png";
import Divider from "../divider.jpg";
import Footer from "../components/footer";

const headerLinks = [
    {
        href: "/",
        section: "Home",
    },
    {
        href: "/projects",
        section: "Projects",
    },
    {
        href: "#contact",
        section: "Contact",
    },
];

export default function ProjectLayout({ children }) {
    return (
        <section>
            <div className="grid items-center justify-items-center p-8 pb-10 gap-16 font-[family-name:var(--font-geist-sans)] w-full">
                <div className="flex flex-wrap-reverse sm:flex-nowrap items-center w-full justify-center sm:justify-between">
                    <div className="hidden md:flex justify-start">
                        <Link href="/">
                            <Image
                                src={SWLogo}
                                alt="Sarah Wylie Logo"
                                width="auto"
                                height="auto"
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center md:justify-end dark:text-[#24e4e3] w-full md:w-auto">
                        <nav>
                            <ul className="text-center list-none flex-col sm:flex-row">
                                {headerLinks.map((link) => (
                                    <li
                                        key={link.section}
                                        className="p-2 md:p-4 sm:inline hover:rounded-full hover:bg-[#545454] hover:text-[#F7F7F7] hover:dark:text-[#545454] hover:dark:bg-[#24e4e3] pt-5"
                                    >
                                        <a href={link.href} className="sm:text-3xl text-2xl font-bold tracking-widest sm:tracking-normal">
                                        {link.section}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                {children}

                <div className="flex gap-4 flex-row w-fit sm:w-auto items-center justify-center">
                    <Image
                        src={Divider}
                        alt="Horizontal divider"
                        className="rounded-md text-center"
                    />
                </div>

                <div className="flex flex-col mb-6 text-center sm:text-start w-fit sm:w-auto italic" id="contact">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-wide dark:text-[#FFD43B]">
                        Let's work together!
                    </h2>
                    <span className="m-4">
                        Need a developer? Have a question? Want a new friend?
                        <p className="mt-4 ml-8">
                            Let's connect!
                        </p>
                    </span>
                </div>
                <Footer />
            </div>
        </section>
    );
}
