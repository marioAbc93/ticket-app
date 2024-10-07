import Table from "../components/table";
import ViewTitle from "../components/view-title";

export default function Tickets() {
  return (
    <>
      <ViewTitle title="Consolidado de tickets" />
      <Table searchBar={false} />
    </>
  );
}
