import "./App.scss";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
