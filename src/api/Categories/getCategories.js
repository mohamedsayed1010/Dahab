import axios from "axios";

export const getCategories = async (token) => {
  const { data } = await axios.get(
    "https://api.dahbelarby.com/api/categories",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.data;
};