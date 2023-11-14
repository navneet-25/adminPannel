import { FcCalendar } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import URLDomain from "../../../URL";
import ContextData from "../../../context/MainContext";

export const EnterMobileNumber = ({
  setSaledate,
  setSelectCustomer,
  Saledate,
  selectedCustomer,
  customerShoppingDetails,
  setcustomerShoppingDetails,
}) => {
  const { store_login_user } = useContext(ContextData);

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

  return (
    <>
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
                <h4 className="mb-0 text-center mb-4">Enter Mobile Number</h4>
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
                      <strong> {customerShoppingDetails?.customer_type}</strong>
                    </h5>
                    <h5 className="">
                      Times:{" "}
                      <strong>
                        {" "}
                        {customerShoppingDetails?.no_of_shopping_time}
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
                      Mobile: <strong> {selectedCustomer?.mobile}</strong>
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
    </>
  );
};

//
