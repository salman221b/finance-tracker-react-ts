import {
  Routes,
  Route,
} from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";

import TransactionsPage from "../pages/TransactionsPage";

import AnalyticsPage from "../pages/AnalyticsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<DashboardPage />}
      />

      <Route
        path="/transactions"
        element={
          <TransactionsPage />
        }
      />

      <Route
        path="/analytics"
        element={
          <AnalyticsPage />
        }
      />
    </Routes>
  );
};

export default AppRoutes;