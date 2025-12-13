import { createContext, useContext, useEffect, useState } from "react";

const DateContext = createContext();

function DateProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    //const todayStr = today.toISOString().split("T")[0];
    const temp = [];

    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      // if (i > 0) {
      //   temp.push(d);
      //   continue;
      // }
      temp.push(d);
    }

    setDates(temp);
  }, []);

  const formatDay = (d) => d.toLocaleDateString("en-CA", { weekday: "short" });
  const formatDate = (d) => d.toLocaleDateString("en-CA", { day: "numeric" });

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedSlot,
        setSelectedSlot,
        selectedTable,
        setSelectedTable,
        formatDay,
        formatDate,
        dates,
        setDates,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}

function useDate() {
  const context = useContext(DateContext);

  if (context === undefined)
    throw new Error("DateContext is used outside of DateProvider");

  return context;
}

export { DateProvider, useDate };

// import { createContext, useContext, useEffect, useState } from "react";

// const DateContext = createContext();

// function DateProvider({ children }) {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [selectedTable, setSelectedTable] = useState(null);
//   const [dates, setDates] = useState([]);

//   useEffect(() => {
//     const today = new Date();
//     const temp = [];

//     for (let i = 0; i < 14; i++) {
//       const d = new Date();
//       d.setDate(today.getDate() + i);
//       temp.push(d);
//     }

//     setDates(temp);
//   }, []);

//   const formatDay = (d) => d.toLocaleDateString("en-CA", { weekday: "short" });
//   const formatDate = (d) => d.toLocaleDateString("en-CA", { day: "numeric" });

//   return (
//     <DateContext.Provider
//       value={{
//         selectedDate,
//         setSelectedDate,
//         selectedSlot,
//         setSelectedSlot,
//         selectedTable,
//         setSelectedTable,
//         formatDay,
//         formatDate,
//         dates,
//       }}
//     >
//       {children}
//     </DateContext.Provider>
//   );
// }

// function useDate() {
//   const context = useContext(DateContext);

//   if (context === undefined)
//     throw new Error("DateContext is used outside of DateProvider");

//   return context;
// }

// export { DateProvider, useDate };
