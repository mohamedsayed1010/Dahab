import {
  Coins,
  TrendingUp,
  TrendingDown,
  Building2,
  CircleDollarSign,
  ArrowLeftRight,
} from "lucide-react";
import { useGold } from "./useGold";

const GoldDivider = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="h-[2px] w-60 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
    </div>
  );
};

export default function HomeContent() {
  const {
    gold,
    usdEgp,
    isLoading,
    ouncePrice,
    prices,
    fairPrice,
    jewelerDollar,
    diff,
  } = useGold();

  return (
    <div className="px-3 mt-4 w-[90%] md:w-[70%] mx-auto">
      {/* ================= BUY / SELL ================= */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* SELL */}
        <div className="bg-card border border-border rounded-3xl p-3 h-fit">
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-12 rounded-full border border-green-500/30 flex items-center justify-center flex-shrink-0">
              <TrendingUp size={32} className="text-success" />
            </div>

            <h3 className="text-success font-bold text-2xl md:text-4xl whitespace-nowrap">
              بيع
            </h3>
          </div>

          <p className="text-center text-5xl md:text-7xl font-bold mt-3 text-black dark:text-white leading-none">
            {gold?.sell21 || "لا يوجد اسعار"}
          </p>
        </div>

        {/* BUY */}
        <div className="bg-card border border-border rounded-3xl p-3 h-fit">
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center flex-shrink-0">
              <TrendingDown size={32} className="text-danger" />
            </div>

            <h3 className="text-danger font-bold text-2xl md:text-4xl whitespace-nowrap">
              شراء
            </h3>
          </div>

          <p className="text-center text-5xl md:text-7xl font-bold mt-3 text-black dark:text-white leading-none">
            {gold?.buy21 || "لا يوجد اسعار"}
          </p>
        </div>
      </div>

      {/* ================= LOGO ================= */}
      <div className="flex justify-center ">
        <div className="w-36 h-36 md:w-28 md:h-28 xl:w-36  xl:h-36  bg-black rounded-3xl flex items-center justify-center">
          <img
            src="/icon.png"
            alt="logo"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      {gold && (
        <div className=" flex mb-3">
          <div className="px-4 py-2  text-sm  text-textMuted">
            آخر تحديث:{" "}
            <span className=" font-semibold">
              {new Date(gold.updatedAt).toLocaleString("ar-EG")}
            </span>
          </div>
        </div>
      )}

      {/* ================= PRICES TABLE ================= */}
      <div className="bg-card border border-border rounded-3xl overflow-hidden mb-4">
        <div className="grid grid-cols-3 bg-primary text-white font-semibold text-3xl">
          <div className="p-3 text-center">العيار</div>
          <div className="p-3 text-center">بيع</div>
          <div className="p-3 text-center">شراء</div>
        </div>

        {prices.map((item) => (
          <div
            key={item.karat}
            className="grid grid-cols-3 border-t border-border"
          >
            <div className="p-3 text-center font-bold dark:text-white text-3xl">
              {item.karat}
            </div>
            <div className="p-3 text-center dark:text-white text-3xl font-bold">
              {Math.ceil(item.sell)}
            </div>
            <div className="p-3 text-center dark:text-white text-3xl font-bold">
              {Math.ceil(item.buy)}
            </div>
          </div>
        ))}
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-3 gap-2">
        {/* OUNCE */}
        <div className="bg-card border border-border rounded-2xl text-center h-fit justify-center">
          <div className="flex items-center justify-center mt-2">
            <p className="text-base sm:text-2xl font-bold text-textMuted whitespace-nowrap">
              سعر الأونصة
            </p>
          </div>

          <h3 className="mt-4 text-xl sm:text-3xl lg:text-5xl font-bold text-textPrimary leading-none pb-2 ">
            $ {ouncePrice ? Number(ouncePrice).toFixed(2) : "..."}
          </h3>
        </div>

        {/* USD */}
        <div className="bg-card border border-border rounded-2xl text-center h-fit">
          <div className="flex items-center justify-center gap-4 mt-2">
            <p className="text-base sm:text-2xl font-bold text-textMuted whitespace-nowrap">
              دولار البنك
            </p>
          </div>

          <h3 className="mt-4 text-xl sm:text-3xl lg:text-5xl font-bold text-textPrimary leading-none pb-2">
            {isLoading ? "..." : usdEgp?.toFixed(2)}
          </h3>
        </div>

        {/* JEWELER */}
        <div className="bg-card border border-border rounded-2xl text-center h-fit">
          <div className="flex items-center justify-center mt-2">
            <p className="text-base sm:text-2xl font-bold text-textMuted whitespace-nowrap">
              دولار الصاغة
            </p>
          </div>

          <h3 className="mt-4 text-xl sm:text-3xl lg:text-5xl font-bold text-textPrimary leading-none pb-2">
            {jewelerDollar.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* ================= FAIR PRICE ================= */}
      <div className="flex justify-center mt-3">
        <div className="bg-card border border-border rounded-2xl w-full md:w-[60%] lg:w-[40%]">
          <div className="flex items-center gap-2">
            <div className="flex items-center border-l-2 border-border p-2 pl-6 bg-primary rounded-r-2xl">
              <p className="text-textPrimary font-semibold text-xl md:text-4xl text-nowrap">
                السعر العادل
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary pr-1">
                {fairPrice ?  Math.floor(fairPrice) : "..."}
              </h2>
            </div>

            <p className="text-lg sm:text-2xl font-semibold text-textPrimary whitespace-nowrap">
              الفرق {Math.ceil(diff)}{" "}
              <span
                className={
                  diff >= 0
                    ? "text-green-500 font-bold"
                    : "text-red-500 font-bold"
                }
              >
                {diff >= 0 ? "+" : "-"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
