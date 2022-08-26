import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import Team from "./pages/TeamPage"
import Project from "./pages/ProjectPage"
import Service from "./pages/ServicePage"
import Error from "./pages/ErrorPage"

function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route exact path= "/" element={<Home/>}/>
      <Route exact path= "/about" element={<About/>}/>
      <Route exact path= "/team" element={<Team/>}/>
      <Route exact path= "/project" element={<Project/>}/>
      <Route exact path= "/service" element={<Service/>}/>
      <Route path="*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>

  </>

}

export default App;
