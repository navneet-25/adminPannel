import React, { useState, useEffect, useRef } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { BiSearch } from "react-icons/bi";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useQuery } from "react-query";

import URLDomain from "../../../URL";
import Cookies from "universal-cookie";
import "primereact/resources/themes/lara-light-cyan/theme.css";
const cookies = new Cookies();

export const SaleDataTable = () => {
  const [Sale, setSale] = useState(null);
  const navigate = useNavigate();

  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    order_status: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [isDataLoding, setisDataLoding] = useState(true);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const adminStoreId = cookies.get("adminStoreId");
  const adminId = cookies.get("adminId");

  async function fetchData() {
    const data = await fetch(URLDomain + "/APP-API/Billing/sale_history", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        store_id: adminStoreId,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => responseJson);

    return data;
  }

  const {
    data: offline_sale_history,
    isError,
    isLoading: isLoadingAPI,
  } = useQuery({
    queryKey: ["offline_sale_history"],
    queryFn: (e) => fetchData(),
  });

  useEffect(() => {
    setSale([]);
    console.log("search product", offline_sale_history, isLoadingAPI);
    if (offline_sale_history) {
      setSale(offline_sale_history.store_customer_purchase_record);
      setisDataLoding(false);
    }
  }, [offline_sale_history, isLoadingAPI]);

  //   const cols = [
  //     { field: "customer_mobile", header: "Mobile" },
  //     { field: "order_id", header: "ORDER NO" },
  //     { field: "total_payment", header: "Cost" },
  //     { field: "plateform", header: "Plateform" },
  //     { field: "order_status", header: "Status" },
  //     { field: "date", header: "Date" },
  //   ];

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.order_status}
        severity={getSeverity(rowData.order_status)}
      ></Tag>
    );
  };

  const ActionBodyTemplate = (rowData) => {
    return (
      <button
        onClick={() =>
          navigate(
            "/online/online-sales-history-record/" +
              rowData.order_id +
              "/" +
              rowData.customer_address_id
          )
        }
        className="btn btn-dark"
      >
        <i className="ri-eye me-1 align-bottom" /> BILL
      </button>
    );
  };

  const getSeverity = (value) => {
    switch (value) {
      case "Placed":
        return "dark";
      case "Confirmed":
        return "success";
      case "Preparing for dispatch":
        return "warning";

      case "On the way":
        return "info";
      case "Delivered":
        return "primary";
      case "Canceled":
        return "danger";
      case "Sold":
        return "success";
      default:
        return null;
    }
  };

  const [statuses] = useState([
    "Placed",
    "Confirmed",
    "Preparing for dispatch",
    "On the way",
    "Delivered",
    "Canceled",
    "Sold",
  ]);

  const statusRowFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.order_status}
        options={statuses}
        onChange={(e) => options.filterApplyCallback(e.value)}
        itemTemplate={statusItemTemplate}
        placeholder="Select Status"
        className="p-column-filter"
        showClear
        style={{ minWidth: "5rem" }}
      />
    );
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const statusItemTemplate = (option) => {
    return <Tag value={option} severity={getSeverity(option)} />;
  };

  const renderHeader = () => {
    return (
      <div className="row flex ">
        <div className="col-sm-4">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <BiSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search in Data"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
            />
          </InputGroup>
        </div>
        <div className="col-sm-4">
          <Dropdown
            value={statuses.order_status}
            options={statuses}
            onChange={(e) => statuses.filterApplyCallback(e.value)}
            itemTemplate={statusItemTemplate}
            placeholder="Select Year"
            className="p-column-filter"
            showClear
            style={{ minWidth: "5rem" }}
          />

          <Dropdown
            value={statuses.order_status}
            options={statuses}
            onChange={(e) => statuses.filterApplyCallback(e.value)}
            itemTemplate={statusItemTemplate}
            placeholder="Select Year"
            className="p-column-filter"
            showClear
            style={{ minWidth: "5rem" }}
          />
        </div>
        <div className="col-sm-4"></div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={Sale}
        paginator
        rows={5}
        header={header}
        selectionMode="single"
        sortMode="multiple"
        // sortField="date"
        removableSort
        stateStorage="session"
        stateKey="dt-state-demo-local"
        emptyMessage="No Sale found."
        tableStyle={{ minWidth: "50rem" }}
        filters={filters}
        filterDisplay="row"
        // loading={isFetching}
        // header={header}
      >
        <Column
          field="customer_mobile"
          header="Mobile"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="order_id"
          header="Order No"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="plateform"
          header="Plateform"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="total_payment"
          header="Payment"
          sortable
          style={{ width: "25%" }}
        ></Column>

        <Column
          field="date"
          header="Date"
          sortable
          style={{ width: "25%" }}
        ></Column>

        <Column
          field="order_status"
          header="Status"
          body={statusBodyTemplate}
          sortable
          style={{ width: "25%" }}
          showFilterMenu={false}
          filterMenuStyle={{ width: "14rem" }}
          filter
          filterElement={statusRowFilterTemplate}
        ></Column>

        <Column
          field=""
          header="Action"
          body={ActionBodyTemplate}
          sortable
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
};
