import axios from "axios";

export const getSilverPrices = async () => {
  const token = localStorage.getItem("tkn");

  const { data } = await axios.get(
    "https://api.dahbelarby.com/api/silver-prices",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};