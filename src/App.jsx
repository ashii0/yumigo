import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { DateProvider } from "./context/DateContext";
import { ItemProvider } from "./context/ItemContext";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Menus from "./pages/Menus";
import Order from "./pages/Order";
import ReserveTable from "./pages/ReserveTable";
import Restaurant from "./pages/Restaurant";
import Restaurants from "./pages/Restaurants";
import User from "./pages/User";
import ViewCart from "./pages/ViewCart";
import AppLayout from "./ui/AppLayout";

import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderConfirmation from "./features/order/OrderConfirmation";
import ReservationConfirmations from "./features/reservetable/ReservationConfirmations";
import SignUpForm from "./features/user/signup/SignUpForm";
import OrderHistory from "./features/history/orderhistory/OrderHistory";
import TableReservationHistory from "./features/history/tablereservationhistory/TableReservationHistory";
import Contact from "./pages/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <DarkModeProvider>
        <ItemProvider>
          <DateProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="about" element={<About />} />
                  <Route path="restaurants" element={<Restaurants />} />
                  <Route
                    path="restaurants/:restaurantId"
                    element={<Restaurant />}
                  />
                  <Route
                    path="restaurants/:restaurantId/menus"
                    element={<Menus />}
                  />
                  <Route
                    path="restaurants/:restaurantId/reservetable"
                    element={<ReserveTable />}
                  />

                  <Route path="cart" element={<Cart />} />
                  <Route path="cart/:restaurantId" element={<ViewCart />} />

                  <Route
                    path="order/:restaurantId/ordersummary"
                    element={<Order />}
                  />
                  <Route
                    path="orderconfirmation/:ordercode"
                    element={<OrderConfirmation />}
                  />
                  <Route
                    path="reservationconfirmation/:reservationcode"
                    element={<ReservationConfirmations />}
                  />
                  <Route path="orderhistory" element={<OrderHistory />} />
                  <Route
                    path="tablereservationhistory"
                    element={<TableReservationHistory />}
                  />
                  <Route path="user" element={<User />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="signup" element={<SignUpForm />} />
                <Route path="login" element={<Login />} />
              </Routes>
            </BrowserRouter>

            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "mistyrose",
                  color: "brown",
                  // backgroundColor: "var(--color-grey-500)",
                  // color: "var(--color-grey-700)",
                },
              }}
            />
          </DateProvider>
        </ItemProvider>
      </DarkModeProvider>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}

export default App;
