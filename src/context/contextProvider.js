import React, { useReducer, useState, useEffect } from "react";
import Context from "./MainContext";
import { reducer } from "../reducer/reducer";
import Cookies from "universal-cookie";
import URL from "../URL";
import { useToast } from "@chakra-ui/react";

const cookies = new Cookies();

const ContextProvider = (props) => {
  const toast = useToast();
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const MainData = {
    isLoading: true,
    auth: {
      isUserLogin: false,
    },
    StoreProducts: [],
    storeProductsData: [],
    showMasterData: [],
    CustomerInformation: [],
    StoreProductsAssetes: [],
    StoreCategory: [],
    StoreBrand: [],
    MasterProducts: [],
    VendorInformation: [],
    StockInformation: [],
    StoreInformation: [],
    Store_bussiness_info: [],
    storeProductUnits: [],
    storeBrandsData: [],
    storeCategoryData: [],
    Store_bussiness_info: [],
    adminId: cookies.get("adminId"),
  };

  const reloadData = () => {
    const store_id = cookies.get("adminStoreId");

    // letsCheck(store_id, MainData.adminId);
    fetchIntialData(store_id, MainData.adminId);
  };

  const storeBrandRelode = () => {
    const store_id = cookies.get("adminStoreId");
    const adminId = MainData.adminId;
    fetch(URL + "/APP-API/Reload/StoreBrand", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ store_id, adminId }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        functionality.fetchAllData({ ...responseJson });
      })
      .catch((error) => {});

    storeProductRelode();
  };

  const storeCategoryRelode = () => {
    const store_id = cookies.get("adminStoreId");
    const adminId = MainData.adminId;
    fetch(URL + "/APP-API/Reload/StoreCategory", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ store_id, adminId }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        functionality.fetchAllData({ ...responseJson });
      })
      .catch((error) => {});

    storeProductRelode();
  };

  const storeProductRelode = () => {
    const store_id = cookies.get("adminStoreId");
    const adminId = MainData.adminId;
    fetch(URL + "/APP-API/Reload/StoreProducts", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ store_id, adminId }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        functionality.fetchAllData({ ...responseJson });
      })
      .catch((error) => {});
  };

  const storeBussinessRelode = () => {
    const store_id = cookies.get("adminStoreId");
    const adminId = MainData.adminId;
    fetch(URL + "/APP-API/Reload/Store_bussiness_info", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ store_id, adminId }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        functionality.fetchAllData({ ...responseJson });
      })
      .catch((error) => {});
  };

  const fetchIntialData = async (store_id, adminId) => {
    const urls = [
      "StoreProducts",
      "CustomerInformation",
      "StoreProductsAssetes",
      "StoreCategory",
      "StoreBrand",
      "MasterProducts",
      "VendorInformation",
      "StockInformation",
      "StoreInformation",
      "Store_bussiness_info",
    ];
    try {
      let res = await Promise.all(
        urls.map((e_url) =>
          fetch(URL + "/APP-API/Reload/" + e_url, {
            method: "POST",
            header: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
            body: JSON.stringify({ store_id, adminId }),
          })
        )
      );
      let resJson = await Promise.all(res.map((e) => e.json()));
      resJson = resJson.map((responseJson) => {
        // console.log("all data",responseJson)
        functionality.fetchAllData({ ...responseJson });
        functionality.setGloabalLoading(false);
        setAllDataLoaded(true);
      });

      console.log("true ho gaya");
    } catch (err) {
      console.log("AKT ---->", err);
    }
  };

  const functionality = {
    fetchAllData: (payload) => dispatch({ type: "FETCH_ALL_DATA", payload }),
    setUserLogin: (credentials) =>
      dispatch({ type: "USER_LOGIN", credentials }),
    addDataToCurrentGlobal: (data) => dispatch({ type: "ADD_DATA", data }),
    setGloabalLoading: (data) => dispatch({ type: "LOADING", data }),
    removeDataToCurrentGlobal: (data) =>
      dispatch({ type: "REMOVE_DATA", data }),
    updateDataToCurrentGlobal: (data, where) =>
      dispatch({ type: "UPDATE_DATA", data, where }),
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
    storeBrandRelode,
    storeCategoryRelode,
    storeProductRelode,
    storeBussinessRelode,

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
  };

  useEffect(() => {
    const store_id = cookies.get("adminStoreId");
    if (MainData.adminId) {
      fetchIntialData(store_id, MainData.adminId);
    }
  }, [MainData.adminId]);

  const [MainDataExport, dispatch] = useReducer(reducer, MainData);

  return (
    <Context.Provider
      value={{
        ...MainDataExport,
        ...functionality,
        allDataLoaded,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
