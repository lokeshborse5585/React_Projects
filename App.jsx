import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      {/* Ab sirf Home load hoga, baaki sab Home ke andar honge */}
      <Home />
    </Router>
  );
}

export default App;