import { useApi } from "../useApi";

const api = useApi();

export const joinRoom = async (code: string) => {
  try {
    const res = await api.post("/rooms/join", { code });
    return res.data.code;
  } catch (e) {
    console.log(e);
    alert("Erreur lors de la connexion à la salle");
  }
};
