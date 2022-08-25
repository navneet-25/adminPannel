import { useState, useContext, useRef, useEffect } from 'react';
import URL from '../../../URL';
import Cookies from 'universal-cookie';
import ContextData from '../../../context/MainContext'; 

const cookies = new Cookies();

export const AddVendorForm = (props) => {

    const { getToast, reloadData } = useContext(ContextData);
    const [isLoading, setIL] = useState(false);

    const adminStoreId = cookies.get("adminStoreId");
    const adminId = cookies.get("adminId");

    const [vendorDetails, setvendorDetails] = useState({
        'store_id': adminStoreId,
        name:'',
        mobile:'',
        firm_name:'',
        address:'',


    });


    useEffect(() => {

    
      

    }, []);



    const AddVendorAction = () => {

     

        if (vendorDetails.name == '') {
            getToast({ title: "Vendor Name Requird", dec: "Requird", status: "error" });
        }
       
        else if (vendorDetails.mobile == '') {
            getToast({ title: "Vendor Mobile Requird", dec: "Requird", status: "error" });
        }
        else if (vendorDetails.address == '') {
            getToast({ title: "Vendor Address Requird", dec: "Requird", status: "error" });
        }
       
        else {


            setIL(true);
          
            const formData = new FormData();

            formData.append('store_id', vendorDetails.store_id)
            formData.append('adminId', adminId)
            formData.append('name', vendorDetails.name)
            formData.append('mobile', vendorDetails.mobile)
            formData.append('address', vendorDetails.address)
            formData.append('firm_name', vendorDetails.firm_name)



            fetch(URL + "/APP-API/Billing/addStoreVendor", {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: formData
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("respond vendor upload", responseJson)
                    if (responseJson.is_vendor_alredy == 1) {

                        getToast({ title: "Vendor Added Already", dec: "Successful", status: "success" });
                        reloadData();
 
                    } else {
                        console.log("added");
                        // addDataToCurrentGlobal({ type: "plots", payload: storeBrandsData });
                        getToast({ title: "Vendor Added ", dec: "Successful", status: "success" });
                        reloadData();
                    }
                    setIL(false);
                    setvendorDetails([] )
                

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
                        <label htmlFor="compnayNameinput" className="form-label text-danger">Vendor Name</label>
                        <input type="text" onChange={e => setvendorDetails({ ...vendorDetails, name: e.target.value })}
                            value={vendorDetails.name} className="form-control" placeholder="Vendor Name" id="compnayNameinput" />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label text-danger">Vendor Mobile</label>
                        <input type="text" onChange={e => setvendorDetails({ ...vendorDetails, mobile: e.target.value })}
                            value={vendorDetails.mobile} className="form-control" placeholder="Vendor Mobile" id="compnayNameinput" />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label ">Firm Name</label>
                        <input type="text" onChange={e => setvendorDetails({ ...vendorDetails, firm_name: e.target.value })}
                            value={vendorDetails.firm_name} className="form-control" placeholder="Firm Name" id="compnayNameinput" />
                    </div>
                </div>


                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label text-danger ">Address</label>
                        <textarea onChange={e => setvendorDetails({ ...vendorDetails, address: e.target.value })} value={vendorDetails.address} class="form-control" id="exampleFormControlTextarea5" rows="4"></textarea>
                    </div>
                </div>



                <div className="col-lg-12">
                    <div className="text-center mt-2">
                        {isLoading ? <a href="javascript:void(0)" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" /> Adding </a> : <button type="button" onClick={AddVendorAction} className="btn btn-primary">Add Vendor</button>}
                    </div>
                </div>
            </div>
        </>
    )

}