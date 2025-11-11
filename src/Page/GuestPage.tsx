import React, { useState } from "react";
import axios from "axios";
import { useBoardSocket } from "../services/useBoardSocket";
import NumberGrid from "../components/NumberGrid";
import { joinRoom } from "../services/room/joinRoom";

export const GuestPage: React.FC = () => {
  const [codeInput, setCodeInput] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const { board, error } = useBoardSocket({ code: roomCode });

  const handleJoin = async () => {
    try {
      const code = await joinRoom(codeInput);
      setRoomCode(code);
      console.log("Rejoint la salle :", code);
    } catch (e) {
      console.log(e);
      alert("Salle introuvable");
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4 items-center text-center">
      <div className="p-4 flex flex-col gap-4 ">
        {!roomCode && (
          <>
            <input
              className="border rounded p-2"
              placeholder="Code de la salle"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
            />
            <button
              onClick={handleJoin}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Rejoindre la salle
            </button>
          </>
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}

        {roomCode && (
          <>
            <div className="border p-2 rounded">
              <p className="font-bold">Salle :</p>
              <p>{roomCode}</p>
            </div>

            <NumberGrid board={board} />
          </>
        )}
      </div>
    </div>
  );
};
