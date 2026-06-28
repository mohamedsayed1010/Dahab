import axios from "axios";

export const getGoldPrices = async () => {
  const token = localStorage.getItem("tkn");

  const { data } = await axios.get(
    "https://api.dahbelarby.com/api/gold-prices",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};