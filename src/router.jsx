import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Professional from "./pages/Professional";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";
import PdfViewer from "./pages/PdfViewer";
import IntroVideo from "./pages/IntroVideo";
import WhoIsWatching from "./pages/WhoIsWatching";
import ProjectPage from "./pages/projectPage";
// import IntroSplash from "./pages/IntroVideo";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroVideo />} />
        <Route path="/who" element={<WhoIsWatching />} />
        <Route path="/home" element={<Home />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/case-study" element={<CaseStudy/>} />
        <Route path="/hire-me" element={<Contact />} />
        <Route path="/viewer" element={<PdfViewer />} />
        <Route path="/projectPage" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
