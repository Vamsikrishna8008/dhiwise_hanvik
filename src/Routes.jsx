import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contactus = React.lazy(() => import("pages/Contactus"));
const AboutOne = React.lazy(() => import("pages/AboutOne"));
const HomePageOne = React.lazy(() => import("pages/HomePageOne"));
const SubmittedForms = React.lazy(() => import("pages/SubmittedForms"));
const Master = React.lazy(() => import("pages/Master"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const Contact = React.lazy(() => import("pages/Contact"));
const ProjectDetailvOne = React.lazy(() => import("pages/ProjectDetailvOne"));
const Project = React.lazy(() => import("pages/Project"));
const About = React.lazy(() => import("pages/About"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectdetailvone" element={<ProjectDetailvOne />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/master" element={<Master />} />
          <Route path="/submittedforms" element={<SubmittedForms />} />
          <Route path="/homepageone" element={<HomePageOne />} />
          <Route path="/aboutone" element={<AboutOne />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
