import { GitHub, LinkedIn } from "../assets/icons";
import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <a className="flex items-center gap-4 text-blue-600" href="#">
            <img src={Logo} className="h-8" alt="company-logo" />
            <h1 className="text-md font-bold">Ticket App</h1>
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Hecho con amor por{" "}
          <a
            className="text-blue-600 font-bold"
            href="https://www.mariobarrosc.com/"
            target="_blank"
          >
            Mario Barros C.
          </a>
        </p>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.linkedin.com/in/mario-barros-carrillo/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedIn />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/marioAbc93"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <GitHub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
