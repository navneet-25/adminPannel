import { BiRupee } from 'react-icons/bi';
import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContextData from '../../context/MainContext';
import "react-datepicker/dist/react-datepicker.css";

import URL from '../../URL';


const OnlineSalesHistoryRecord = () => {

    const { orderID } = useParams();
    const { customer_address } = useParams();

    const { store_customer_list, store_customer_purchase_record, store_customer_purchase_record_products } = useContext(ContextData);
    const [orderDetails, setorderDetails] = useState([]);

    const [CustomerAddress, setCustomerAddress] = useState({});
    const [orderProductsData, setorderProductsData] = useState([]);





    useEffect(() => {


        console.log('order_id', orderID)
        console.log('customer_address', customer_address)

        async function fetchData(){ await  fetch(URL + "/APP-API/Billing/getOnlineOrderDetails", {method: 'post',header: {'Accept': 'application/json','Content-type': 'application/json' },
                  body: JSON.stringify({ 
                    orderID:orderID,customer_address:customer_address 
                  }) })
                  .then((response) => response.json())
                  .then((responseJson) => {
                    

                    console.log("order details",responseJson)
                    setorderDetails(responseJson.order_details);
                    setCustomerAddress(responseJson.customer_address_details)
                    setorderProductsData(responseJson.order_products_details)

                  }) }  fetchData();





    }, [store_customer_purchase_record]);


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">Purchase</h4>
                        {/* <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                                <li className="breadcrumb-item active">Basic Tables</li>
                            </ol>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-lg-12">
                    <div className="card" id="demo">
                        <div className="card-body">
                            <div className="live-preview">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row py-4 mb-4 border-bottom align-items-center">
                                            <div className="col-lg-4 col-print-4" style={{ borderRight: "1px solid #c1c1c1" }}>

                                                <div className='px-5 border-left'>
                                                    <h6 className=''> Name: <strong>{CustomerAddress?.name}</strong></h6>
                                                    <h6 className=''>Firm Phone: <strong>{CustomerAddress?.phone}</strong></h6>
                                                    <h6 className=''>Address: <strong>{CustomerAddress?.address} {CustomerAddress?.city} {CustomerAddress?.pin_code} {CustomerAddress?.state}</strong></h6>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-print-4 " style={{ borderRight: "1px solid #c1c1c1" }}>

                                                <div className='px-5 border-left'>
                                                    <h6 className=''>Contact Name: <strong>{CustomerAddress?.name}</strong></h6>
                                                    <h6 className=''>Contact Mobile: <strong>{CustomerAddress?.mobile}</strong></h6>
                                                    <h6 className=''>Contact Roal: <strong>{CustomerAddress?.contact_roal}</strong></h6>
                                                </div>

                                            </div>

                                            <div className="col-lg-4 col-print-4">

                                                <div className='px-5 border-left'>
                                                    <h6 className=''>Email: <strong>{CustomerAddress?.firm_email}</strong></h6>
                                                    <h6 className=''>GST: <strong>{CustomerAddress?.gst_no}</strong></h6>
                                                    <h6 className=''>FSSAI: <strong>{CustomerAddress?.fssai_no}</strong></h6>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="table-responsive mt-4 mt-xl-0">
                                            <table className="table table-active table-hover table-striped align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">IMG</th>
                                                        <th scope="col">ITEMS</th>
                         
                                                        <th scope="col"><BiRupee />MRP</th>
                                                        <th scope="col"><BiRupee />PRICE</th>
                                                        <th scope="col">DISCOUNT</th>
                                                 
                                                        <th scope="col">AMOUNT</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orderProductsData?.length && orderProductsData ?
                                                        orderProductsData?.map((items, index) => {
                                                            return (
                                                                <>
                                                                    {items && < tr >
                                                                        <td className="fw-medium">   <img src={items.product_img} alt="" style={{ height: '40px', borderRadius: '14px' }} /></td>
                                                                        <td style={{ whiteSpace: "break-spaces" }} >{items.quantity} * {items.product_full_name}</td>
                                                                     
                                                                        <td><BiRupee /> {items.price}</td>
                                                                        <td><BiRupee /> {items.sale_price}</td>
                                                                        <td><BiRupee /> {items.discount}</td>
                                                        
                                                                        <td><BiRupee /> {items.total_amount}</td>


                                                                    </tr>}
                                                                </>
                                                            )
                                                        })
                                                        : <>
                                                        </>
                                                    }
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                    <div className="col-md-12 border-top border-bottom mt-5">
                                        <div className="row">
                                            <div className="col-md-6 col-print-6">

                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Order Number</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{orderDetails.order_id}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Purchase Date</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{orderDetails.purchaes_date}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center ">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Total Items</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{orderDetails.no_of_items} </h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Billing Date</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{orderDetails.date} {orderDetails.time}</h5>
                                                </div>

                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Payment Mode</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{orderDetails.payment_mode}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Sales Man</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{orderDetails.sale_man_name}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Stock Location</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{orderDetails.stock_location}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Notes</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{orderDetails.notes}</h5>
                                                </div>



                                            </div>
                                            <div className="col-md-6 col-print-6 px-0 py-3" style={{ borderLeft: "1px solid #d9d9d9" }}>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Sub Total</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}><BiRupee /> {orderDetails.sub_total}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>SGST</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>+<BiRupee /> {orderDetails.s_gst}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>CGST</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>+<BiRupee /> {orderDetails.c_gst}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Discount</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>-<BiRupee />{orderDetails.discount}</h5>
                                                </div>
                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center  border-bottom">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Additional Charges</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>+<BiRupee />{orderDetails.extra_charge}</h5>
                                                </div>


                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "700", color: "black" }}>Total Amount</h5>
                                                    <h5 style={{ fontSize: 16, margin: 0, fontWeight: "700", color: "black" }}><BiRupee /> {orderDetails.total_payment}</h5>
                                                </div>




                                                <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>Amount Paid</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}><BiRupee /> {orderDetails.amount_paid}</h5>
                                                </div>
                                                <div className="d-flex pt-3 px-5 justify-content-between align-items-center">
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "red" }}>Outstanding</h5>
                                                    <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "red" }}><BiRupee /> {orderDetails.outstanding}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hstack gap-2 justify-content-center mb-2 d-print-none mt-4">
                                        <a href="javascript:window.print()" class="btn btn-success"><i class="ri-printer-line align-bottom me-1"></i> Print</a>
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

export default OnlineSalesHistoryRecord 