// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./_Features/Header/Header.tsx";
import CareerPrepWithSidebar from "./_Features/POS/components/CareerPrepWithSidebar";
import { Toaster } from "react-hot-toast";
import Portfolio from "./_Features/Protfolio/index.tsx";
import EditPortfolio from "./_Features/Protfolio/admin/index.js";


// 🔥 Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // instant scroll
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />   {/* 👈 ALWAYS ON TOP SCROLL RESET */}

      <Toaster />
      <Header isWhiteBackground={true} />

      <main className="min-h-screen">
        <Routes>
          {/* Redirect root to new base path */}
          <Route path="/" element={<Navigate to="/Preparation-Guide/overview" replace />} />

          {/* Preparation Guide (POS) routes */}
          <Route path="/Preparation-Guide/overview" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/aptitude-dsa" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/ai-readiness" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/development-readiness" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/linkedin-engine" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/github-factory" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/internship-radar" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/project-polishing" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/resume-engine" element={<CareerPrepWithSidebar />} />
          <Route path="/Preparation-Guide/final-sprint" element={<CareerPrepWithSidebar />} />

          {/* Portfolio routes */}
          <Route path="/user/portfolio" element={<EditPortfolio />} />
          <Route path="/:username" element={<Portfolio />} />

          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/Preparation-Guide/overview" replace />} />
        </Routes>
      </main>
    </Router>
  );
}
