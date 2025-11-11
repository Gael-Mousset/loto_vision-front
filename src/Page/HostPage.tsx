import React, { useState } from "react";
import { useBoardSocket } from "../services/useBoardSocket";
import NumberGrid from "../components/NumberGrid";
import { createRoom } from "../services/room/createRoom";

export const HostPage: React.FC = () => {
  const [code, setCode] = useState("");
  const { board, toggleNumber, resetBoard } = useBoardSocket({ code });

  const handleCreateRoom = async () => {
    try {
      const code = await createRoom();
      setCode(code);
      console.log("Salle créée avec le code :", code);
    } catch (e) {
      console.log(e);
      alert("Erreur lors de la création de la salle");
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4 items-center text-center">
      {!code && (
        <button
          onClick={handleCreateRoom}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Créer une salle
        </button>
      )}

      {code && (
        <div className="border p-2 rounded w-full max-w-sm">
          <p className="font-bold">Code de la salle :</p>
          <p className="text-2xl">{code}</p>
          <p className="text-sm text-gray-500">
            Donne ce code aux invités pour qu&apos;ils se connectent.
          </p>
        </div>
      )}

      <NumberGrid board={board} onClickNumber={toggleNumber} />

      <button
        onClick={resetBoard}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
        disabled={!code}
      >
        Reset du tableau
      </button>
    </div>
  );
};
