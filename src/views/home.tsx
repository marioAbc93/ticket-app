import Grid from "../components/grid";
import ViewTitle from "../components/view-title";

export default function Home() {
  return (
    <>
      <ViewTitle title="¡Bienvenido!" />
      <div className="flex flex-col flex-1 lg:flex-row">
        <Grid>
          <div>hola</div>
          <div>hola</div>
          <div>hola</div>
          <div>hola</div>
        </Grid>
      </div>
    </>
  );
}
