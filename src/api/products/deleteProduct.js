import axios from "axios";

export const deleteProduct = async ({ id, token }) => {
  const {data} = await axios.delete(
    `https://dahbelarby.com/api/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.data;
};