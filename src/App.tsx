import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Prescriptions from "./pages/Prescriptions";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports";
import Tracker from "./pages/Tracker";
import Reminders from "./pages/Reminders";
import Hospitals from "./pages/Hospitals";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="prescriptions" element={<Prescriptions />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="reports" element={<Reports />} />
            <Route path="tracker" element={<Tracker />} />
            <Route path="reminders" element={<Reminders />} />
            <Route path="hospitals" element={<Hospitals />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
