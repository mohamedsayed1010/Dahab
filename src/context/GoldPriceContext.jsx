import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLastTelegramPrice } from "../api/telegram/telegram";

const GoldPriceContext = createContext();

export function GoldPriceProvider({ children }) {
  const [ouncePrice, setOuncePrice] = useState(() => {
    return Number(localStorage.getItem("ouncePrice")) || null;
  });

  const { data } = useQuery({
    queryKey: ["last-telegram-price"],
    queryFn: getLastTelegramPrice,
    refetchOnMount: true,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    retry: 1,
  });

  useEffect(() => {
    if (!data?.success) return;

    const price = Number(data.data.lastPrice);

    if (!price) return;

    setOuncePrice(price);
    localStorage.setItem("ouncePrice", price);
  }, [data]);

  return (
    <GoldPriceContext.Provider value={{ ouncePrice }}>
      {children}
    </GoldPriceContext.Provider>
  );
}

export const useGoldPrice = () => useContext(GoldPriceContext);