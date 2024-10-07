import EventCard from "../components/event-card";
import Footer from "../components/footer";
import Grid from "../components/grid";
import Header from "../components/header";
import PaymentMethods from "../components/payment-methods";
import TopHeroSection from "../components/top-hero-section";

export default function Landing() {
  return (
    <>
      <Header />
      <section id="top-hero">
        <TopHeroSection />
      </section>

      <section
        id="events-section"
        className="mt-6 flex flex-col items-center px-10 justify-center gap-8"
      >
        <h3 className="text-2xl text-blue-600 font-bold">Próximos eventos</h3>
        <Grid>
          <EventCard />
          <EventCard />
          <EventCard />
        </Grid>
      </section>
      <PaymentMethods />
      <Footer />
    </>
  );
}
