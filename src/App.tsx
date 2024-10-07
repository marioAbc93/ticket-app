import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
