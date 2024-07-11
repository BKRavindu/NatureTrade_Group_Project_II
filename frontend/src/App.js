import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage, SignUpPage} from "./Routes.js";
import SupplierSignUp from './components/SupplierSignUp.jsx';
import DeliveryDash from './pages/deliveryCompany/DeliveryDash';
import OrderView from './pages/deliveryCompany/OrderView';
import Order from './pages/deliveryCompany/Order';
import CollectorDash from './pages/CollectingCenter/CollectorDash';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/sign-up" element={<SignUpPage /> } />
        <Route path="/supplier-sign-up" element={<SupplierSignUp />} />
        <Route path="/DeliveryDash" element={<DeliveryDash />} />
        <Route path="/OrderView" element={<OrderView />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/CollectorDash" element={<CollectorDash/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
