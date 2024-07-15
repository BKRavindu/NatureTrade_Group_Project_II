import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage, SignUpPage} from "./Routes.js";
import SupplierSignUp from './components/SupplierSignUp.jsx';
import DeliveryDash from './pages/deliveryCompany/DeliveryDash';
import OrderView from './pages/deliveryCompany/OrderView';
import Order from './pages/deliveryCompany/Order';
import CollectorDash from './pages/CollectingCenter/CollectorDash';
import BuyerDash from './pages/Buyer/BuyerDash';
import BOrders from './pages/Buyer/BOrders';
import BCollectingcenter from './pages/Buyer/BCollectingcenter';
import BDelivery from './pages/Buyer/BDelivery';


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
        <Route path="/BuyerDash" element={<BuyerDash/>}/>
        <Route path="/BOrders" element={<BOrders/>}/>
        <Route path="/BCollectingcenter" element={<BCollectingcenter/>}/>
        <Route path="/BDelivery" element={<BDelivery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
