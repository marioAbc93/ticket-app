import Grid from "../components/grid";

export default function Home() {
  return (
    <>
      <div className="flex flex-col capitalize text-3xl ">
        <span className="font-semibold">¡Bienvenido!</span>
      </div>
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
