import "./App.scss";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Intro from "./components/Intro";
import CourseInfo from "./components/CourseInfo";
import Program from "./components/Program";
import Experts from "./components/Experts";
import Prices from "./components/Prices";
import Reviews from "./components/Reviews";
import {
  benefits,
  expertsBio,
  programInfo,
  types,
} from "./components/courseData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <CourseInfo types={types} benefits={benefits} />
      <Program program={programInfo} />
      <Experts experts={expertsBio} />
      <Reviews />
      <Prices />
    </div>
  );
}

export default App;
