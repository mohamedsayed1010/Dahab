import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function useDashboardPrices(token) {
  // ================= GOLD =================
  const goldFormik = useFormik({
    initialValues: {
      buy21: "",
      sell21: "",
    },

    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://dahbelarby.com/api/gold-prices",
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        toast.success("تم تحديث أسعار الذهب 👑");
        goldFormik.resetForm();
      } catch (error) {
        toast.error("خطأ في تحديث الذهب");
      }
    },
  });

  // ================= SILVER =================
  const silverFormik = useFormik({
    initialValues: {
      silver1000Buy: "",
      silver1000Sell: "",
    },

    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://dahbelarby.com/api/silver-prices",
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        toast.success("تم تحديث أسعار الفضة 🪙");
        silverFormik.resetForm();
      } catch (error) {
        toast.error(
          error?.response?.data?.message || "خطأ في تحديث الفضة"
        );
      }
    },
  });

  return {
    goldFormik,
    silverFormik,
  };
}