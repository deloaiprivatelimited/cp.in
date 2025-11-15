// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./_Features/Header/Header.tsx";
import CareerPrepWithSidebar from "./_Features/POS/components/CareerPrepWithSidebar";
import { Toaster } from "react-hot-toast";
import Portfolio from "./_Features/Protfolio/index.tsx";
import EditPortfolio from "./_Features/Protfolio/admin/index.js";
export default function App() {
  return (
    <Router>
              <Toaster />

      <Header isWhiteBackground={true} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<CareerPrepWithSidebar />} />
                 <Route path="/:username" element={<Portfolio />} />
                                  <Route path="/user/portfolio" element={<EditPortfolio/>} />


        </Routes>
      </main>
    </Router>
  );
}
