import React, { useReducer, useState, useEffect } from "react";
import Context from "./MainContext";
import { reducer } from '../reducer/reducer';
import Cookies from 'universal-cookie';
import URL from "../URL";
import { useToast } from '@chakra-ui/react'


const cookies = new Cookies();

const ContextProvider = props => {


    // const navigate = useNavigate();

    // const [isLoading, setLoading] = useState(true);
    const toast = useToast();
    const MainData = {
        isLoading: true,
        auth: {
            isUserLogin: false
        },
        user: {
            user_info: {
                name: "",
                email: "",
                phone: "",
                address: "",
                provider_pic: ""
            },
        },
    };

    const reloadData = () => {
        const store_id = cookies.get("userBussiness_id");
        return fetchData(store_id);
    }

    const functionality = {
        fetchAllData: payload => dispatch({ type: "FETCH_ALL_DATA", payload }),
        setUserLogin: credentials => dispatch({ type: "USER_LOGIN", credentials }),
        addDataToCurrentGlobal: data => dispatch({ type: "ADD_DATA", data }),
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

    const testingAPI = (adminId) => {
        fetch("http://localhost:8000/product", {
            method: 'GET',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'

            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("Loacal Data ---->", responseJson)
                // functionality.fetchAllData(responseJson);

            })
            .catch((error) => {
                console.error(error);
            });
    };

    const getUserDetails = (adminId) => {
        functionality.setUserLogin();
        fetch(URL + "/APP-API/App/GetUserInfo", {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'

            },
            body: JSON.stringify({
                adminId
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                functionality.setUserLogin(responseJson);
                // functionality.fetchAllData(responseJson);

            })
            .catch((error) => {
                console.error(error);
            });
    };


    useEffect(() => {
        // let userCookie = btoa("userID");
        // lets see...
        const adminId = cookies.get("adminId");
        const store_id = cookies.get("adminStoreId");
        if (adminId && MainData.user.user_info.name == "") {
            getUserDetails(adminId);
            fetchData(store_id, adminId);
            testingAPI();
        }
    }, [MainData.user.user_info.name]);



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