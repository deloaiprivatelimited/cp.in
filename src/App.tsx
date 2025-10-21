// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./_Features/Header/Header";
import PlacementOS from "./_Features/PlacementOS/placementOs";
import CareerPrepWithSidebar from "./_Features/POS/components/CareerPrepWithSidebar";

export default function App() {
  return (
    <Router>
      <Header isWhiteBackground={true} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/placement/os" element={<PlacementOS />} />
          <Route path="/" element={<CareerPrepWithSidebar />} />
        </Routes>
      </main>
    </Router>
  );
}
