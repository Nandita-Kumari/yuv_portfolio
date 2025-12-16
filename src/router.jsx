import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Professional from "./pages/Professional";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/case-study" element={<CaseStudy/>} />
        <Route path="/hire-me" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
