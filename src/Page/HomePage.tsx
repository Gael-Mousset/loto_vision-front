import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHost = () => {
    navigate("/host");
  };

  const handleGoGuest = () => {
    navigate("/guest");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold mb-6">🎲 Loto Vision</h1>
        <p className="mb-8 text-gray-200">
          {" "}
          Votre outil mieux suivre votre loto
        </p>
        <p className="mb-8 text-gray-200">Choisis ton rôle pour commencer :</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoHost}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-200"
          >
            Je suis l’hôte 👑
          </button>

          <button
            onClick={handleGoGuest}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-200"
          >
            Je suis un invité 🙋‍♂️
          </button>
        </div>
      </div>
    </div>
  );
};
