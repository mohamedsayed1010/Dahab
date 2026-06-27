import { useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { getProducts } from "../../../api/products/products";
import { deleteProduct } from "../../../api/products/deleteProduct";
import { updateProduct } from "../../../api/products/updateProduct";
import { AuthContext } from "../../../context/AuthContext";
import { getCategories } from "../../../api/Categories/getCategories";

export default function useProductsHook() {
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // ================= GET PRODUCTS =================
  const {
    data: products = [],
    isLoading: productsLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(token),
    enabled: !!token,
  });

  // ================= GET CATEGORIES =================
  const {
    data: categories = [],
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(token),
    enabled: !!token,
  });

  // ================= DELETE PRODUCT =================
  const { mutate: removeProduct, isPending: isDeleting } = useMutation({
    mutationFn: ({ id }) =>
      deleteProduct({
        id,
        token,
      }),

    onSuccess: () => {
      toast.success("تم حذف المنتج 🗑️");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "حصل خطأ أثناء الحذف"
      );
    },
  });

  // ================= UPDATE PRODUCT =================
  const { mutate: editProduct, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, values }) =>
      updateProduct({
        id,
        values,
        token,
      }),

    onSuccess: () => {
      toast.success("تم تعديل المنتج بنجاح ✅");

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "حصل خطأ أثناء تعديل المنتج"
      );
    },
  });

  return {
    products,
    categories,

    productsLoading,
    categoriesLoading,

    isLoading: productsLoading || categoriesLoading,

    removeProduct,
    isDeleting,

    editProduct,
    isUpdating,
  };
}