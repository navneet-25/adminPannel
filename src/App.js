import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './page/HomePage';
import MainContainer from './component/Shared/MainContainer';
import CustomerDetails from './component/Employee/CustomerDetails';
import EditCustomer from './component/Employee/EditCustomer';
import LoginPage from './page/LoginPage';
import AllLeads from './component/Leads/AllLeads';
// import ContextProvider from './context/contextProvider';
import Partner from './component/Partner/Partner';
import PartnerEdit from './component/Partner/PartnerEdit';
import { ChakraProvider } from '@chakra-ui/react';
import Roles from './component/Settings/Master/Roles';
import Sallery from './component/Employee/Sallary';
import BuyLeads from './component/Leads/BuyLeads';
import ManageLeads from './component/Leads/ManageLeads';
import AddPlots from './component/Plot/AddPlots';
import BannerSettings from './component/Settings/Website/Banner';
import TestimonialSettings from './component/Settings/Website/Testimonial/Testimonial';

import PurchaseIndex from './component/PURCHASE/purchase-index';
import VendorManagement from './component/PURCHASE/vendor-management';

import SaleIndex from './component/SALE/sale-index';
import CustomerManagement from './component/SALE/customer-management';


import PurchaseHistory from './component/PURCHASE/purchase-history';
import PurchaseHistoryRecord from './component/PURCHASE/purchase-history-record';


import ProductIndex from './component/PRODUCT/product-index';
import ProductManagement from './component/PRODUCT/product-management';
import ProductByCategory from './component/PRODUCT/product-by-category';
import ProductByParentCategory from './component/PRODUCT/product-by-parent-category';
import ProductByBrand from './component/PRODUCT/product-by-brand';

import CategoryManagement from './component/PRODUCT/category-management';
import BrandManagement from './component/PRODUCT/brand-management';
import Stocks from './component/STOCK/Stocks';
import { Purchased } from './component/BILLING/Purchased';
import { Sale } from './component/BILLING/Sale';
import LowStock from './component/STOCK/low-stocks';
import StocksHistory from './component/STOCK/product-stocks-history';
import { useContext } from 'react';
import ContextData from './context/MainContext';



const App = () => {

  const { isLoading } = useContext(ContextData);

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
        <h4>
          Loading... Please Wait...!!
        </h4>
      </div>
    )
  }

  return (
    <ChakraProvider resetCSS={false}>
      <BrowserRouter>
        {/* <ContextProvider> */}
        <MainContainer>
          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/purchaseManagement" >
              <Route index element={<PurchaseIndex />} />
              <Route path="purchase" element={<VendorManagement />} />
              <Route path="vendor" element={<VendorManagement />} />
              <Route path="purchase-history" element={<PurchaseHistory />} />
              <Route path="/purchaseManagement/purchase-history-record/:orderID/:vendorID" element={<PurchaseHistoryRecord />} />
            </Route>

            <Route path="/salesManagement" >
              <Route index element={<SaleIndex />} />
              <Route path="customers" element={<CustomerManagement />} />
            </Route>

            <Route path="/billing" >
              <Route index element={<h4>BILLING</h4>} />
              <Route path="purchased" element={<Purchased />} />
              <Route path="sale" element={<Sale />} />

            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product-stocks" element={<Stocks />} />
            <Route path="/low-stocks" element={<LowStock />} />
            <Route path="/product-stocks-history" element={<StocksHistory />} />

            <Route path="/productManagement" >
              <Route index element={<ProductIndex />} />
              <Route path="product" element={<ProductManagement />} />
              <Route path="/productManagement/product-by-brand/:brandID/:brandName" element={<ProductByBrand />} />
              <Route path="/productManagement/product-by-category/:subcatID/:subcatName" element={<ProductByCategory />} />
              <Route path="/productManagement/product-by-parent-category/:subcatID/:subcatName" element={<ProductByParentCategory />} />
              <Route path="category" element={<CategoryManagement />} />
              <Route path="brand" element={<BrandManagement />} />
            </Route>


          </Routes>
        </MainContainer>
        {/* </ContextProvider> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

