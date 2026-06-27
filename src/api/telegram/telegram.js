import axios from "axios";

export const getLastTelegramPrice = async () => {
  const token = localStorage.getItem("tkn");

  const { data } = await axios.get(
    "https://dahbelarby.com/api/telegram-cache/last",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};