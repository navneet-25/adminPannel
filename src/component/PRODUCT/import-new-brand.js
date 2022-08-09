import { useState, useContext } from 'react';
import URL from '../../URL';
import Cookies from 'universal-cookie';
import ContextData from '../../context/MainContext';
import Multiselect from 'multiselect-react-dropdown';

const cookies = new Cookies();

export const ImportNewBrand = (props) => {

    const { masterBrandsData, storeBrandsData, getToast, reloadData } = useContext(ContextData);
    const [isLoading, setIL] = useState(false);
    const adminStoreId = cookies.get("adminStoreId");
    const adminStoreType = cookies.get("adminStoreType");
    const [showMasterData, setShowMasterData] = useState(masterBrandsData);
    const [showStoreData, setShowStoreData] = useState(storeBrandsData);

    // const [masterBrandsData, setmasterBrandsData] = useState({
    //     'store_id': adminStoreId,
    //     'brand_type': adminStoreType,
    //     'brand_name': null,
    //     'brand_feature_image': null,
    //     'date': +new Date(),
    // });



    const AddPlot = () => {

        // if (storeBrandsData.brand_name == null && storeBrandsData.brand_feature_image == null) {
        //     getToast({ title: "Brand Name & Image Requird", dec: "Requird", status: "error" });
        // }
        // else {
        //     setIL(true);
        //     const formData = new FormData();

        //     storeBrandsData.brand_feature_image && storeBrandsData.brand_feature_image.map((item, i) => {
        //         formData.append(`brand_feature_image`, item, item.name);
        //     })

        //     formData.append('store_id', storeBrandsData.store_id)
        //     formData.append('brand_type', storeBrandsData.brand_type)
        //     formData.append('brand_name', storeBrandsData.brand_name)



        //     fetch(URL + "/APP-API/Billing/addStoreBrands", {
        //         method: 'POST',
        //         header: {
        //             'Accept': 'application/json',
        //             'Content-type': 'application/json'
        //         },
        //         body: formData
        //     }).then((response) => response.json())
        //         .then((responseJson) => {
        //             console.log("respond plot upload", responseJson)
        //             if (responseJson.is_brand_alredy == 1) {

        //                 getToast({ title: "Brand Added Already", dec: "Successful", status: "success" });
        //                 reloadData();

        //             } else {
        //                 console.log("added");
        //                 // addDataToCurrentGlobal({ type: "plots", payload: storeBrandsData });
        //                 getToast({ title: "Brand Added", dec: "Successful", status: "success" });
        //                 reloadData();
        //             }
        //             setIL(false);
        //             for (let i = 0; i < 10; i++) {
        //                 document.getElementsByClassName("btn-close")[i].click();
        //             }
        //         })
        //         .catch((error) => {
        //             //  console.error(error);
        //         });
        // }


    };

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="firstNameinput" className="form-label">Select Brands</label>
                        <Multiselect
                            displayValue="key"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={function noRefCheck() { }}
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}
                            options={showMasterData}
                            showCheckbox
                        />
                    </div>
                </div>{/*end col*/}








                <div className="col-lg-12">
                    <div className="text-center mt-2">
                        {isLoading ? <a href="javascript:void(0)" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" /> Adding </a> : <button type="button" onClick={AddPlot} className="btn btn-primary">Add Brand</button>}
                    </div>
                </div>{/*end col*/}
            </div>{/*end row*/}
        </>
    )

}
