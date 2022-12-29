
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Registration'
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import AdminLogin from './Admin/Login';
import SingUp from './Admin/SingUp';
import AdminLogout from './Admin/Logout';
import AdminHome from './Admin/Home'
import Upload from './Admin/Product/upload';
// import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Order from './components/Order';
import View from './Admin/Product/view';
import ProductOrder from './Admin/ProductOrder';
import React from 'react'
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Routes>

        {/* /////////////////// User Route ///////////////////// */}


        <Route path="/Footer" element={<Footer />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Checkout" element={<Checkout />} />

        <Route path="/contact" element={<ContactUs />} />

        {/* /////////////////// Admin Route ///////////////////// */}

        <Route path="/admin/signup" element={<SingUp />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/Logout" element={<AdminLogout />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/upload" element={<Upload />} />
        <Route path="/admin/products" element={<View />} />
        <Route path="/admin/Order" element={<ProductOrder />} />
        {/* <Route path="/ProductDetails/:id" element={<ProductDetails />} /> */}

      </Routes>

    </>
  );
}

export default App;