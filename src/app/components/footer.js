import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDrupal,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-items-center">
      <div className="grid gap-4 grid-cols-4 mb-6">
        <Link href="mailto:SarahWylieWebDev@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="dark:text-[#24e4e3] text-6xl"
            aria-label="Email me"
          />
        </Link>
        <Link href="https://github.com/sarahwylie" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="dark:text-[#24e4e3] text-6xl"
            aria-label="GitHub"
          />
        </Link>
        <Link href="https://drupal.org/u/sarahwylie" target="_blank">
          <FontAwesomeIcon
            icon={faDrupal}
            className="dark:text-[#24e4e3] text-6xl"
            aria-label="Drupal"
          />
        </Link>
        <Link href="https://linkedin.com/in/sarahamwylie" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="dark:text-[#24e4e3] text-6xl"
            aria-label="LinkedIn"
          />
        </Link>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 py-2">
        © {new Date().getFullYear()} Sarah Wylie
      </div>
    </div>
  );
}
