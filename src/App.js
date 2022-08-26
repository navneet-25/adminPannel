import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './page/HomePage';
import MainContainer from './component/Shared/MainContainer';
import CustomerDetails from './component/Employee/CustomerDetails';
import EditCustomer from './component/Employee/EditCustomer';
import LoginPage from './page/LoginPage';
import AllLeads from './component/Leads/AllLeads';
import ContextProvider from './context/contextProvider';
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


import ProductIndex from './component/PRODUCT/product-index';
import ProductManagement from './component/PRODUCT/product-management';
import CategoryManagement from './component/PRODUCT/category-management';
import BrandManagement from './component/PRODUCT/brand-management';
import Stocks from './component/STOCK/Stocks';
import { Purchased } from './component/BILLING/Purchased';



const App = () => {

  return (
    <ChakraProvider resetCSS={false}>
      <BrowserRouter>
        <ContextProvider>
          <MainContainer>
            <Routes>

              <Route path="/" element={<HomePage />} />

              <Route path="/purchaseManagement" >
                <Route index element={<PurchaseIndex />} />
                <Route path="purchase" element={<VendorManagement />} />
                <Route path="vendor" element={<VendorManagement />} />
                <Route path="purchase-history" element={<BrandManagement />} />
              </Route>

              <Route path="/productManagement" >
                <Route index element={<ProductIndex />} />
                <Route path="product" element={<ProductManagement />} />
                <Route path="category" element={<CategoryManagement />} />
                <Route path="brand" element={<BrandManagement />} />
              </Route>
              <Route path="/billing" >
                <Route index element={<h4>BILLING</h4>} />
                <Route path="purchased" element={<Purchased />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/stocks" element={<Stocks />} />
              {/* 
              <Route path="/customers" element={<CustomerDetails />} />
              <Route path="/customers/sallary" element={<Sallery />} />
              <Route path="/customers/edit" element={<EditCustomer />} />
              <Route path="/settings/role" element={<Roles />} />
              <Route path="/settings/banners" element={<BannerSettings />} />
              <Route path="/settings/testimonial" element={<TestimonialSettings />} />
              <Route path="/company" element={<Partner />} />
              <Route path="/company/edit" element={<PartnerEdit />} />
              <Route path="/allLeads" element={<AllLeads />} />
              <Route path="/buyleads" element={<BuyLeads />} />
              <Route path="/magangeLeads" element={<ManageLeads />} />
              <Route path="/plot" element={<AddPlots />} />
  */}

            </Routes>
          </MainContainer>
        </ContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
