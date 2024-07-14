import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage, SignUpPage} from "./Routes.js";
import SupplierSignUp from './components/SupplierSignUp.jsx';
import DeliveryDash from './pages/deliveryCompany/DeliveryDash';
import OrderView from './pages/deliveryCompany/OrderView';
import Order from './pages/deliveryCompany/Order';
import Subscription from './pages/deliveryCompany/Subscription';
import SubscriptionActive from './pages/deliveryCompany/SubscriptionActive';
import CollectorDash from './pages/CollectingCenter/CollectorDash';
<<<<<<< HEAD
import SupplierDash from './pages/supplier/SupplierDash.jsx';
import Requests from './pages/supplier/Requests.jsx';
import Store from './pages/supplier/Store.jsx'
=======
import CollectorStore from './pages/CollectingCenter/CollectorStore';



>>>>>>> f9259001e7234badcb05d714989824a74ea45dbf



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
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/SubscriptionActive" element={<SubscriptionActive />} />
        <Route path="/CollectorDash" element={<CollectorDash/>}/>
<<<<<<< HEAD
        <Route path="/SupplierDash" element={<SupplierDash/>}/>
        <Route path="/Requests" element={<Requests/>}/>
        <Route path="/Store" element={<Store/>}/>
      
=======

>>>>>>> f9259001e7234badcb05d714989824a74ea45dbf
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
