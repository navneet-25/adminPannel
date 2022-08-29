import { BiRupee, BiBarcodeReader } from 'react-icons/bi';
import { FcCalendar } from 'react-icons/fc';
import { AiOutlineDelete } from 'react-icons/ai';
import { useContext, useEffect, useRef, useState } from 'react';
import ContextData from '../../context/MainContext';
import Multiselect from 'multiselect-react-dropdown';
import DatePicker from "react-datepicker";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import useScanDetection from 'use-scan-detection';

import "react-datepicker/dist/react-datepicker.css";


export const Purchased = () => {

    const getAllVendorsRef = useRef(null);
    const { store_vendor_list, storeProductsData } = useContext(ContextData);
    const [vendorLists, setVendorLists] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedVendor, setSelectedVendor] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        setAllProducts(storeProductsData);
    }, [storeProductsData]);

    useScanDetection({
        onComplete: (code) => {
            const prod = allProducts?.find(o => o.product_bar_code == code);
            const allReadyExist = addedItems.some(elem => elem.product_bar_code === code);
            !allReadyExist && setAddedItems([...addedItems, prod]);
        },
    });

    useEffect(() => {
        setVendorLists(store_vendor_list)
    }, [store_vendor_list])

    const handleOnSelect = (item) => {
        const allReadyExist = addedItems.some(elem => elem.product_bar_code === item.product_bar_code);
        !allReadyExist && setAddedItems([...addedItems, item]);
    }

    const updateFieldChanged = index => e => {
        console.log('index: ' + index);
        console.log('property name: ' + e.target.name);
        let newArr = [...addedItems];
        e.target.name === "quantity" && (newArr[index].billing_quantity = e.target.value);
        e.target.name === "purchase_price" && (newArr[index].purchase_price = e.target.value);
        e.target.name === "discount" && (newArr[index].discount_in_rs = e.target.value);
        newArr[index].amount_total = Number(newArr[index].billing_quantity) * Number(newArr[index].purchase_price);
        console.log("new arrya --->", newArr);
        newArr = newArr.filter(item => item);
        setAddedItems(newArr)
    }

    const deleteFeild = index => {
        let newArr = [...addedItems];
        delete newArr[index];
        newArr = newArr.filter(item => item);
        setAddedItems(newArr)
    }

    const updateList = (rowID) => {

        const index = addedItems.findIndex(object => {
            return object.id === rowID;
        });

    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">Basic Tables</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                                <li className="breadcrumb-item active">Basic Tables</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header align-items-center d-flex px-5">
                            <h4 className="card-title mb-0 flex-grow-1">Purchased</h4>
                            <div className="flex-shrink-0">
                                {/* on right */}<button type="button" class="btn btn-success waves-effect waves-light">Add +</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="live-preview">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row py-4 mb-4 border-bottom align-items-center">
                                            <div className="col-lg-8 px-4" style={{ borderRight: "1px solid #c1c1c1" }}>
                                                <div className="row">
                                                    <div className="col-md-7 px-5" style={{ borderRight: "1px solid #c1c1c1" }}>
                                                        <h4 className='mb-0 text-center mb-4'>Choose your vendor</h4>
                                                        <Multiselect
                                                            // singleSelect={true}
                                                            style={{
                                                                zIndex: 99999
                                                            }}
                                                            selectionLimit={1}
                                                            displayValue="name"
                                                            onKeyPressFn={function noRefCheck() { }}
                                                            onSearch={function noRefCheck() { }}
                                                            onRemove={(e) => {
                                                                setSelectedVendor(e[0])
                                                            }}
                                                            onSelect={(e) => {
                                                                setSelectedVendor(e[0])
                                                            }}
                                                            options={vendorLists}
                                                            ref={getAllVendorsRef}
                                                        />
                                                    </div>
                                                    {selectedVendor?.name ? <div className="col-md-5">
                                                        <div className='px-5 border-left'>
                                                            <h6 className=''>Name: <strong>{selectedVendor?.name}</strong></h6>
                                                            <h6 className=''>Mobile: <strong>{selectedVendor?.mobile}</strong></h6>
                                                            <h6 className=''>Address: <strong>{selectedVendor?.address}</strong></h6>
                                                            <h6 className='mb-0'>Firm Name: <strong>{selectedVendor?.firm_name}</strong></h6>
                                                        </div>
                                                    </div> : null}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 px-4">
                                                <h4 className='mb-0 text-center mb-4'>Choose Date <FcCalendar /></h4>
                                                <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)} className="form-control bg-light border-light custom_date_input" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pb-4 border-bottom">
                                        <div className="row g-3">
                                            <div className="col-md-5 col-sm-12">
                                                <div className="d-flex align-items-center">
                                                    {/* <input id="search-dropdown" type="text" className="form-control search bg-light border-light" placeholder="Add product..." /> */}
                                                    <div style={{ width: 500 }}>
                                                        <ReactSearchAutocomplete
                                                            items={allProducts}
                                                            className="form-control search bg-light border-light"
                                                            onSelect={handleOnSelect}
                                                            autoFocus
                                                            styling={{
                                                                zIndex: "9999"
                                                            }}
                                                            fuseOptions={{ keys: ["product_name", "product_bar_code", "product_full_name"] }}
                                                            resultStringKeyName="product_name"
                                                        // formatResult={formatResult}
                                                        />
                                                    </div>
                                                    {/* <i className="ri-search-line search-icon" /> */}
                                                    <h2 className='mb-0' style={{ marginLeft: "1rem" }}><BiBarcodeReader /></h2>
                                                </div>

                                                <div className="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                                                </div>

                                            </div>
                                            {/*end col*/}
                                            <div className="offset-md-4 col-md-3 col-sm-4 d-flex justify-content-end">

                                            </div>
                                            {/*end col*/}
                                        </div>

                                    </div>
                                    <div className="col-xl-12">
                                        <div className="table-responsive mt-4 mt-xl-0">
                                            <table className="table table-active table-hover table-striped align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">NO</th>
                                                        <th scope="col">ITEMS</th>
                                                        <th scope="col">QTY</th>
                                                        <th scope="col"><BiRupee />PRICE/ITEM</th>
                                                        <th scope="col">DISCOUNT</th>
                                                        <th scope="col">HSN</th>
                                                        <th scope="col">SGST</th>
                                                        <th scope="col">CGST</th>
                                                        <th scope="col">AMOUNT</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {addedItems.length && addedItems ?
                                                        addedItems.map((items, index) => {
                                                            console.log("all items --->", addedItems)
                                                            return (
                                                                <>
                                                                    {items && < tr >
                                                                        <td width={"10%"} className="fw-medium">{index + 1}</td>
                                                                        <td width={"40%"} >{items.product_full_name}</td>
                                                                        <td width={"10%"} ><input type="number" name="quantity" onChange={updateFieldChanged(index)} value={items.billing_quantity ? items.billing_quantity : ""} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                                        <td width={"10%"} ><input type="number" name="purchase_price" value={items.purchase_price} onChange={updateFieldChanged(index)} className="invoice_input" style={{ width: "5rem" }} placeholder="0" /></td>
                                                                        <td width={"10%"}>
                                                                            <input type="number" name="discount" onChange={updateFieldChanged(index)} value={items.discount_in_rs} className="invoice_input" style={{ width: "3rem" }} placeholder="0" />
                                                                        </td>
                                                                        <td width={"10%"} ><input type="number" value={items.hsn_code} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                                        <td width={"10%"} ><input type="number" value={items.s_gst} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                                        <td width={"10%"} ><input type="number" value={items.c_gst} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                                        <td width={"10%"} ><input type="number" value={items.amount_total ? items.amount_total : ""} readOnly className="invoice_input" style={{ width: "6rem" }} placeholder="0" /></td>
                                                                        <td width={"10%"}  ><AiOutlineDelete style={{ cursor: "pointer", color: "red" }} onClick={() => deleteFeild(index)} size={24} /></td>
                                                                    </tr>}
                                                                </>
                                                            )
                                                        })
                                                        : null
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                            </div>
                        </div>{/* end card-body */}
                    </div>{/* end card */}
                </div>
                {/* end col */}
            </div>

        </>
    )

}