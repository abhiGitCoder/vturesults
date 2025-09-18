import React from "react";
import results from "../assets/results.jpg";

const Results: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <img src={results} alt="Results" className="max-w-full h-auto" />
    </div>
  );
};

export default Results;
