import { Home } from "lucide-react";
import { LuArrowUpDown } from "react-icons/lu";
import { GiMetalBar, GiRingBox, GiPowerRing } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";

export const tabs = [
  {
    id: "home",
    label: "الرئيسية",
    icon: Home,
    path: "/",
  },
  {
    id: "bars",
    label: "سبائك",
    children: [
      {
        id: "bars-list",
        label: "سبائك24",
        icon: GiMetalBar,
        path: "/bars/list",
      },
      {
        id: "coins",
        label: "جنيهات21",
        icon: FaCoins,
        path: "/bars/coins",
      },
    ],
  },
  {
    id: "jewelry",
    label: "مشغولات",
    children: [
      {
        id: "new",
        label: "جديد",
        icon: GiRingBox,
        path: "/jewelry/new",
      },
      {
        id: "used",
        label: "مستعمل",
        icon: GiPowerRing,
        path: "/jewelry/used",
      },
    ],
  },
  {
    id: "silver",
    label: "فضة",
    children: [
      {
        id: "prices",
        label: "أسعار",
        icon: LuArrowUpDown,
        path: "/silver/prices",
      },
      {
        id: "silver-bars",
        label: "سبائك",
        icon: GiMetalBar,
        path: "/silver/bars",
      },
    ],
  },
];