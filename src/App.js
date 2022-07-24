
import React from 'react';

import Login from './Components/Login';
import Dashboard from './Components/Admin/Dashboard';
import Settings from './Components/Settings';
import ProtectedRoutes from './ProtectedRoute';
import ProtectedRoutesUser from './ProtectedRoutesUser';
import InnerContent from './InnerContent';
import InnerContentUser from './InnerContentUser';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLogin from './Components/Admin/AdminLogin';
import Setting from './Components/Settings';
import About from './Components/User/About';
import AdminCategoryList from './Components/Admin/Modules/Category/List';
import Home from './Components/User/Home';
import CategoryList from './Components/Admin/Modules/Category/List';
import CategoryCreate from './Components/Admin/Modules/Category/create';
import ProductList from './Components/Admin/Modules/product/ProductList';
import ProductCreate from './Components/Admin/Modules/product/ProductCreate';
import ProductDetail from './Components/User/Product/ProductDetail';
import CartList from './Components/User/Cart/List';
import CheckoutCreate from './Components/User/Checkout/create';
import OrderList from './Components/Admin/Modules/Order/List';
import OrderShow from './Components/Admin/Modules/Order/Show';



const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>

          {/* no protected route */}

          <Route path="/" element={<InnerContentUser />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* login admin and user */}
            <Route path="/login" element={<Login />} />
            {/* product */}
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />


          {/** admin Routes */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<InnerContent />}>
              <Route path="/" element={<Navigate replace to="admin/dashboard" />} />
              <Route path="admin/dashboard" element={<Dashboard />} />
              {/* category start */}
              <Route path="admin/category" element={<CategoryList />} />
              <Route path="admin/category/create" element={<CategoryCreate />} />
              {/* category end  */}
              {/* product start */}
              <Route path="admin/product" element={<ProductList />} />
              <Route path="admin/product/create" element={<ProductCreate />} />
              {/* produt end  */}
              
              <Route path="admin/settings" element={<Settings />} />

              {/* category list */}
              <Route path="/admin/category" element={<AdminCategoryList />} />

              {/* order list */}
              <Route path="/admin/order" element={<OrderList />} />
              <Route path="/admin/order/show/:id" element={<OrderShow />} />

            </Route>
          </Route>




          {/** Public Routes */}
          <Route path="/" element={<ProtectedRoutesUser />}>
            <Route path="/" element={<InnerContentUser />}>
              <Route path="/" element={<Navigate replace to="user/dashboard" />} />
              <Route path="/user/dashboard" element={<Dashboard />} />
              <Route path="/user/settings" element={<Settings />} />

              {/* carts */}
              <Route path="/user/carts" element={<CartList />} />
              {/* checkout */}
              <Route path="/user/checkout" element={<CheckoutCreate />} />
            </Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App