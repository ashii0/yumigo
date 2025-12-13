export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  if (!dateStr) return "";

  //fix invalid timezone format: +00:00 -> z
  const fixeddateStr = dateStr.replace(/\+00:00$/, "Z");

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(fixeddateStr));
}

export function formatMonthDate(dateStr) {
  if (!dateStr) return "";

  let date;

  if (dateStr instanceof Date) {
    date = dateStr;
  } else if (typeof dateStr === "string") {
    const fixed = dateStr.replace(/\+00:00$/, "Z");
    date = new Date(fixed);
  } else {
    return "";
  }

  //fix invalid timezone format: +00:00 -> z
  //const fixeddateStr = dateStr.replace(/\+00:00$/, "Z");

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(date);
}

export function formatTime(dateStr) {
  if (!dateStr) return "";

  //fix invalid timezone format: +00:00 -> z
  const fixeddateStr = dateStr.replace(/\+00:00$/, "Z");

  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(fixeddateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export function getOrderStatus(estimateddelivery) {
  const deliveryIn = calcMinutesLeft(estimateddelivery);

  if (deliveryIn <= 30 && deliveryIn >= 26) return "Preparing";
  if (deliveryIn >= 6) return "On the way";
  if (deliveryIn >= 1) return "Arriving soon";
  return "Delivered";
}

// export function getOrderStatus(estimateddelivery) {
//   const deliveryIn = calcMinutesLeft(estimateddelivery);

//   if (deliveryIn === 30 && deliveryIn >= 26) return "Preparing";
//   if (deliveryIn <= 25 && deliveryIn >= 6) return "On the way";
//   if (deliveryIn <= 5 && deliveryIn >= 1) return "Arriving soon";
//   return "Delivered";
// }
