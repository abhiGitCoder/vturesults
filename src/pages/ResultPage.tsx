import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bottom from "../assets/bottom.jpg";
import captca from "../assets/cpa.jpg";
import header from "../assets/header.jpg";

const ResultPage: React.FC = () => {
  const [usn, setUsn] = useState("");
  const [captcha, setCaptcha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (usn === "4VM23EE013" && captcha === "4TKJRP") {
      navigate("/results"); // Redirect to Results page
    } else {
      alert("Invalid USN or Captcha");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center">
        <img src={header} alt="VTU Logo" />

        <div className="bg-white p-4 rounded shadow w-full max-w-md mt-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="ENTER USN"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="Enter Captcha Code"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />

            <div className="text-center my-2">
              <img src={captca} alt="Captcha" className="w-40" />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 text-black py-2 rounded"
            >
              ಸಲ್ಲಿಸಿ / SUBMIT
            </button>
            <button
              type="button"
              className="w-full bg-red-400 text-black py-2 rounded"
            >
              ರದ್ದುಪಡಿಸಿ / CANCEL
            </button>
          </form>
        </div>
      </div>

      <img src={bottom} alt="Bottom Logo" className="w-full object-cover" />
    </div>
  );
};

export default ResultPage;
