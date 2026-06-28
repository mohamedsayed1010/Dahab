import axios from "axios";

export const getProductById = async ({ id, token }) => {
  const { data } = await axios.get(
    `https://api.dahbelarby.com/api/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.data;
};