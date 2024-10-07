export default function TopHeroSection() {
  return (
    <section className="bg-gray-50" id="top-hero">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Creamos Experiencias Inolvidables,
            <strong className="font-extrabold text-blue-700 sm:block">
              {" "}
              Tú Solo Disfrútalas.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Conoce nuestro calendario de eventos y disfrutemos juntos!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#events-section"
            >
              Ver próximos eventos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
