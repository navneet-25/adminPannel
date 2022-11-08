import { useState, useContext } from 'react';
import URL from '../../../URL';
import Cookies from 'universal-cookie';
import ContextData from '../../../context/MainContext';
import { useToast } from '@chakra-ui/react';

const cookies = new Cookies();

export const AddBannerForm = (props) => {

    const {  storeBussinessRelode } = useContext(ContextData);
    const [isLoading, setIL] = useState(false);
    const adminStoreId = cookies.get("adminStoreId");
    const adminId = cookies.get("adminId");

    const toast = useToast();

    const getToast = (e) => {
        toast({
            title: e.title,
            description: e.desc,
            status: e.status,
            duration: 3000,
            isClosable: true,
            position: "bottom-right"
        })
    }


    const [storeBannerData, setstoreBannerData] = useState({
        'store_id': adminStoreId,
        'image': null,

    });



    const AddPlot = () => { 

        if (storeBannerData.image == null) {
            getToast({ title: "Banner Image Requird", dec: "Requird", status: "error" });
        }
        else {
            setIL(true);
            const formData = new FormData();

            storeBannerData.image && storeBannerData.image.map((item, i) => {
                formData.append(`image`, item, item.name);
            })

            formData.append('store_id', storeBannerData.store_id)

            fetch(URL + "/APP-API/Billing/addStoreBanners", {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: formData
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("respond plot upload", responseJson)
                    if (responseJson.success) {

                        getToast({ title: "Banner Added ", dec: "Successful", status: "success" });
                        storeBussinessRelode();

                    } else {
                        console.log("added");
                        // addDataToCurrentGlobal({ type: "plots", payload: storeBannerData });
                        getToast({ title: "Faild", dec: "", status: "error" });
                        storeBussinessRelode();
                    }
                    setIL(false);
                    for (let i = 0; i < 10; i++) {
                        document.getElementsByClassName("btn-close")[i].click();
                    }
                })
                .catch((error) => {
                    //  console.error(error);
                });
        }


    };

    return (
        <>
            <div className="row">
              



                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">Banner Image (Size -Width 1000 px * Height 250 px)</label>
                        <input multiple type="file" onChange={e => setstoreBannerData({ ...storeBannerData, image: [...e.target.files] })} className="form-control" id="address1ControlTextarea" />
                    </div>
                </div>{/*end col*/}



                <div className="col-lg-12">
                    <div className="text-center mt-2">
                        {isLoading ? <a href="javascript:void(0)" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" /> Adding </a> : <button type="button" onClick={AddPlot} className="btn btn-primary">Add Banner</button>}
                    </div>
                </div>{/*end col*/}
            </div>{/*end row*/}
        </>
    )

}
