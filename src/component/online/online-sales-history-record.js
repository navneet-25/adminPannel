import { BiRupee } from "react-icons/bi";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ContextData from "../../context/MainContext";

import { useQuery } from "react-query";
import Cookies from "universal-cookie";
import { useReactToPrint } from "react-to-print";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import URL from "../../URL";

import "react-datepicker/dist/react-datepicker.css";

const OnlineSalesHistoryRecord = () => {
  const { orderID } = useParams();
  const { customer_address } = useParams();

  const componentRef = useRef();

  console.log("orderID", orderID);
  console.log("customer_address", customer_address);

  const cookies = new Cookies();
  const adminStoreId = cookies.get("adminStoreId");
  const adminId = cookies.get("adminId");
  const [isDataLoding, setisDataLoding] = useState(true);

  const {
    store_customer_list,
    store_customer_purchase_record,
    store_customer_purchase_record_products,
  } = useContext(ContextData);
  const [orderDetails, setorderDetails] = useState([]);

  const [customerAddress, setcustomerAddress] = useState({});
  const [productData, setproductData] = useState([]);
  const [Store_bussiness_info, setStore_bussiness_info] = useState([]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  async function fetchData({ orderID, customer_address }) {
    const data = await fetch(URL + "/APP-API/Billing/getOnlineOrderDetails", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        store_id: adminStoreId,
        orderID,
        customer_address,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => responseJson);
    return data;
  }

  const {
    data: ONLINESALEHISTORYRECORD,
    isFetching,
    isLoading: isLoading,
  } = useQuery({
    queryKey: ["ONLINESALEHISTORYRECORD", orderID, customer_address],
    queryFn: (e) =>
      fetchData({ orderID: e.queryKey[1], customer_address: e.queryKey[2] }),
  });

  useEffect(() => {
    console.log("detaiols", ONLINESALEHISTORYRECORD);
    if (ONLINESALEHISTORYRECORD) {
      // setShowData(ONLINESALEHISTORYRECORD.store_customer_purchase_record);
      setcustomerAddress(ONLINESALEHISTORYRECORD.customer_address_details);
      setproductData(ONLINESALEHISTORYRECORD.order_products_details);
      setorderDetails(ONLINESALEHISTORYRECORD.order_details);
      setStore_bussiness_info(ONLINESALEHISTORYRECORD.Store_bussiness_info);
      setisDataLoding(false);
    }
  }, [ONLINESALEHISTORYRECORD, isLoading]);

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
                      <div
                        className="col-lg-4 col-print-4"
                        style={{ borderRight: "1px solid #c1c1c1" }}
                      >
                        <div className="px-5 border-left">
                          <h6 className="">
                            Customer Name:{" "}
                            <strong>{customerAddress?.name}</strong>
                          </h6>
                          <h6 className="">
                            Phone: <strong>{customerAddress?.phone}</strong>
                          </h6>
                          <h6 className="">
                            Alt Phone:{" "}
                            <strong>
                              {customerAddress?.alternative_phone}
                            </strong>
                          </h6>

                          <h6 className="">
                            Landmark:{" "}
                            <strong>{customerAddress?.landmark}</strong>
                          </h6>
                          <h6 className="">
                            Distance:{" "}
                            <strong>{customerAddress?.distance_km} KM</strong>
                          </h6>
                          <h6 className="">
                            Address:{" "}
                            <strong>
                              {customerAddress?.user_house_no}{" "}
                              {customerAddress?.base_address}{" "}
                              {customerAddress?.address}
                            </strong>
                          </h6>
                        </div>
                      </div>

                      <div
                        className="col-lg-4 col-print-4 "
                        style={{ borderRight: "1px solid #c1c1c1" }}
                      >
                        <div className="px-5 border-left">
                          <h6 className="">
                            Order status:{" "}
                            <strong>{orderDetails?.order_status}</strong>
                          </h6>

                          <h6 className="">
                            No of Item:{" "}
                            <strong>{orderDetails?.no_of_items}</strong>
                          </h6>
                          <h6 className="">
                            Order ID: <strong>{orderDetails?.order_id}</strong>
                          </h6>

                          <h6 className="">
                            Order Date:{" "}
                            <strong>
                              {orderDetails?.date} || {orderDetails?.time}
                            </strong>
                          </h6>
                          <h6 className="">
                            Payment Mode :{" "}
                            <strong>{orderDetails?.payment_mode}</strong>
                          </h6>
                          <h6 className="">
                            Payment Status :{" "}
                            <strong>
                              {orderDetails?.payment_status == 0
                                ? "Unpaid"
                                : "Paid"}
                            </strong>
                          </h6>
                        </div>
                      </div>

                      <div className="col-lg-4 col-print-4">
                        <div className="px-5 border-left">
                          <h6 className="">
                            Email:{" "}
                            <strong>{customerAddress?.firm_email}</strong>
                          </h6>
                          <h6 className="">
                            GST: <strong>{customerAddress?.gst_no}</strong>
                          </h6>
                          <h6 className="">
                            FSSAI: <strong>{customerAddress?.fssai_no}</strong>
                          </h6>
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
                            <th scope="col">QTY</th>
                            <th scope="col">Size</th>
                            <th scope="col">ITEMS</th>

                            <th scope="col">MRP</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">DIS</th>

                            <th scope="col">AMOUNT</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productData.length && productData ? (
                            productData.map((items, index) => {
                              return (
                                <>
                                  {items && (
                                    <tr>
                                      <td scope="col">
                                        <img
                                          style={{ height: 35 }}
                                          src={items.product_img}
                                        />
                                      </td>
                                      <td scope="col">{items.quantity}</td>

                                      <td scope="col">
                                        {items.product_size}{" "}
                                        {items.product_unit}
                                      </td>

                                      <td>{items.product_full_name}</td>

                                      <td scope="col">{items.mrp}</td>
                                      <td scope="col">
                                        {items.sale_price} * {items.quantity}
                                      </td>
                                      <td scope="col">{items.discount}</td>

                                      <td scope="col">{items.total_amount}</td>
                                      <td scope="col">OOS</td>
                                    </tr>
                                  )}
                                </>
                              );
                            })
                          ) : (
                            <></>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="hstack gap-2 justify-content-center mb-2 d-print-none mt-4">
                    <a
                      onClick={handlePrint}
                      href="javascript:window.print()"
                      class="btn btn-success"
                    >
                      <i class="ri-printer-line align-bottom me-1"></i> Print
                      Bill
                    </a>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>

      <div id="section-to-print" ref={componentRef}>
        <div className="POS_header px-1">
          {/* <div className=" d-flex justify-content-center">
                        <img src={Store_bussiness_info?.logo} alt="user-img" className="prinerLogo rounded-circle" />
                    </div> */}

          <div className="col-auto ">
            <Text fontWeight={"700"} fontSize={24} mb={0}></Text>

            <h6
              style={{
                fontSize: 10,
                fontWeight: "800",
                textAlign: "center",
                marginBottom: 1,
              }}
            >
              {Store_bussiness_info?.strteet_linn2} {Store_bussiness_info?.area}
            </h6>
            <h6
              style={{ fontSize: 10, fontWeight: "800", textAlign: "center" }}
            >
              {Store_bussiness_info?.mobile1} {Store_bussiness_info?.mobile2}{" "}
            </h6>
          </div>
        </div>
        <div class="bill-details">
          {/* {Store_bussiness_info?.gst_no != null ? (
                            <tr><td className='text-center'>
                                GST No : <span > {Store_bussiness_info?.gst_no}</span>
                            </td></tr>
                        ) : null}
                        {Store_bussiness_info?.fassai_no != null ? (
                            <tr><td className='text-center'>
                                Fassai No : <span> {Store_bussiness_info?.fassai_no}</span>
                            </td></tr>
                        ) : null} */}
          <Box textAlign={"center"} fontSize={12}>
            <Text mb={0}>
              {orderDetails?.date} || {orderDetails?.time}
            </Text>

            <Text>
              Mo{" "}
              {customerAddress?.mobile ? customerAddress?.mobile : "----------"}
            </Text>
          </Box>
          {/* <tr>
                            <td className='text-center'>Bill No : <span>{restInfo.order_no}</span></td>
                        </tr> */}
        </div>

        <table class="items ml-1">
          <thead>
            <tr>
              <th colSpan={2} class="">
                Item
              </th>
              <th class="">Size</th>
              <th class="">Q</th>
              <th class="">MRP</th>
              <th class="">RATE</th>
              <th class="">AMT</th>
            </tr>
          </thead>

          <tbody>
            {productData?.map((items, index) => {
              return (
                <tr class="sum-up line">
                  <td colSpan={2}>{items?.product_name?.substring(0, 21)}</td>
                  <td>
                    {items.product_size} {items.product_unit}
                  </td>
                  <td>{items.billing_quantity}</td>
                  <td>{items.price}</td>
                  <td class="price">{items.sale_price}</td>
                  <td class="price">{items.amount_total}</td>
                </tr>
              );
            })}

            <tr>
              <td colspan="6" class="sum-up line">
                Sub Total
              </td>
              <td class="line price">
                {orderDetails?.subTotal?.toLocaleString("en-IN")}
              </td>
            </tr>
            <tr>
              <td colspan="6" class="sum-up line">
                Discount
              </td>
              <td class="line price">
                - {orderDetails?.discount?.toLocaleString("en-IN")}
              </td>
            </tr>

            {/* <tr>
                            <td colspan="3" class="sum-up ">Subtotal</td>
                            <td class=" price">{orderDetails?.subTotal?.toLocaleString('en-IN')}</td>
                        </tr> */}
            {/* <tr>
                            <td colspan="3" class="sum-up">GST</td>
                            <td class="price">{(orderDetails?.sGstTotal + orderDetails?.cGstTotal).toLocaleString('en-IN')}</td>
                        </tr> */}

            <tr>
              <th colspan="6" class="total text">
                Total
              </th>
              <th class="total price">
                {orderDetails?.grandTotal?.toLocaleString("en-IN")}
              </th>
            </tr>
          </tbody>
        </table>
        <section>
          <p>
            Paid by : <span> aa </span>
          </p>
          <p style={{ textAlign: "center" }}>
            Thank you for shopping with {Store_bussiness_info?.buss_name}
          </p>
        </section>
        {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={URLDomain + '/online-bill/' + restInfo?.order_no}
                        viewBox={`0 0 256 256`}
                    />
                </div>
                <div className='POS_footer' style={{ textAlign: "center" }}>
                    <p>Scan QR Code </p>
                </div> */}
      </div>
    </>
  );
};

export default OnlineSalesHistoryRecord;
