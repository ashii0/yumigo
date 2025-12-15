import { useState } from "react";
import CreateOrder from "../features/order/CreateOrder";
import OrderSummary from "../features/order/OrderSummary";
import EditUser from "../features/user/updateuser/EditUser";

function Order() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5">
      <div className="border border-akaccent-300 py-5 px-8 shadow-2xl dark:shadow-md shadow-akaccent-600">
        <h1 className="flex justify-center items-center text-2xl font-bold font-macondo text-akaccent-600 bg-akslatebluegray/90 p-1">
          Personal Details
        </h1>
        <CreateOrder />
        {!isOpen && (
          <div className="flex flex-col sm:flex-row sm:justify-end sm:p-2 p-1 my-4 sm:gap-2 gap-3 items-center">
            <EditUser />

            <button
              className="sm:p-2 p-1 sm:text-base text-sm rounded-lg shadow-lg shadow-akaccent-200 bg-akaccent-600 text-aksoftplatinum"
              onClick={() => {
                setIsOpen(true);
                // localStorage.setItem("isOpen", true);
              }}
            >
              Continue to Order Summary
            </button>
          </div>
        )}

        {isOpen && <OrderSummary onEdit={() => setIsOpen(false)} />}
      </div>
    </div>
  );
}

export default Order;

// // const [isOpen, setIsOpen] = useState(
//   //   JSON.parse(localStorage.getItem("isOpen") || "false")
//   // );

//   const [isOpen, setIsOpen] = useState(() => {
//     const stored = localStorage.getItem("isOpen");

//     return stored ? JSON?.parse(stored) : false;
//   });
//   useEffect(() => {
//     localStorage.setItem("isOpen", isOpen);
//   }, [isOpen]);

// useState(() => {
//     const stored = localStorage.getItem("isOpen");

//     if (!stored) return false;

//     if (stored === "undefined" || stored === "null") return false;

//     try {
//       const parsed = JSON.parse(stored);

//       return typeof parsed === "boolean" ? parsed : false;
//     } catch {
//       return false;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem("isOpen", JSON.stringify(isOpen));
//   }, [isOpen]);
