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
import CollectorStore from './pages/CollectingCenter/CollectorStore';
import CollectorSuppliers from './pages/CollectingCenter/CollectorSuppliers';
import CollectorRequests from './pages/CollectingCenter/CollectorRequests';
import CollectorBidding from './pages/CollectingCenter/CollectorBidding';
import CollectorProfile from './pages/CollectingCenter/CollectorProfile';
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
import SupplierStore from './pages/supplier/SupplierStore.jsx';
import Advertisments from './pages/supplier/Advertisments.jsx';
import SupplierContact from './pages/supplier/SupplierContact.jsx';
import SupplierProfile from './pages/supplier/SupplierProfile.jsx';
import ActivationPage from './pages/ActivationPage.js'



function App() {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="/Collector/CollectorDash" element={<CollectorDash/>}/>
        <Route path="/Collector/CollectorStore" element={<CollectorStore/>}/>
        <Route path="/Collector/CollectorSuppliers" element={<CollectorSuppliers/>}/>
        <Route path="/Collector/CollectorRequests" element={<CollectorRequests/>}/>
        <Route path="/Collector/CollectorBidding" element={<CollectorBidding/>}/>
        <Route path="/Collector/CollectorProfile" element={<CollectorProfile/>}/>
        <Route path="/BuyerDash" element={<BuyerDash/>}/>
        <Route path="/BOrders" element={<BOrders/>}/>
        <Route path="/BCollectingcenter" element={<BCollectingcenter/>}/>
        <Route path="/BDelivery" element={<BDelivery/>}/>
        <Route path="/supplier/Dashboard" element={<SupplierDash/>}/>
        <Route path="/supplier/Requests" element={<Requests/>}/>
        <Route path="/supplier/SupplierStore" element={<SupplierStore/>}/>
        <Route path="/supplier/Advertisments" element={<Advertisments/>}/>
        <Route path="/supplier/SupplierContact" element={<SupplierContact/>}/>
        <Route path="/supplier/SupplierProfile" element={<SupplierProfile/>}/>
        <Route path="/SupplierDash" element={<SupplierDash/>}/>
        <Route path="/Requests" element={<Requests/>}/>
        {/* <Route path="/Store" element={<Store/>}/> */}
        <Route path="/Admin/Profile" element={<Profile/>}/>
        <Route path="/activation/:activation_token" element={<ActivationPage /> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
