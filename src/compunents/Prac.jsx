import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./About";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="About" element={<About/>}>
        <Route index element={<About />} />
        <Route path="About" element={<About />}>
          <Route path="About" element={<About />} />
          <Route path="About" element={<About />} />
          <Route index element={<About />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
export default Prac;