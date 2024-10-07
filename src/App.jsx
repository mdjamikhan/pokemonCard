import "./App.css";
import CustomeRoutes from "./routes/CustomeRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="all-data">
      <h1 className="pokidex-heading">
        <Link to="/">Pokidex</Link>
      </h1>

      <CustomeRoutes />
    </div>
  );
}

export default App;
