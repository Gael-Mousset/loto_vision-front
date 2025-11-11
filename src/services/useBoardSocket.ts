import { useEffect, useMemo, useState } from "react";
import { io, Socket } from "socket.io-client";

interface UseBoardSocketOptions {
  code: string;
}

export const useBoardSocket = ({ code }: UseBoardSocketOptions) => {
  const [board, setBoard] = useState<Boolean[]>(new Array(90).fill(false));
  const [error, setError] = useState<string | null>(null);

  const socket: Socket = useMemo(() => {
    return io(import.meta.env.VITE_API_URL);
  }, []);

  useEffect(() => {
    if (!code) return;

    console.log("Connexion a la salle", code);
    socket.emit("join-room", { code });

    socket.on("board-update", (payload: { board: Boolean[] }) => {
      console.log("Board updated", payload.board);
      setBoard(payload.board);
    });

    socket.on("room-error", (payload) => {
      console.log("Error in room", payload);
      setError(payload);
    });

    return () => {
      socket.disconnect();
    };
  }, [code, socket]);

  const toggleNumber = (number: number) => {
    if (!code) return;
    socket.emit("toggle-number", { code, number });
  };
  const resetBoard = () => {
    if (!code) return;
    socket.emit("reset-board", { code });
  };

  return {
    board,
    error,
    toggleNumber,
    resetBoard,
  };
};
