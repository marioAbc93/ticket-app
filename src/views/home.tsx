import { useEffect, useState } from "react";
import Grid from "../components/grid";
import ViewTitle from "../components/view-title";
import { AvailableEventSummaryResponse } from "../models/entities";
import getSummary from "../services/getSummary";
import Card from "../components/card";

export default function Home() {
  const [data, setData] = useState<AvailableEventSummaryResponse | null>(null);

  const handleFetch = () => {
    getSummary().then((res: AvailableEventSummaryResponse) => {
      setData(res);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  console.log(data, "jo");

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    available_events,
    events_with_available_tickets,
    soldout_events,
    total_events,
  } = data;

  return (
    <>
      <ViewTitle title="¡Bienvenido!" />
      <div className="flex flex-col flex-1 lg:flex-row">
        <Grid>
          <Card
            background="blue"
            data={total_events}
            title="Todos nuestros eventos"
            path="/eventos"
            border={false}
          />
          <Card
            background="slate"
            data={soldout_events}
            title="Eventos agotados"
            path="/eventos"
            border={true}
          />
          <Card
            background="blue"
            data={available_events}
            title="Eventos con tickets disponibles"
            path="/eventos"
            border={false}
          />

          {events_with_available_tickets?.map((event, index) => (
            <Card
              key={event.id}
              background={index % 2 === 0 ? "slate" : "blue"}
              data={`${event.available_tickets} tickets disponibles`}
              title={event.name}
              path={`/eventos`}
              border={index % 2 === 0}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}
