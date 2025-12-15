import DisplayOrders from "../features/dashboard/DisplayOrders";
import DisplayResevations from "../features/dashboard/DisplayResevations";
import OrderChart from "../features/dashboard/OrderChart";
import FilterDashboard from "../features/dashboard/FilterDashboard";
import TableReservationChart from "../features/dashboard/TableReservationChart";
import Total from "../features/dashboard/Total";

function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl text-akaccent-600 font-bold font-macondo text-center">
        Dashboard
      </h1>

      {/* <div className="grid grid-cols-2 h-[40vh] p-2 sm:min-h-[40vh] sm:max-h-[50vh]"> */}
      <div className="grid sm:grid-cols-2 sm:h-[50vh] h-[90vh] p-2">
        <div className="p-1 flex flex-col overflow-hidden mt-1">
          <h1 className="text-2xl p-1 font-macondo font-bold text-center text-akcharcoal dark:text-aksoftplatinum">
            Current Orders
          </h1>
          <div className="flex-1 overflow-y-auto text-sm p-2 border">
            <DisplayOrders />
          </div>
        </div>

        <div className="p-1 flex flex-col overflow-hidden mt-1">
          <h1 className="text-2xl p-1 font-macondo font-bold text-center text-akcharcoal dark:text-aksoftplatinum">
            Upcoming Reservations
          </h1>
          <div className="flex-1 overflow-y-auto text-xs sm:text-sm p-2 border">
            <DisplayResevations />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-4">
        <div className="order-2 sm:order-1 flex justify-center sm:justify-start">
          <Total />
        </div>
        <div className="order-1 sm:order-2">
          <FilterDashboard />
        </div>
      </div>

      {/* <div className="grid grid-cols-2 p-2 h-[40vh] gap-2"> */}
      {/* <div className="p-2 sm:min-h-[40vh] sm:max-h-[50vh]"> */}
      <div className="sm:h-[50vh] min-h-[40vh] max-h-[50vh]">
        <h1 className="text-2xl p-1 font-macondo text-center text-akcharcoal dark:text-aksoftplatinum font-bold">
          Orders Placed
        </h1>
        <OrderChart />
      </div>

      <div>
        <h1 className="text-2xl p-1 font-macondo text-center text-akcharcoal dark:text-aksoftplatinum font-bold">
          Table Reservations
        </h1>
        <TableReservationChart />
      </div>
    </div>
    // </div>
  );
}

export default Dashboard;
