import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import {LoginPage, SignUpPage} from "./Routes.js";
import SupplierSignUp from './components/SupplierSignUp.jsx';
import DeliveryDash from './pages/deliveryCompany/DeliveryDash';
import OrderView from './pages/deliveryCompany/OrderView';
import Order from './pages/deliveryCompany/Order';
import Subscription from './pages/deliveryCompany/Subscription';
import SubscriptionActive from './pages/deliveryCompany/SubscriptionActive';
import CollectorDash from './pages/CollectingCenter/CollectorDash';
import CollectorStore from './pages/CollectingCenter/CollectorStore';
import BuyerDash from './pages/Buyer/BuyerDash';
import BOrders from './pages/Buyer/BOrders';
import BCollectingcenter from './pages/Buyer/BCollectingcenter';
import BDelivery from './pages/Buyer/BDelivery';
import AdminDash from './pages/admin/AdminDash';
import Users from './pages/admin/Users';
import ViewUser from './pages/admin/ViewUser';
import Contact from './pages/admin/Contact';
import Centers from './pages/admin/Centers';
import Profile from './pages/admin/Profile';
import SupplierDash from './pages/supplier/SupplierDash.jsx';
import Requests from './pages/supplier/Requests.jsx';
import SupplierStore from './pages/supplier/SupplierStore.jsx'
import Advertisements from './pages/supplier/Advertisements.jsx';
import SupplierContact from './pages/supplier/SupplierContact.jsx'
import SupplierProfile from './pages/supplier/SupplierProfile.jsx'
import Homepage from './components/Homepage/Homepage.jsx';
import SupplierContact from './pages/supplier/SupplierContact.jsx';
import SupplierProfile from './pages/supplier/SupplierProfile.jsx';
import CustomToastContainer from './components/CustomToastContainer';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    })
})

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Homepage />}/>
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/sign-up" element={<SignUpPage /> } />
        <Route path="/supplier-sign-up" element={<SupplierSignUp />} />
        <Route path="/Delivery/Dashboard" element={<DeliveryDash />} />
        <Route path="/Delivery/OrderView" element={<OrderView />} />
        <Route path="/Delivery/Order" element={<Order />} />
        <Route path="/Delivery/Subscription" element={<Subscription />} />
        <Route path="/Delivery/SubscriptionActive" element={<SubscriptionActive />} />
        <Route path="/Admin/Dashboard" element={<AdminDash />} />
        <Route path="/Admin/Users" element={<Users />} />
        <Route path="/Admin/ViewUser" element={<ViewUser/>}/>
        <Route path="/Admin/Contact" element={<Contact/>}/>
        <Route path="/Admin/Centers" element={<Centers/>}/>
        <Route path="/CollectorDash" element={<CollectorDash/>}/>
        <Route path="/CollectorStore" element={<CollectorStore/>}/>
        <Route path="/BuyerDash" element={<BuyerDash/>}/>
        <Route path="/BOrders" element={<BOrders/>}/>
        <Route path="/BCollectingcenter" element={<BCollectingcenter/>}/>
        <Route path="/BDelivery" element={<BDelivery/>}/>
        <Route path="/supplier/Dashboard" element={<SupplierDash/>}/>
        <Route path="/supplier/Requests" element={<Requests/>}/>
        <Route path="/supplier/SupplierStore" element={<SupplierStore/>}/>
        <Route path="/supplier/Advertisements" element={<Advertisements/>}/>
        <Route path="/supplier/SupplierContact" element={<SupplierContact/>}/>
        <Route path="/supplier/SupplierProfile" element={<SupplierProfile/>}/>
        <Route path="/SupplierDash" element={<SupplierDash/>}/>
        <Route path="/Requests" element={<Requests/>}/>
        <Route path="/Admin/Profile" element={<Profile/>}/>
        <Route path="/activation/:activation_token" element={<ActivationPage /> } />
        <CustomToastContainer />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
