import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProductsHook from "./useProductsHook";

export default function Products() {
  const navigate = useNavigate();

  const {
    products,
    isLoading,
    removeProduct,
    isDeleting,
    categories,
  } = useProductsHook();

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category?._id === selectedCategory ||
          product.category === selectedCategory
      )
    : products;

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        المنتجات
      </h1>

      {/* CATEGORY FILTER */}
      <div className="mb-6">
        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
          className="
            w-full md:w-72
            border border-border
            bg-card
            rounded-lg
            p-3
            dark:text-white
          "
        >
          <option value="">كل التصنيفات</option>

          {categories.map((category) => (
            <option
              key={category._id}
              value={category._id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-card border border-border rounded-xl p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h2 className="text-xl font-bold dark:text-white">
              {product.name}
            </h2>

            <p className="text-sm opacity-70 dark:text-white">
              الوزن: {product.weight} جم
            </p>

            <p className="text-sm opacity-70 dark:text-white">
              العيار: {product.karat}
            </p>

            <p className="text-sm opacity-70 dark:text-white">
              المصنعية: {product.workmanship}
            </p>

            <p className="text-sm opacity-70 dark:text-white">
              التصنيف:{" "}
              {product.category?.name ||
                product.categoryName ||
                "-"}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() =>
                  navigate(
                    `/products/edit/${product._id}`
                  )
                }
                className="
                  flex-1
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-2
                  rounded-lg
                  font-bold
                "
              >
                Edit
              </button>

              <button
                onClick={() =>
                  removeProduct({ id: product._id })
                }
                disabled={isDeleting}
                className="
                  flex-1
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  py-2
                  rounded-lg
                  font-bold
                  disabled:opacity-50
                "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          لا يوجد منتجات في هذا التصنيف
        </div>
      )}
    </div>
  );
}