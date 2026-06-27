import axios from "axios";

export const getCategories = async (token) => {
  const { data } = await axios.get(
    "https://dahbelarby.com/api/categories",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.data;
};