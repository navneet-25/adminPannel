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
            setAddedItems([...addedItems, prod]);
        }
    });

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
        setAddedItems([...addedItems, item]);
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    useEffect(() => {
        console.log("date seletede ---->", startDate);
    }, [startDate]);

    useEffect(() => {
        setVendorLists(store_vendor_list)
    }, [store_vendor_list])


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
                                                            onSearch={handleOnSearch}
                                                            onHover={handleOnHover}
                                                            onSelect={handleOnSelect}
                                                            onFocus={handleOnFocus}
                                                            autoFocus
                                                            styling={{
                                                                zIndex: "9999"
                                                            }}
                                                            fuseOptions={{ keys: ["product_name", "product_bar_code", "product_full_name"] }}
                                                            resultStringKeyName="product_bar_code"
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
                                                    {addedItems.length ?
                                                        addedItems.map((items, index) => {
                                                            return (
                                                                < tr >
                                                                    <td width={"10%"} className="fw-medium">{index + 1}</td>
                                                                    <td width={"40%"} >{items.product_full_name}</td>
                                                                    <td width={"10%"} ><input type="number" value={0} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                                    <td width={"10%"} ><input type="number" value={items.purchase_price} className="invoice_input" style={{ width: "5rem" }} placeholder="0" /></td>
                                                                    <td width={"10%"}>
                                                                        <input type="number" value={0} className="invoice_input" style={{ width: "3rem" }} placeholder="0" />
                                                                    </td>
                                                                    <td width={"10%"} ><input type="number" value={items.hsn_code} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                                    <td width={"10%"} ><input type="number" value={items.s_gst} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                                    <td width={"10%"} ><input type="number" value={items.c_gst} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                                    <td width={"10%"} ><input type="number" value={items.product_full_name} className="invoice_input" style={{ width: "6rem" }} placeholder="0" /></td>
                                                                    <td width={"10%"}  ><AiOutlineDelete style={{ cursor: "pointer", color: "red" }} size={24} /></td>
                                                                </tr>
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