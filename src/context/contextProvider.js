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
        const bussnessID = cookies.get("userBussiness_id");
        return fetchData(bussnessID);
    }

    const functionality = {
        fetchAllData: payload => dispatch({ type: "FETCH_ALL_DATA", payload }),
        setUserLogin: credentials => dispatch({ type: "USER_LOGIN", credentials }),
        addDataToCurrentGlobal: data => dispatch({ type: "ADD_DATA", data }),
        removeDataToCurrentGlobal: data => dispatch({ type: "REMOVE_DATA", data }),
        updateDataToCurrentGlobal: (data, where) => dispatch({ type: "UPDATE_DATA", data, where }),
        logOut: () => {
            cookies.remove("isUserLogin");
            cookies.remove("userID");
            cookies.remove("userBussiness_id");
            cookies.remove("userName");
            cookies.remove("userMobile");
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


    const fetchData = (bussiness_id) => {

        fetch(URL + "/APP-API/App/fetchData", {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                bussiness_id
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("pro", responseJson);
                functionality.fetchAllData({
                    employes: responseJson.employes,
                    partner: responseJson.partner[0],
                    sallaryList: responseJson.sallaryData,
                    salaryHistory: responseJson.salaryHistory,
                    roles: responseJson.roles,
                    leadsPricing: responseJson.leadsPricing,
                    business_banners: responseJson.business_banners,
                    plots: responseJson.plots,
                    reviews: responseJson.reviews,
                });
                return true;
                // fetchAllData(responseJson);
            })
            .catch((error) => {
                //  console.error(error);
            });
    };

    const getUserDetails = (userID) => {
        functionality.setUserLogin();
        fetch(URL + "/APP-API/App/GetUserInfo", {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'

            },
            body: JSON.stringify({
                userID
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                functionality.setUserLogin(responseJson);
                // functionality.fetchAllData(responseJson);

            })
            .catch((error) => {
                //  console.error(error);
            });
    };


    useEffect(() => {
        // let userCookie = btoa("userID");
        // lets see...
        const userID = cookies.get("userID");
        const bussnessID = cookies.get("userBussiness_id");
        if (userID && MainData.user.user_info.name == "") {
            getUserDetails(userID);
            fetchData(bussnessID);
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