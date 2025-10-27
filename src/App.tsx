// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./_Features/Header/Header.tsx";
import CareerPrepWithSidebar from "./_Features/POS/components/CareerPrepWithSidebar";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
              <Toaster />

      <Header isWhiteBackground={true} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<CareerPrepWithSidebar />} />
        </Routes>
      </main>
    </Router>
  );
}
