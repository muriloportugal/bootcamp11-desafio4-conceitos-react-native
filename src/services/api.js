import axios from "axios";

const api = axios.create({
  //Uscar "http://localhost:3333 para Android emulador se fizer adb reverse"
  //trocar o localhost pelo IP da maquina onde esta rodando o back-end
  // caso esteja rodando direto no celular"
  baseURL: "http://10.0.2.2:3333",
});

export default api;
