import axios from "axios";

export const getUsers = async () => {
  const token = localStorage.getItem("tkn");

  const { data } = await axios.get(
    "https://dahbelarby.com/api/auth/users",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};