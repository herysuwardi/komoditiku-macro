import { Routes, Route, Switch } from "react-router-dom";

import Navs from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Training from "./pages/layanan/Training";
import Konsultasi from "./components/Konsultasi";
import Courses from "./pages/layanan/Courses";
import Digitalmarketing from "./pages/layanan/Digitalmarketing";
import Exploreproduct from "./pages/layanan/Exploreproduct";
import Mitra from "./components/Mitra";
import Videomarketing from "./components/Videomarketing";
import Kursusdetail from "./components/Kursusdetail";
import Brandingproduk from "./components/Brandingproduk";
import Risetpasar from "./components/Risetpasar";
import Marketing from "./components/Marketing";

import { HOME, ABOUT, CONTACT, TRAINING, KONSULTASI, COURSES, DIGITAL, 
  EXPLORE, MITRA, MARKETING, KURSUSDETAIL, BRANDING, RISETPASAR, MARKETINGFOUR } from "./router";

function App() {
  return ( 
    <div>
      <Navs />
      <Login />
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<About />} path={ABOUT} />
        <Route element={<Contact />} path={CONTACT} />
        <Route element={<Training />} path={TRAINING} />
        <Route element={<Konsultasi />} path={KONSULTASI} />
        <Route element={<Courses />} path={COURSES} />
        <Route element={<Digitalmarketing />} path={DIGITAL} />
        <Route element={<Exploreproduct />} path={EXPLORE} />
        <Route element={<Mitra />} path={MITRA} />
        <Route element={<Videomarketing />} path={MARKETING} />
        <Route element={<Kursusdetail />} path={KURSUSDETAIL} />
        <Route element={<Brandingproduk />} path={BRANDING} />
        <Route element={<Risetpasar />} path={RISETPASAR} />
        <Route element={<Marketing />} path={MARKETINGFOUR} />
      </Routes>           
    </div>     
    
  );
}

export default App;
