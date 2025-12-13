import DisplayOrders from "../features/dashboard/DisplayOrders";
import DisplayResevations from "../features/dashboard/DisplayResevations";
import OrderChart from "../features/dashboard/OrderChart";
import FilterDashboard from "../features/dashboard/FilterDashboard";
import TableReservationChart from "../features/dashboard/TableReservationChart";
import Total from "../features/dashboard/Total";

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl text-akaccent-600 font-bold font-macondo">
          Dashboard
        </h1>
        <div className="flex gap-6">
          <Total />
          <FilterDashboard />
        </div>
      </div>

      <div className="grid grid-cols-2 h-[40vh] p-2">
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
          <div className="flex-1 overflow-y-auto text-sm p-2 border">
            <DisplayResevations />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 p-2 h-[40vh] gap-2">
        <div>
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
    </div>
  );
}

export default Dashboard;
