import { BiRupee, BiBarcodeReader } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext, useEffect, useState, useRef } from "react";
import ContextData from "../../context/MainContext";
import DatePicker from "react-datepicker";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import useScanDetection from "use-scan-detection";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import ReactToPrint from "react-to-print";
import "react-datepicker/dist/react-datepicker.css";
import URLDomain from "../../URL";
import { useReactToPrint } from "react-to-print";
import { useToast } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const Sale = () => {
  const {
    Store_bussiness_info,
    store_coupon_list,
    storeProductsData,
    store_login_user,
  } = useContext(ContextData);
  const [Saledate, setSaledate] = useState(new Date());
  const [selectedCustomer, setSelectCustomer] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [couponData, setCouponData] = useState([]);
  const [isLoading, setIL] = useState(false);
  const toast = useToast();

  var DateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var BillDate = new Date(Saledate);

  const [customerShoppingDetails, setcustomerShoppingDetails] = useState({
    mobile: selectedCustomer?.mobile,
    customer_type: "",
    no_of_shopping_time: 0,
    shopping_value: 0,
  });

  const [useCouponData, setuseCouponData] = useState({
    is_coupon_applied: 0,
    coupon_code: 0,
    coupon_id: null,
  });

  const [allTotals, setAllTotals] = useState({
    subTotal: 0,
    sGstTotal: 0,
    cGstTotal: 0,
    grandTotal: 0,
    discount: 0,
    coupon_discount_value: 0,
    additional_charges: 0,
    amount_paid: 0,
    outstanding: 0,
    round_off: false,
    round_off_value: 0,
    fully_paid: false,
  });
  const [restInfo, setRestInfo] = useState({
    sales_man: "",
    payment_mode: "Cash",
    notes: "",
    stock_location: "Store",
    order_no:
      new Date().getTime() +
      new Date().getDate() +
      "" +
      new Date().getHours() +
      "" +
      new Date().getMinutes() +
      "" +
      new Date().getSeconds() +
      "" +
      store_login_user.id,
  });
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const getToast = (e) => {
    toast({
      title: e.title,
      description: e.desc,
      status: e.status,
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  useEffect(
    () => {
      setAllProducts(storeProductsData);
      const CouponData = store_coupon_list.filter((obj) => obj.status == 1);
      setCouponData(CouponData);

      console.log("store prod", store_login_user);
    },
    [storeProductsData],
    allTotals
  );

  useScanDetection({
    onComplete: (code) => {
      const prod = allProducts?.find((o) => o.product_bar_code == code);
      const allReadyExist = addedItems.find(
        (elem) => elem.product_bar_code === code
      );
      const index = addedItems.findIndex(
        (elem) => elem.product_bar_code === code
      );
      const updatedProduct = [...addedItems];
      if (allReadyExist) {
        let obj = updatedProduct[index];
        if (obj !== undefined) {
          obj.billing_quantity++; // <-- state mutation
          obj.amount_total =
            Number(obj.billing_quantity) * Number(obj?.sale_price);
        }
      }
      !allReadyExist
        ? setAddedItems([
            ...addedItems,
            { ...prod, billing_quantity: 1, amount_total: prod?.sale_price },
          ])
        : setAddedItems([...updatedProduct]);
      /* previousState => {
                let obj = previousState[index];
                if (obj !== undefined) {
                    obj.billing_quantity++; // <-- state mutation
                    obj.amount_total = Number(obj.billing_quantity) * Number(obj.sale_price);
                    console.log("Quantity Scan ---->", obj.billing_quantity);
                }
                return [...previousState];
            } */
    },
  });

  useEffect(() => {
    const subTotalGet = addedItems.reduce((acc, obj) => {
      return (
        acc +
        Number(
          Number(obj?.sale_price || 0) * Number(obj?.billing_quantity || 0)
        )
      );
    }, 0);

    const discount = addedItems.reduce((acc, obj) => {
      return (
        acc +
        Number(
          Number(obj?.discount_in_rs || 0) * Number(obj?.billing_quantity || 0)
        )
      );
    }, 0);

    const sGstTotal = addedItems.reduce((acc, obj) => {
      return acc + Number(obj?.s_gst || 0) * Number(obj?.billing_quantity || 0);
    }, 0);
    const cGstTotal = addedItems.reduce((acc, obj) => {
      return acc + Number(obj?.c_gst || 0) * Number(obj?.billing_quantity || 0);
    }, 0);
    const subTotal = subTotalGet - (sGstTotal + cGstTotal);
    const grandTotal = subTotal + sGstTotal + cGstTotal;

    setAllTotals({
      ...allTotals,
      discount,
      subTotal,
      sGstTotal,
      cGstTotal,
      grandTotal,
    });
  }, [addedItems]);

  useEffect(() => {
    const { subTotal, sGstTotal, cGstTotal, discount, additional_charges } =
      allTotals;
    const Total =
      subTotal + sGstTotal + cGstTotal + Number(additional_charges || 0);
    // const discountedPrice = Number(Total || 0) - Number(discount || 0);
    setAllTotals({
      ...allTotals,
      // grandTotal: discountedPrice
    });
  }, [allTotals?.discount]);

  useEffect(() => {
    const { subTotal, sGstTotal, cGstTotal, discount, additional_charges } =
      allTotals;
    const Total = subTotal + sGstTotal + cGstTotal - Number(discount || 0);
    const AdditionalChargesTotal =
      Number(Total || 0) + Number(additional_charges || 0);
    setAllTotals({
      ...allTotals,
      grandTotal: AdditionalChargesTotal,
    });
  }, [allTotals?.additional_charges]);

  useEffect(() => {
    const { grandTotal, amount_paid } = allTotals;
    const Total = Number(grandTotal || 0);
    const outstanding = Total - Number(amount_paid || 0);
    setAllTotals({
      ...allTotals,
      outstanding: outstanding,
    });
  }, [allTotals?.amount_paid]);

  useEffect(() => {
    const { fully_paid } = allTotals;
    fully_paid &&
      setAllTotals({
        ...allTotals,
        outstanding: 0,
      });
  }, [allTotals?.fully_paid]);

  const handleOnSelect = (item) => {
    console.log("barcode ---->", item.product_bar_code);
    const allReadyExist = addedItems.some(
      (elem) => elem.product_full_name === item.product_full_name
    );
    const index = addedItems.findIndex(
      (elem) => elem.product_full_name === item.product_full_name
    );
    !allReadyExist
      ? setAddedItems([
          ...addedItems,
          { ...item, billing_quantity: 1, amount_total: item.sale_price },
        ])
      : setAddedItems((previousState) => {
          let obj = previousState[index];
          if (obj !== undefined) {
            obj.billing_quantity = Number(obj.billing_quantity || 0) + 1; // <-- state mutation
            obj.amount_total =
              Number(obj.billing_quantity) * Number(obj.sale_price);
            console.log("Quantity Scan ---->", obj.billing_quantity);
          }
          return [...previousState];
        });
    // !allReadyExist && setAddedItems([...addedItems, item]);
    /*  setTimeout(() => {
             document.getElementsByClassName("clear-icon")[0].querySelector(':scope > svg')[0].click();
         }, 1000) */ //1 second delay
  };

  const updateFieldChanged = (index) => (e) => {
    // console.log('index: ' + index);
    // console.log('property name: ' + e.target.name);
    let newArr = [...addedItems];

    e.target.name === "price" && (newArr[index].price = e.target.value);
    e.target.name === "quantity" &&
      (newArr[index].billing_quantity = e.target.value);
    e.target.name === "product_full_name" &&
      (newArr[index].product_full_name = e.target.value);
    e.target.name === "sale_price" &&
      (newArr[index].sale_price = e.target.value);
    e.target.name === "discount" &&
      (newArr[index].discount_in_rs = e.target.value);
    newArr[index].amount_total =
      Number(newArr[index].billing_quantity) * Number(newArr[index].sale_price);
    // console.log("new arrya --->", newArr);
    newArr = newArr.filter((item) => item);
    setAddedItems(newArr);
  };

  const Print = () => {
    console.log("print");
    let printContents = document.getElementById("section-to-print").innerHTML;
    let originalContents =
      document.getElementsByClassName("main-content").innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const deleteFeild = (index) => {
    let newArr = [...addedItems];
    delete newArr[index];
    newArr = newArr.filter((item) => item);
    setAddedItems(newArr);
  };

  const submitSale = () => {
    console.log("cpupon value", allTotals?.coupon_discount_value);

    setIL(true);
    if (
      selectedCustomer.mobile == undefined ||
      selectedCustomer.mobile == null
    ) {
      getToast({
        title: "Customer Mobile Number",
        dec: "Requird",
        status: "error",
      });
      setIL(false);
    } else if (allTotals?.grandTotal == 0) {
      getToast({ title: "Please add items", dec: "Requird", status: "error" });
      setIL(false);
    } else {
      const data = JSON.stringify({
        customer_type: customerShoppingDetails?.customer_type,
        store_id: store_login_user.store_id,
        customer_mobile: selectedCustomer.mobile,
        user_id: store_login_user.id,
        sub_total: allTotals?.subTotal,
        i_gst: Number(allTotals?.sGstTotal) + Number(allTotals?.cGstTotal),
        s_gst: Number(allTotals?.sGstTotal),
        c_gst: Number(allTotals?.cGstTotal),
        extra_charge: allTotals?.additional_charges,
        discount: allTotals?.discount,
        notes: restInfo.notes,
        order_no: restInfo.order_no,
        total_payment: allTotals?.grandTotal,
        amount_paid: allTotals?.amount_paid,
        outstanding: allTotals?.outstanding,
        stock_location: restInfo.stock_location,
        payment_mode: restInfo.payment_mode,
        is_coupon_applied: useCouponData.is_coupon_applied,
        coupon_code: useCouponData.coupon_code,
        coupon_discount_value: allTotals?.coupon_discount_value,
        coupon_id: useCouponData.coupon_id,
        purchaes_date: Saledate.toLocaleDateString(),
        product_list: addedItems,
      });

      fetch(URLDomain + "/APP-API/Billing/SaleStoreProducts", {
        method: "POST",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: data,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // functionality.fetchAllData(responseJson);
          console.log(" Sale server res ---->", responseJson);
          setIL(false);
          handlePrint();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const getCustomerDetails = (mobile) => {
    setSelectCustomer({ mobile });
    fetch(URLDomain + "/APP-API/Billing/getCustomerBuyingDetails", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        mobile: mobile,
        store_id: store_login_user.store_id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setcustomerShoppingDetails({
          customer_type: responseJson.customer_type,
          no_of_shopping_time: responseJson.no_of_shopping_time,
          shopping_value: responseJson.shopping_value,
        });
      })
      .catch((error) => {
        //  console.error(error);
      });
  };

  const getCouponUseDetails = (coupon_id) => {
    setuseCouponData({ is_coupon_applied: 0, coupon_code: 0, coupon_id: null });
    setAllTotals({
      grandTotal:
        Number(allTotals?.grandTotal) +
        Number(allTotals?.coupon_discount_value),
      coupon_discount_value: 0,

      ...allTotals,
    });

    if (!isNaN(parseFloat(coupon_id))) {
      fetch(URLDomain + "/APP-API/Billing/cheakUserUsedCoupon", {
        method: "POST",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          coupon_id: coupon_id,
          mobile: selectedCustomer.mobile,
          store_id: store_login_user.store_id,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.coupon_used == 0) {
            if (responseJson.coupon_data.coupon_type == "amount") {
              setAllTotals({
                coupon_discount_value: Math.round(
                  responseJson.coupon_data.coupon_discount
                ),
                grandTotal:
                  Number(allTotals?.grandTotal) -
                  Number(responseJson.coupon_data.coupon_discount),
                ...allTotals,
              });
            } else {
              setAllTotals({
                coupon_discount_value: Math.round(
                  responseJson.coupon_data.coupon_discount
                ),
                grandTotal:
                  allTotals?.grandTotal -
                  responseJson.coupon_data.coupon_discount,
                ...allTotals,
              });
            }

            setuseCouponData({
              is_coupon_applied: 1,
              coupon_code: responseJson.coupon_data.coupon_code,
              coupon_id: responseJson.coupon_data.coupon_id,
            });
            getToast({
              title: "Coupon Applied ",
              dec: "Successful",
              status: "success",
            });
          } else {
            getToast({
              title: "Coupon used already for this customer",
              dec: "ERROR",
              status: "error",
            });
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
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Sale</h4>
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
          <div className="card">
            <div className="card-header align-items-center d-flex px-5">
              <h4 className="card-title mb-0 flex-grow-1">Sale</h4>
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
                      <div
                        className="col-lg-8 px-4"
                        style={{ borderRight: "1px solid #c1c1c1" }}
                      >
                        <div className="row">
                          <div
                            className="col-md-7 px-5"
                            style={{ borderRight: "1px solid #c1c1c1" }}
                          >
                            <h4 className="mb-0 text-center mb-4">
                              Enter Mobile Number
                            </h4>
                            <div>
                              <input
                                type="number"
                                min="1"
                                max="10"
                                list="suggestions"
                                class="form-control"
                                onChange={(e) =>
                                  e.target.value.length == 10 &&
                                  getCustomerDetails(e.target.value)
                                }
                                placeholder="Mobile..."
                                autocomplete="on"
                                id="search-options"
                              />
                            </div>
                          </div>
                          {selectedCustomer?.mobile ? (
                            <div className="col-md-5">
                              <div className="px-5 border-left">
                                <h5 className="">
                                  Type:{" "}
                                  <strong>
                                    {" "}
                                    {customerShoppingDetails?.customer_type}
                                  </strong>
                                </h5>
                                <h5 className="">
                                  Times:{" "}
                                  <strong>
                                    {" "}
                                    {
                                      customerShoppingDetails?.no_of_shopping_time
                                    }
                                  </strong>
                                </h5>
                                <h5 className="">
                                  Total:{" "}
                                  <strong>
                                    {" "}
                                    ₹ {customerShoppingDetails?.shopping_value}
                                  </strong>
                                </h5>
                                <h5 className="">
                                  Mobile:{" "}
                                  <strong> {selectedCustomer?.mobile}</strong>
                                </h5>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-4 px-4">
                        <h4 className="mb-0 text-center mb-4">
                          Sale Date <FcCalendar />
                        </h4>
                        <DatePicker
                          selected={Saledate}
                          dateFormat="dd-MM-yyyy"
                          onChange={(date) => setSaledate(Date.parse(date))}
                          className="form-control bg-light border-light custom_date_input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 pb-4 border-bottom">
                    <div className="row g-3">
                      <div className="col-md-12 col-sm-12">
                        <div className="d-flex align-items-center">
                          {/* <input id="search-dropdown" type="text" className="form-control search bg-light border-light" placeholder="Add product..." /> */}
                          <div style={{ width: "68%" }}>
                            <ReactSearchAutocomplete
                              items={allProducts}
                              className="form-control search bg-light border-light"
                              onSelect={handleOnSelect}
                              styling={{
                                zIndex: "1",
                              }}
                              fuseOptions={{
                                keys: [
                                  "product_name",
                                  "product_bar_code",
                                  "product_full_name",
                                ],
                              }}
                              resultStringKeyName="product_full_name"
                              // formatResult={formatResult}
                            />
                          </div>
                          {/* <i className="ri-search-line search-icon" /> */}
                          <h2 className="mb-0" style={{ marginLeft: "1rem" }}>
                            <BiBarcodeReader />
                          </h2>
                        </div>

                        <div
                          className="dropdown-menu dropdown-menu-lg"
                          id="search-dropdown"
                        ></div>
                      </div>
                      {/*end col*/}
                      <div className="offset-md-4 col-md-3 col-sm-4 d-flex justify-content-end"></div>
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
                            <th scope="col">MRP</th>

                            <th scope="col">
                              <BiRupee />
                              PRICE
                            </th>
                            <th scope="col">DISCOUNT</th>
                            {/* <th scope="col">HSN</th> */}
                            <th scope="col">GST</th>
                            {/* <th scope="col">CGST</th> */}
                            <th scope="col">AMOUNT</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {addedItems.length && addedItems ? (
                            addedItems.map((items, index) => {
                              return (
                                <>
                                  {items && (
                                    <tr>
                                      <td width={"10%"} className="fw-medium">
                                        {index + 1}
                                      </td>
                                      <td width={"40%"}>
                                        <input
                                          type="text"
                                          name="product_full_name"
                                          onChange={updateFieldChanged(index)}
                                          value={items.product_full_name}
                                          className="invoice_input"
                                          style={{ width: "10rem" }}
                                          placeholder=""
                                        />
                                      </td>
                                      {/* <td width={"40%"} >{items.product_full_name}</td> */}
                                      <td width={"10%"}>
                                        <input
                                          type="number"
                                          name="quantity"
                                          onChange={updateFieldChanged(index)}
                                          value={
                                            items.billing_quantity
                                              ? items.billing_quantity
                                              : ""
                                          }
                                          className="invoice_input"
                                          style={{ width: "3rem" }}
                                          placeholder="0"
                                        />
                                      </td>

                                      <td width={"10%"}>
                                        <input
                                          type="number"
                                          name="price"
                                          value={items.price}
                                          onChange={updateFieldChanged(index)}
                                          className="invoice_input"
                                          style={{ width: "5rem" }}
                                          placeholder="0"
                                        />
                                      </td>

                                      <td width={"10%"}>
                                        <input
                                          type="number"
                                          name="sale_price"
                                          value={items.sale_price}
                                          onChange={updateFieldChanged(index)}
                                          className="invoice_input"
                                          style={{ width: "5rem" }}
                                          placeholder="0"
                                        />
                                      </td>
                                      <td width={"10%"}>
                                        <input
                                          type="number"
                                          name="discount"
                                          onChange={updateFieldChanged(index)}
                                          value={items.discount_in_rs}
                                          className="invoice_input"
                                          style={{ width: "3rem" }}
                                          placeholder="0"
                                        />
                                      </td>
                                      {/* <td width={"10%"} ><input type="number" value={items.hsn_code} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td> */}
                                      {/* <td width={"10%"} ><input type="number" disabled value={items.i_gst} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td> */}
                                      {/* <td width={"10%"} ><input type="number" value={items.c_gst} className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td> */}
                                      <td width={"10%"}>
                                        <input
                                          type="number"
                                          disabled
                                          value={
                                            items.amount_total
                                              ? items.amount_total
                                              : ""
                                          }
                                          readOnly
                                          className="invoice_input"
                                          style={{ width: "6rem" }}
                                          placeholder="0"
                                        />
                                      </td>
                                      <td width={"10%"}>
                                        <AiOutlineDelete
                                          style={{
                                            cursor: "pointer",
                                            color: "red",
                                          }}
                                          onClick={() => deleteFeild(index)}
                                          size={24}
                                        />
                                      </td>
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
                      {!addedItems.length ? (
                        <>
                          <div className="col-md-12 px-0">
                            <div className="d-flex align-items-center justify-content-center p-3 add_product_dashedBorder mt-4">
                              <div className="w-100">
                                <h5
                                  className="mb-0"
                                  style={{
                                    textAlign: "center",
                                    color: "#001794",
                                    fontSize: 18,
                                    marginTop: 4,
                                  }}
                                >
                                  <BiBarcodeReader
                                    size={30}
                                    style={{ marginRight: 10, marginBottom: 4 }}
                                  />{" "}
                                  Scan Barcode / Add you product
                                </h5>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-12 border-top border-bottom mt-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                          <h5
                            style={{
                              fontSize: 17,
                              margin: 0,
                              fontWeight: "700",
                              color: "black",
                            }}
                          >
                            Total Amount
                          </h5>
                          <h5
                            style={{
                              fontSize: 17,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            <BiRupee />{" "}
                            {allTotals?.grandTotal.toLocaleString("en-IN")}
                          </h5>
                        </div>
                        <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "700",
                              color: "black",
                            }}
                          >
                            Available Coupon
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            <select
                              class="form-select "
                              onChange={(e) =>
                                getCouponUseDetails(e.target.value)
                              }
                              aria-label="Default select example"
                            >
                              <option value={null}>Choose Coupon</option>
                              {couponData.map((items, index) => {
                                if (
                                  Number(allTotals?.grandTotal) >=
                                  Number(items.minimum_order_amount)
                                ) {
                                  return (
                                    <>
                                      <option value={items.coupon_id}>
                                        {items.coupon_code} ({" "}
                                        {Math.round(items.coupon_discount)}{" "}
                                        {items.coupon_type == "amount"
                                          ? "₹ OFF"
                                          : "% OFF"}{" "}
                                        )
                                      </option>
                                    </>
                                  );
                                } else {
                                  return (
                                    <>
                                      <option value={null}>
                                        {" "}
                                        Buy{" "}
                                        {Number(items.minimum_order_amount) -
                                          Number(allTotals?.grandTotal)}{" "}
                                        ₹ More and Get{" "}
                                        {Math.round(items.coupon_discount)}{" "}
                                        {items.coupon_type == "amount"
                                          ? "₹ OFF"
                                          : "% OFF"}{" "}
                                      </option>
                                    </>
                                  );
                                }
                              })}
                            </select>
                          </h5>
                        </div>
                        <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                          <Checkbox
                            onChange={(e) =>
                              setAllTotals({
                                ...allTotals,
                                round_off: e.target.checked,
                              })
                            }
                          >
                            <h5
                              style={{
                                fontSize: 14,
                                margin: 0,
                                fontWeight: "700",
                                color: "black",
                              }}
                            >
                              Round Off
                            </h5>
                          </Checkbox>
                        </div>

                        <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "700",
                              color: "black",
                            }}
                          >
                            Payment Mode
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            <select
                              class="form-select "
                              onChange={(e) =>
                                setRestInfo({
                                  ...restInfo,
                                  payment_mode: e.target.value,
                                })
                              }
                              aria-label="Default select example"
                            >
                              <option value="Cash">Cash</option>
                              <option value="UPI">UPI</option>
                              <option value="Bank Transfer">
                                Bank Transfer
                              </option>
                            </select>
                          </h5>
                        </div>
                        <div className="py-3 px-5 mt-5">
                          {isLoading ? (
                            <a
                              href="javascript:void(0)"
                              className="text-success"
                            >
                              <i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" />{" "}
                              Wait..{" "}
                            </a>
                          ) : (
                            <button
                              type="button"
                              onClick={submitSale}
                              class="btn btn-success waves-effect waves-light w-100 "
                            >
                              Submit
                            </button>
                          )}

                          <ReactToPrint
                            trigger={() => (
                              <button
                                type="button"
                                class="btn btn-warning waves-effect waves-light w-100 mt-3"
                              >
                                Print
                              </button>
                            )}
                            content={() => componentRef.current}
                            // print={() => console.log("hey nanveet")}
                          />
                        </div>
                      </div>
                      <div
                        className="col-md-6 px-0 py-3"
                        style={{ borderLeft: "1px solid #d9d9d9" }}
                      >
                        <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            Pre Discount
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            -<BiRupee />{" "}
                            {allTotals?.discount?.toLocaleString("en-IN")}
                          </h5>
                        </div>

                        <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            Sub Total
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            <BiRupee />{" "}
                            {allTotals?.subTotal?.toLocaleString("en-IN")}
                          </h5>
                        </div>

                        <div className="d-flex py-3 px-5 justify-content-between align-items-center">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            SGST
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            +<BiRupee />{" "}
                            {allTotals?.sGstTotal?.toLocaleString("en-IN")}
                          </h5>
                        </div>
                        <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            CGST
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            +<BiRupee />{" "}
                            {allTotals?.cGstTotal?.toLocaleString("en-IN")}
                          </h5>
                        </div>

                        {useCouponData.is_coupon_applied == 1 ? (
                          <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                            <h5
                              style={{
                                fontSize: 14,
                                margin: 0,
                                fontWeight: "600",
                                color: "black",
                              }}
                            >
                              Extra Discount
                            </h5>
                            <h5
                              style={{
                                fontSize: 14,
                                margin: 0,
                                fontWeight: "600",
                                color: "black",
                              }}
                            >
                              -<BiRupee />{" "}
                              {allTotals?.coupon_discount_value?.toLocaleString(
                                "en-IN"
                              )}
                            </h5>
                          </div>
                        ) : null}

                        <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "700",
                              color: "black",
                            }}
                          >
                            Total Amount
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            <BiRupee />{" "}
                            {allTotals?.grandTotal?.toLocaleString("en-IN")}
                          </h5>
                        </div>

                        <div className="d-flex pt-3 px-5 justify-content-between align-items-center">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "700",
                              color: "black",
                            }}
                          ></h5>
                          {/* <h5 style={{ fontSize: 14, margin: 0, fontWeight: "600", color: "black" }}>{allTotals?.grandTotal.toLocaleString('en-IN')}</h5> */}
                          <Checkbox
                            onChange={(e) =>
                              setAllTotals({
                                ...allTotals,
                                fully_paid: e.target.checked,
                              })
                            }
                          >
                            <h5
                              style={{
                                fontSize: 14,
                                margin: 0,
                                fontWeight: "700",
                                color: "black",
                              }}
                            >
                              Mark as fully paid
                            </h5>
                          </Checkbox>
                        </div>
                        <div className="d-flex py-3 px-5 justify-content-between align-items-center border-bottom">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            Amount Paid
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            <BiRupee />
                            <input
                              type="number"
                              disabled={allTotals?.fully_paid}
                              onChange={(e) =>
                                setAllTotals({
                                  ...allTotals,
                                  amount_paid: e.target.value,
                                })
                              }
                              className="invoice_input"
                              style={{ width: "5rem" }}
                              placeholder="0"
                            />
                          </h5>
                        </div>
                        <div className="d-flex pt-3 px-5 justify-content-between align-items-center">
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "green",
                            }}
                          >
                            Outstanding
                          </h5>
                          <h5
                            style={{
                              fontSize: 14,
                              margin: 0,
                              fontWeight: "600",
                              color: "green",
                            }}
                          >
                            <BiRupee />{" "}
                            {allTotals?.outstanding
                              ? allTotals?.outstanding.toLocaleString("en-IN")
                              : 0}
                          </h5>
                        </div>
                      </div>
                    </div>
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
      {/* section-to-print */}

      <div id="section-to-print" ref={componentRef}>
        <div className="POS_header px-1">
          {/* <div className=" d-flex justify-content-center">
                        <img src={Store_bussiness_info?.logo} alt="user-img" className="prinerLogo rounded-circle" />
                    </div> */}

          <div className="col-auto ">
            <Text fontWeight={"700"} fontSize={24} mb={0}>
              {Store_bussiness_info?.buss_name}
            </Text>
            {/* <p className="text-dark-75">{Store_bussiness_info?.tag_line}</p> */}

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
              {BillDate.toLocaleDateString("en-US", DateOptions)} ,{" "}
              {formatAMPM(BillDate)}
            </Text>

            <Text>
              Mo{" "}
              {selectedCustomer?.mobile
                ? selectedCustomer?.mobile
                : "----------"}
            </Text>
          </Box>
          {/* <tr>
                            <td className='text-center'>Bill No : <span>{restInfo.order_no}</span></td>
                        </tr> */}
        </div>

        <table class="items">
          <thead>
            <tr>
              <th colSpan={2} class="">
                Item
              </th>
              <th class="">QTY</th>
              <th class="">MRP</th>
              <th class="">RATE</th>
              <th class="">AMT</th>
            </tr>
          </thead>

          <tbody>
            {addedItems.map((items, index) => {
              return (
                <tr>
                  <td colSpan={2}>
                    {items?.product_full_name?.substring(0, 14)}
                  </td>
                  <td>{items.billing_quantity}</td>
                  <td>{items.price}</td>
                  <td class="price">{items.sale_price}</td>
                  <td class="price">{items.amount_total}</td>
                </tr>
              );
            })}

            <tr>
              <td colspan="5" class="sum-up line">
                Pre Discount
              </td>
              <td class="line price">
                - {(allTotals?.discount).toLocaleString("en-IN")}
              </td>
            </tr>

            {/* <tr>
                            <td colspan="3" class="sum-up ">Subtotal</td>
                            <td class=" price">{allTotals?.subTotal?.toLocaleString('en-IN')}</td>
                        </tr> */}
            {/* <tr>
                            <td colspan="3" class="sum-up">GST</td>
                            <td class="price">{(allTotals?.sGstTotal + allTotals?.cGstTotal).toLocaleString('en-IN')}</td>
                        </tr> */}

            {useCouponData.is_coupon_applied == 1 ? (
              <tr>
                <td colspan="5" class="sum-up">
                  Extra Discount
                </td>
                <td class="price">
                  {(allTotals?.coupon_discount_value).toLocaleString("en-IN")}
                </td>
              </tr>
            ) : null}

            <tr>
              <th colspan="5" class="total text">
                Total
              </th>
              <th class="total price">
                {allTotals?.grandTotal.toLocaleString("en-IN")}
              </th>
            </tr>
          </tbody>
        </table>
        <section>
          <p>
            Paid by : <span>{restInfo.payment_mode}</span>
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

//
