import { Routes, Route, Navigate } from "react-router-dom"
import { ROUTE } from "./router"

import Layout from "@/layout/Layout"
import Login from "@/pages/Login"
import Dashboard from "@/pages/Dashboard"
import Restaurants from "@/pages/Restaurants"
import Analytics from "@/pages/Analytics"
import Settings from "@/pages/Settings"
import Subscription from "@/pages/Subscription"
import NotFoundPage from "@/components/others/Error404"
import RestaurantDetails from "@/pages/RestaurantDetails"

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route element={<Layout />}>
        <Route path={ROUTE.DEFAULT} element={<Navigate to={ROUTE.LOGIN} replace />} />
        <Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTE.RESTAURANTS} element={<Restaurants />} />
        <Route path={ROUTE.RESTAURANT_DETAILS} element={<RestaurantDetails />} />
        <Route path={ROUTE.ANALYTICS} element={<Analytics />} />
        <Route path={ROUTE.SETTINGS} element={<Settings />} />
        <Route path={ROUTE.SUBSCRIPTION} element={<Subscription />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
};