import Table from "../components/table";
import ViewTitle from "../components/view-title";

export default function Events() {
  const handleCreate = () => {
    alert("abrimos un modal para crear eventos");
  };
  return (
    <>
      <ViewTitle title="Nuestros Eventos" />
      <Table
        searchBar={true}
        placeholder="Buscar eventos"
        buttonLabel="Crear evento"
        buttonAction={handleCreate}
      />
    </>
  );
}
