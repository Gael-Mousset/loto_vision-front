import { useApi } from "../useApi";

const api = useApi();

export const createRoom = async () => {
  try {
    const res = await api.post("/rooms");
    return res.data.code;
  } catch (e) {
    console.log(e);
    alert("Erreur lors de la création de la salle");
  }
};
