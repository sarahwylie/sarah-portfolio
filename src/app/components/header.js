import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS } from "@fortawesome/free-solid-svg-icons/faS";
import { faW } from "@fortawesome/free-solid-svg-icons/faW";

const headerLinks = [
  {
    href: "#about",
    section: "About",
  },
  {
    href: "#education",
    section: "Education",
  },
  {
    href: "#projects",
    section: "Projects",
  },
  {
    href: "#contact",
    section: "Contact",
  },
];

export default function Header() {
  return (
    <header className="flex flex-wrap-reverse sm:flex-nowrap items-center w-full justify-center sm:justify-between">
      <div className="hidden md:flex justify-start items-center pt-5">
        <span className="sr-only">Sarah Wylie Logo</span>
        <span className="fa-layers">
        <FontAwesomeIcon icon={faS} className="text-lime-800 dark:text-[#24e4e3] text-6xl" />
        <FontAwesomeIcon
          icon={faW}
          transform="shrink-6"
          className="text-[#B84D00] dark:text-[#FFD43B] text-6xl"
        /></span>
      </div>
      <div className="flex justify-start items-center md:justify-end dark:text-[#24e4e3] w-full md:w-auto">
        <nav>
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
      </div>
    </header>
  );
}
