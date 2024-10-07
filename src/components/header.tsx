import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="flex items-center gap-4 text-blue-600" href="#">
              <img src={Logo} className="h-8" alt="company-logo" />
              <h1 className="text-md font-bold">Ticket App</h1>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    href="#top-hero"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#events-section"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Eventos
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Ingresa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
