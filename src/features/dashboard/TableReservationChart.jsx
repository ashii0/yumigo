import {
  Bar,
  BarChart,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatMonthDate } from "../../utils/helpers";
import useReservationsForChart from "./useReservationsForChart";
import { useDarkMode } from "../../context/DarkModeContext";

function TableReservationChart() {
  const { isDarkMode } = useDarkMode();
  const { reservations } = useReservationsForChart();

  const allReservations = Array.isArray(reservations) ? reservations : [];

  const chartData = groupReservationsByDay(allReservations);

  const hasChartData =
    chartData.length > 0 && chartData.some((d) => d.count > 0);

  return (
    <div className="border p-5 flex flex-col">
      {!hasChartData ? (
        <div className="flex flex-col items-center justify-center text-center mt-5">
          <img
            src="/nodata.svg"
            alt="No Data"
            className="w-50 h-28 opacity-80"
          />
          <h1 className="p-5 text-xl font-macondo text-akaccent-600 font-bold">
            No analytics avaiable
          </h1>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData}>
            <XAxis
              dataKey="date"
              interval={0}
              angle={-45}
              textAnchor="end"
              height={70}
              tickFormatter={(d) => formatMonthDate(new Date(d))}
            />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="count"
              fill={isDarkMode ? "#C69749" : "#8B5E3C"}
              radius={[8, 8, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>{" "}
          {/*#b78343 */}
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default TableReservationChart;

function groupReservationsByDay(reservations) {
  if (!Array.isArray(reservations) || reservations.length === 0) return [];

  const map = {};

  reservations.forEach((reservation) => {
    // const date = new Date(reservation.created_at);
    const date = new Date(reservation.reservationdate);
    const key = date.toLocaleDateString("en-CA");
    // const key = formatMonthDate(date);
    map[key] = (map[key] || 0) + 1;
  });

  return Object.entries(map).map(([date, count]) => ({
    date,
    count,
  }));
}
