import { useEffect, useState } from "react";
import EventCard from "../components/event-card";
import Footer from "../components/footer";
import Grid from "../components/grid";
import Header from "../components/header";
import PaymentMethods from "../components/payment-methods";
import TopHeroSection from "../components/top-hero-section";
import { EventResponse } from "../models/entities";
import getAllList from "../services/getAllList";
import { useModal } from "../models/context/useModal";

export default function Landing() {
  const { reload } = useModal();
  const [eventData, setEventData] = useState<EventResponse | null>(null);

  const handleFetch = () => {
    getAllList().then((res: EventResponse) => {
      setEventData(res);
    });
  };

  useEffect(() => {
    handleFetch();
  }, [reload]);
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
          {eventData?.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Grid>
      </section>
      <PaymentMethods />
      <Footer />
    </>
  );
}
