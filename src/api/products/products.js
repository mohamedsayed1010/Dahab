import axios from "axios";

export const getProducts= async () => {
  const token = localStorage.getItem("tkn");

  const { data } = await axios.get(
    "https://dahbelarby.com/api/products",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.data;
};