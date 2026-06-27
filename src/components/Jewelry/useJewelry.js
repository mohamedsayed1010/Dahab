import { useState, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../api/products/products";
import { getGoldPrices } from "../../api/gold/goldPrices";

export default function useJewelry(category) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedKarat, setSelectedKarat] = useState("");
  const [sortByWeight, setSortByWeight] = useState("");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { data: goldData } = useQuery({
    queryKey: ["gold-prices"],
    queryFn: getGoldPrices,
  });

  const gold = useMemo(
    () => goldData?.data?.[0],
    [goldData]
  );

  const filteredProducts = useMemo(() => {
    return products.filter(
      (item) => item?.category?.name === category
    );
  }, [products, category]);

  const title = useMemo(() => {
    return filteredProducts?.[0]?.category?.name || category;
  }, [filteredProducts, category]);

  const weights = useMemo(() => {
    return [
      ...new Set(
        filteredProducts.map((item) => item.weight)
      ),
    ].sort((a, b) => a - b);
  }, [filteredProducts]);

  const types = useMemo(() => {
    return [
      ...new Set(
        filteredProducts.map(
          (item) => item.name
        )
      ),
    ];
  }, [filteredProducts]);

  const displayedProducts = useMemo(() => {
    let productsList = filteredProducts.filter(
      (item) => {
        const typeMatch =
          !selectedType ||
          item.name === selectedType;

        const karatMatch =
          !selectedKarat ||
          Number(item.karat) ===
            Number(selectedKarat);

        return typeMatch && karatMatch;
      }
    );

    if (sortByWeight === "asc") {
      productsList.sort(
        (a, b) => a.weight - b.weight
      );
    }

    if (sortByWeight === "desc") {
      productsList.sort(
        (a, b) => b.weight - a.weight
      );
    }

    return productsList;
  }, [
    filteredProducts,
    selectedType,
    selectedKarat,
    sortByWeight,
  ]);

  const getPricePerGram = useCallback(
    (product) => {
      const karat = Number(product.karat);

      if (karat === 21) {
        return Math.ceil(gold?.sell21 ?? 0);
      }

      if (karat === 18) {
        return Math.ceil(gold?.sell18 ?? 0);
      }

      return 0;
    },
    [gold]
  );

  const getTotal = useCallback(
    (product) => {
      return (
        (getPricePerGram(product) +
          Number(product.workmanship ?? 0)) *
        Number(product.weight ?? 0)
      );
    },
    [getPricePerGram]
  );

  return {
    isLoading,
    title,

    displayedProducts,
    weights,
    types,

    selectedType,
    setSelectedType,

    selectedKarat,
    setSelectedKarat,

    selectedImage,
    setSelectedImage,

    sortByWeight,
    setSortByWeight,

    getPricePerGram,
    getTotal,
  };
}