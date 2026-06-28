import axios from "axios";

export const updateProduct = async ({ id, values, token }) => {
  const formData = new FormData();

  formData.append("name", values.name);
  formData.append("category", values.category);
  formData.append("weight", values.weight);
  formData.append("workmanship", values.workmanship);
  formData.append("karat", values.karat);

  if (values.cashback !== "" && values.cashback !== undefined) {
    formData.append("cashback", values.cashback);
  }

  if (values.image instanceof File) {
    formData.append("image", values.image);
  }

  const { data } = await axios.put(
    `https://api.dahbelarby.com/api/products/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.data;
};