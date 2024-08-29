import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <>
            <NavBar /> <Outlet />
          </>
        }
        path="/"
        id="rootlayout"
      >
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<AboutMe />} path="/aboutme" />
        <Route element={<Project />} path="/project" />
      </Route>
    </Route>
  )
);

export default App;
