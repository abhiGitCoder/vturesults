import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/result" element={<ResultPage />} />

            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
