import React, { useReducer, useState, useEffect } from "react";
import Context from "./MainContext";
import { reducer } from '../reducer/reducer';
import Cookies from 'universal-cookie';
import URL from "../URL";
import { useToast } from '@chakra-ui/react'


const cookies = new Cookies();

const ContextProvider = props => {


    const toast = useToast();
    const MainData = {
        isLoading: true,
        auth: {
            isUserLogin: false
        },
        adminId: cookies.get("adminId")
    };

    const reloadData = () => {
        const store_id = cookies.get("adminStoreId");
        const adminId = cookies.get("adminId");

        reloadStoreProducts(store_id, adminId);
        reloadMasterProducts(store_id, adminId);
        reloadVendorInformation(store_id, adminId);
        reloadCustomerInformation(store_id, adminId);
        reloadStoreInformation(store_id, adminId);
        reloadStockInformation(store_id, adminId);


    }

    const functionality = {
        fetchAllData: payload => dispatch({ type: "FETCH_ALL_DATA", payload }),
        setUserLogin: credentials => dispatch({ type: "USER_LOGIN", credentials }),
        addDataToCurrentGlobal: data => dispatch({ type: "ADD_DATA", data }),
        setGloabalLoading: data => dispatch({ type: "LOADING", data }),
        removeDataToCurrentGlobal: data => dispatch({ type: "REMOVE_DATA", data }),
        updateDataToCurrentGlobal: (data, where) => dispatch({ type: "UPDATE_DATA", data, where }),
        logOut: () => {
            cookies.remove("isUserLogin");
            cookies.remove("adminId");
            cookies.remove("adminPartnerId");
            cookies.remove("adminEmail");
            cookies.remove("adminMobile");
            cookies.remove("adminRoal");
            cookies.remove("adminStoreId");
            cookies.remove("adminStoreType");
            dispatch({ type: "LOGOUT" });
        },
        reloadData,
        getToast: (e) => {
            toast({
                title: e.title,
                description: e.desc,
                status: e.status,
                duration: 3000,
                isClosable: true,
                position: "bottom-right",
            });
        },

    }


    const fetchData = (store_id, adminId) => {

        fetch(URL + "/APP-API/Billing/fetchData", {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                store_id,
                adminId
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("pro", responseJson);
                functionality.fetchAllData({
                    // employes: responseJson.employes,
                    // partner: responseJson.partner[0],
                    // sallaryList: responseJson.sallaryData,
                    // salaryHistory: responseJson.salaryHistory,
                    // roles: responseJson.roles,
                    // leadsPricing: responseJson.leadsPricing,
                    // business_banners: responseJson.business_banners,
                    // plots: responseJson.plots,
                    // reviews: responseJson.reviews,

                    // storeBrandsData: responseJson.storeBrandsData,
                    // storeCategoryData: responseJson.storeCategoryData,
                    // storeProductsData: responseJson.storeProductsData,
                    // storeProductUnits: responseJson.storeProductUnits,
                    // storeProductImages: responseJson.storeProductImages,
                    // store_vendor_list: responseJson.store_vendor_list,
                    // store_stock_history: responseJson.store_stock_history,
                    // store_activity_history: responseJson.store_activity_history,
                    // store_employee_list: responseJson.store_employee_list,
                    // masterBrandsData: responseJson.masterBrandsData,
                    // masterCategoryData: responseJson.masterCategoryData,
                    // masterProductsData: responseJson.masterProductsData,
                    // masterProductUnits: responseJson.masterProductUnits,
                    ...responseJson
                });
                return true;
                // fetchAllData(responseJson);
            })
            .catch((error) => {
                //  console.error(error);
            });
    };

    const reloadStoreProducts = (store_id, adminId) => {
        return new Promise((resolve, reject) => {

            fetch(URL + "/APP-API/Reload/reloadStoreProducts", {
                method: 'POST',
                header: { 'Accept': 'application/json', 'Content-type': 'application/json' },
                body: JSON.stringify({ store_id, adminId })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("reloadStoreProducts", responseJson);
                    functionality.fetchAllData({ ...responseJson });
                    resolve(true);
                    // return true;
                    // fetchAllData(responseJson);
                }).catch((error) => { console.error(error); });
        });
    };

    const reloadMasterProducts = (store_id, adminId) => {
        return new Promise((resolve, reject) => {

            fetch(URL + "/APP-API/Reload/reloadMasterProducts", {
                method: 'POST',
                header: { 'Accept': 'application/json', 'Content-type': 'application/json' },
                body: JSON.stringify({ store_id, adminId })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("reloadMasterProducts", responseJson);
                    functionality.fetchAllData({ ...responseJson });
                    resolve(true);
                    // return true;
                    // fetchAllData(responseJson);
                }).catch((error) => { console.error(error); });
        });
    };
    const reloadVendorInformation = (store_id, adminId) => {
        return new Promise((resolve, reject) => {

            fetch(URL + "/APP-API/Reload/reloadVendorInformation", {
                method: 'POST',
                header: { 'Accept': 'application/json', 'Content-type': 'application/json' },
                body: JSON.stringify({ store_id, adminId })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("reloadVendorInformation", responseJson);
                    functionality.fetchAllData({ ...responseJson });
                    resolve(true);
                    // return true;
                    // fetchAllData(responseJson);
                }).catch((error) => { console.error(error); });
        });
    };

    const reloadCustomerInformation = (store_id, adminId) => {
        return new Promise((resolve, reject) => {

            fetch(URL + "/APP-API/Reload/reloadCustomerInformation", {
                method: 'POST',
                header: { 'Accept': 'application/json', 'Content-type': 'application/json' },
                body: JSON.stringify({ store_id, adminId })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("reloadCustomerInformation", responseJson);
                    functionality.fetchAllData({ ...responseJson });
                    resolve(true);
                    // return true;
                    // fetchAllData(responseJson);
                }).catch((error) => { console.error(error); });
        });
    };
    const reloadStoreInformation = (store_id, adminId) => {
        return new Promise((resolve, reject) => {

            fetch(URL + "/APP-API/Reload/reloadStoreInformation", {
                method: 'POST',
                header: { 'Accept': 'application/json', 'Content-type': 'application/json' },
                body: JSON.stringify({ store_id, adminId })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("reloadStoreInformation", responseJson);
                    functionality.fetchAllData({ ...responseJson });
                    resolve(true);
                    // return true;
                    // fetchAllData(responseJson);
                }).catch((error) => { console.error(error); });
        });
    };

    const reloadStockInformation = (store_id, adminId) => {
        return new Promise((resolve, reject) => {

            fetch(URL + "/APP-API/Reload/reloadStockInformation", {
                method: 'POST',
                header: { 'Accept': 'application/json', 'Content-type': 'application/json' },
                body: JSON.stringify({ store_id, adminId })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("reloadStockInformation", responseJson);
                    functionality.fetchAllData({ ...responseJson });
                    resolve(true);
                    // return true;
                    // fetchAllData(responseJson);
                }).catch((error) => { console.error(error); });
        });
    };

    const letsCheck = async (store_id, adminId) => {
        const data1 = await reloadStoreProducts(store_id, adminId);
        const data2 = await reloadMasterProducts(store_id, adminId);
        const data3 = await reloadVendorInformation(store_id, adminId);
        const data4 = await reloadCustomerInformation(store_id, adminId);
        const data5 = await reloadStoreInformation(store_id, adminId);
        const data6 = await reloadStockInformation(store_id, adminId);
        data1 && data2 && data3 && data4 && data5 && data6 && functionality.setGloabalLoading(false);
    }


    useEffect(() => {
        // let userCookie = btoa("userID");
        // lets see...
        const store_id = cookies.get("adminStoreId");
        if (MainData.adminId) {
            // getUserDetails(adminId);
            // fetchData(store_id, adminId)
            letsCheck(store_id, MainData.adminId);
        }
    }, [MainData.adminId]);



    const [MainDataExport, dispatch] = useReducer(reducer, MainData);

    return (
        <Context.Provider value={{
            ...MainDataExport,
            ...functionality
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;