import SWLogo from "./SWlogo.png";
import Image from "next/image";

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
    // <div className="flex flex-wrap w-full justify-between items-center">
      <div className="flex flex-wrap-reverse sm:flex-nowrap items-center w-full justify-center sm:justify-between">
      {/* <div className="fa-layers justify-start pt-5">
          <FontAwesomeIcon
            icon={faS}
            className="dark:text-[#24e4e3] text-6xl"
          />
          <FontAwesomeIcon
            icon={faW}
            transform="shrink-6"
            className="dark:text-[#FFD43B] text-6xl"
          />
        </div> */}
      <div className="hidden md:flex justify-start">
        <Image
          src={SWLogo}
          alt="Sarah Wylie Logo"
          width={75}
          height={75}
          className="rounded-full"
        />
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
  );
}
