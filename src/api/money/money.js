import axios from "axios";

export const getUsdEgp = async () => {
  const {data} = await axios.get(
    "https://fxapi.app/api/USD/EGP.json"
  );

  return data;
};