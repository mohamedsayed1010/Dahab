import axios from "axios";

export const createProduct = async ({ values, token }) => {
  const formData = new FormData();

  formData.append("name", values.name);
  formData.append("category", values.category);
  formData.append("weight", values.weight);
  formData.append("workmanship", values.workmanship);
  formData.append("karat", values.karat);

  if (values.cashback) {
    formData.append("cashback", values.cashback);
  }

  if (values.image) {
    formData.append("image", values.image);
  }

  const { data } = await axios.post(
    "https://api.dahbelarby.com/api/products",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};