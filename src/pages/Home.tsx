import React from "react";
import { useNavigate } from "react-router-dom";
import vsv from "../assets/vsv.jpg";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToResult = () => {
    navigate("/result"); // Navigate to ResultPage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Banner */}
      <img src={vsv} alt="VTU Banner" className="w-full object-cover" />

      {/* Notifications */}
      <div className="w-full max-w-md mt-4 px-4">
        <div className="bg-gray-200 text-center p-2 rounded-md shadow">
          <p className="text-green-700 font-bold text-sm">
            VTU UG / PG RESULT NOTIFICATIONS
          </p>
        </div>

        {/* Result Links */}
        <div className="mt-3 space-y-3">
          <div
            className="bg-blue-100 border border-blue-300 p-3 rounded-md shadow cursor-pointer"
            onClick={goToResult} // Make clickable
          >
            <p className="text-blue-800 font-medium">
              ▶ June/July-2025 Examination{" "}
              <span className="text-red-600 font-bold text-xs ml-1">New</span>
            </p>
          </div>

          <div className="bg-blue-100 border border-blue-300 p-3 rounded-md shadow">
            <p className="text-blue-800 font-medium">
              ▶ Ph.D. / M.S (Research) Course-Work Examination Revaluation
              Result of November/December
            </p>
          </div>

          <div className="bg-blue-100 border border-blue-300 p-3 rounded-md shadow">
            <p className="text-blue-800 font-medium">
              ▶ B.E. / B.Tech Semester Results - CBCS Scheme
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-xs text-gray-600">
        © 2025 VTU Results Portal
      </footer>
    </div>
  );
};

export default Home;
