import "./App.scss";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Intro from "./components/Intro";
import CourseInfo from "./components/CourseInfo";
import Program from "./components/Program";
import Experts from "./components/Experts";
import Prices from "./components/Prices";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <CourseInfo />
      <Program />
      <Experts />
      <Prices />
    </div>
  );
}

export default App;
