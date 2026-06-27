import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import socket from "../socket";
import { getLastTelegramPrice } from "../api/telegram/telegram";

const GoldPriceContext = createContext();

export function GoldPriceProvider({ children }) {
  const [ouncePrice, setOuncePrice] = useState(() => {
    return Number(localStorage.getItem("ouncePrice")) || null;
  });

  // ================= LAST PRICE API =================
  const { data } = useQuery({
    queryKey: ["last-telegram-price"],
    queryFn: getLastTelegramPrice,

    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,

    retry: 1,
  });

  // ================= SET LAST PRICE =================
  useEffect(() => {
    if (!data?.success) return;

    const priceText = String(data.data.lastPrice).trim();

    // يقبل أرقام فقط مثل:
    // 4070
    // 4070.18
    // 15000
    // 15000.00
    if (!/^\d+(\.\d+)?$/.test(priceText)) return;

    const price = Number(priceText);

    if (!Number.isFinite(price)) return;

    setOuncePrice(price);
    localStorage.setItem("ouncePrice", price);
  }, [data]);

  // ================= SOCKET =================
  useEffect(() => {
    const handleGoldPrice = (data) => {
      const price = Number(data.price);

      if (!Number.isFinite(price)) return;

      console.log("Socket Price:", price);

      setOuncePrice(price);
      localStorage.setItem("ouncePrice", price);
    };

    socket.on("goldPrice", handleGoldPrice);

    return () => {
      socket.off("goldPrice", handleGoldPrice);
    };
  }, []);

  return (
    <GoldPriceContext.Provider
      value={{
        ouncePrice,
      }}
    >
      {children}
    </GoldPriceContext.Provider>
  );
}

export const useGoldPrice = () => {
  return useContext(GoldPriceContext);
};