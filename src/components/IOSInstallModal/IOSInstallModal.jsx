import { MdOutlineAddBox } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";


export default function IOSInstallModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/60
        flex items-center justify-center
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          bg-card
          p-6
          shadow-xl
        "
      >
        <h2 className="text-2xl font-bold text-center mb-5">
          تثبيت التطبيق | Install App
        </h2>

        <div className="space-y-4 text-sm">
          {/* Step 1 */}
          <div className="flex items-center gap-3">
            <IoShareOutline className="text-primary text-xl shrink-0" />

            <div>
              <p className="font-medium dark:text-white">
                اضغط على زر المشاركة
              </p>
              <p className="text-gray-500 dark:text-white">
                Tap the Share button in Safari
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3">
            <MdOutlineAddBox className="text-primary text-2xl shrink-0" />

            <div>
              <p className="font-medium dark:text-white">
                اختر إضافة إلى الشاشة الرئيسية
              </p>
              <p className="text-gray-500 dark:text-white">
                Select Add to Home Screen
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3">
            <IoCheckmarkCircle className="text-primary text-xl shrink-0" />

            <div>
              <p className="font-medium dark:text-white">
                اضغط إضافة
              </p>
              <p className="text-gray-500 dark:text-white">
                Tap Add
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="
            mt-6
            w-full
            py-3
            rounded-xl
            bg-primary
            text-white
            font-semibold
          "
        >
          تم | Done
        </button>
      </div>
    </div>
  );
}