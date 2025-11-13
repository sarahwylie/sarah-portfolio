import Link from "next/link";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS } from "@fortawesome/free-solid-svg-icons/faS";
import { faW } from "@fortawesome/free-solid-svg-icons/faW";

const headerLinks = [
  {
    href: "/sarah-portfolio",
    section: "Home",
  },
  {
    href: "/sarah-portfolio/projects",
    section: "Projects",
  },
  {
    href: "#contact",
    section: "Contact",
  },
];

export default function ProjectLayout({ children }) {
  return (
    <>
      <div className="grid items-center justify-items-center p-8 gap-16 font-[family-name:var(--font-noto-sans)] w-full">
        <header className="flex flex-wrap-reverse sm:flex-nowrap items-center w-full justify-start sm:justify-between">
          <div className="hidden md:flex justify-start">
            <Link href="/">
              <div className="hidden md:flex justify-start items-center pt-5">
                <span className="sr-only">Sarah Wylie Logo</span>
                <span className="fa-layers">
                  <FontAwesomeIcon
                    icon={faS}
                    className="text-lime-800 dark:text-[#24e4e3] text-6xl"
                  />
                  <FontAwesomeIcon
                    icon={faW}
                    transform="shrink-6"
                    className="text-[#B84D00] dark:text-[#FFD43B] text-6xl"
                  />
                </span>
              </div>
            </Link>
          </div>
          <nav className="flex justify-start md:justify-end dark:text-[#24e4e3] w-full md:w-auto">
              <ul className="list-none flex-col sm:flex-row">
                {headerLinks.map((link) => (
                  <li
                    key={link.section}
                    className="p-2 md:p-4 sm:inline hover:rounded-full hover:bg-[#545454] hover:text-[#F7F7F7] hover:dark:text-[#545454] hover:dark:bg-[#24e4e3] pt-2 md:pt-6"
                  >
                    <a
                      href={link.href}
                      className="sm:text-3xl text-2xl font-medium tracking-widest sm:tracking-normal no-underline"
                    >
                      {link.section}
                    </a>
                  </li>
                ))}
              </ul>
          </nav>
        </header>

        {children}

        <footer
          className="flex flex-col mb-10 text-start w-full italic"
          id="contact"
        >
          <h2 className="text-3xl sm:text-4xl font-medium tracking-wide dark:text-[#FFD43B]">
            Let&apos;s work together!
          </h2>
          <span className="mt-4 mb-10">
            Need a developer? Have a question? Want a new friend?
            <p>Let&apos;s connect!</p>
          </span>
        <Footer />
        </footer>
      </div>
    </>
  );
}
