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
import useOrdersForChart from "./useOrdersForChart";
import { useDarkMode } from "../../context/DarkModeContext";

function OrderChart() {
  const { isDarkMode } = useDarkMode();
  //const { orders } = useOrders();
  const { orders } = useOrdersForChart();

  const allOrders = Array.isArray(orders) ? orders : [];

  const chartData = groupOrderByDay(allOrders);

  return (
    <div className="border p-5 flex flex-col">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <XAxis
            dataKey="date"
            interval={0}
            tickFormatter={(d) => formatMonthDate(new Date(d))}
          />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="count"
            fill={isDarkMode ? "#C69749" : "#8B5E3C"}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrderChart;

function groupOrderByDay(orders) {
  if (!Array.isArray(orders) || orders.length === 0) return [];

  const map = {};

  orders.forEach((order) => {
    const date = new Date(order.created_at);

    const key = date.toLocaleDateString("en-CA");
    // const key = formatMonthDate(date);

    map[key] = (map[key] || 0) + 1;
  });

  return Object.entries(map).map(([date, count]) => ({
    date,
    count,
  }));
}
