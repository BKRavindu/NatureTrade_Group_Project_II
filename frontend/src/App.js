import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignUpPage } from "./Routes.js";
import SupplierSignUp from './components/SupplierSignUp.jsx';
import DeliveryDash from './pages/deliveryCompany/DeliveryDash';
import OrderView from './pages/deliveryCompany/OrderView';
import Order from './pages/deliveryCompany/Order';
import ViewChat from './pages/admin/ViewChat.jsx';
import AdminDash from './pages/admin/AdminDash.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/supplier-sign-up" element={<SupplierSignUp />} />
        <Route path="/DeliveryDash" element={<DeliveryDash />} />
        <Route path="/OrderView" element={<OrderView />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/ViewChat" element={<ViewChat />} />
        <Route path="/AdminDash" element={<AdminDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
