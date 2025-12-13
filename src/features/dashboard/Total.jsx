import { HiOutlineBriefcase } from "react-icons/hi2";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import useOrdersForChart from "./useOrdersForChart";
import useReservationsForChart from "./useReservationsForChart";

function Total() {
  const { count: orderCount } = useOrdersForChart();
  const { count: reservationCount } = useReservationsForChart();
  return (
    // border border-akaccent-200 shadow-sm rounded-sm flex p-1.5 gap-1
    <div className="flex gap-5 text-base">
      <div className="grid grid-cols-[auto_auto] shadow-sm border border-akaccent-200 dark:border-gray-500 rounded-sm gap-2 p-1">
        {/* <HiOutlineBriefcase size={60} /> */}
        <IoFastFoodOutline size={45} />

        <p className="flex flex-col">
          <span>Orders</span>
          <span className="">{orderCount}</span>
        </p>
      </div>

      <div className="grid grid-cols-[auto_auto] shadow-sm border border-akaccent-200 dark:border-gray-500 rounded-sm gap-2 p-1">
        <MdOutlineTableRestaurant size={45} />

        <p className="flex flex-col">
          <span>Reservations</span>
          <span>{reservationCount}</span>
        </p>
      </div>
    </div>
  );
}

export default Total;
