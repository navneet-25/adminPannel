import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ContextData from "../../context/MainContext";
import { useQuery } from "react-query";

import URLDomain from "../../URL";
import { ImportNewProduct } from "./Import/import-new-product";
import { AddVendorForm } from "./Add/vendor-add-form";
// import { AddUnitForm } from "./Add/unit-add-form";
// import { vendorDataComp } from "./Update/vendorDataComp";
// import { UpdateProductStockComp } from "./Update/UpdateProductStockComp";
import { UpdateVendor } from "./Update/UpdateVendor";
import { Stack, Skeleton } from "@chakra-ui/react";

import SweetAlert from "react-bootstrap-sweetalert";

// import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import swal from "sweetalert";

import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from "react-bs-datatable";

// Create table headers consisting of 4 columns.
import Cookies from "universal-cookie";

const cookies = new Cookies();

const VendorManagement = () => {
  const [delID, setProductDelID] = useState(0);
  const [isDeletAction, setDeletAction] = useState(false);
  const [vendorData, getVendorData] = useState({});
  // const [downloadBarcode, setdownloadBarcode] = useState({});
  const [showData, setShowData] = useState(null);

  const [isDataLoding, setisDataLoding] = useState(true);

  const adminStoreId = cookies.get("adminStoreId");
  const adminId = cookies.get("adminId");

  async function fetchData() {
    const data = await fetch(URLDomain + "/APP-API/Billing/vendor_list_load", {
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
    data: vendor_list_load,
    isError,
    isLoading: isLoadingAPI,
    isFetching,
  } = useQuery({
    queryKey: ["vendor_list_load"],
    queryFn: (e) => fetchData(),
  });

  useEffect(() => {
    setShowData([]);
    console.log("vendor list", vendor_list_load, isLoadingAPI);
    if (vendor_list_load) {
      setShowData(vendor_list_load.store_vendor_list);
      setisDataLoding(false);
    }
  }, [vendor_list_load, isLoadingAPI]);

  const ChangeStatus = () => {
    setProductDelID(true);
  };

  const STORY_HEADERS = [
    {
      prop: "firm_name",
      title: "Firm Name",
      isFilterable: true,
      isSortable: true,
      cell: (row) => {
        return <p className="text-dark">{row.firm_name}</p>;
      },
    },

    {
      prop: "name",
      title: "Contact Name",
      isFilterable: true,
      isSortable: true,
      cell: (row) => {
        return <p className="text-dark">{row.name}</p>;
      },
    },
    {
      prop: "mobile",
      title: "Contact Mobile",
      isFilterable: true,
      isSortable: true,
      cell: (row) => {
        return <p className="text-dark">{row.mobile}</p>;
      },
    },

    {
      prop: "address",
      title: "Address",
      isFilterable: true,
      isSortable: true,
      cell: (row) => {
        return (
          <p className="text-dark">
            {row.address} {row.city}{" "}
          </p>
        );
      },
    },

    {
      prop: "deal_items",
      title: "Items",
      isFilterable: true,
      isSortable: true,
      cell: (row) => {
        return <p className="text-dark">{row.deal_items}</p>;
      },
    },

    {
      prop: "Stock",
      title: "Action",

      cell: (row) => {
        return (
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Action
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => getVendorData(row)}
                data-bs-toggle="modal"
                data-bs-target="#UpdateProductPricing"
              >
                Make Payment
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => getVendorData(row)}
                data-bs-toggle="modal"
                data-bs-target="#UpdateProductPricing"
              >
                Purchase History
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => getVendorData(row)}
                data-bs-toggle="modal"
                data-bs-target="#UpdateProductStock"
              >
                Payment History
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => getVendorData(row)}
                data-bs-toggle="modal"
                data-bs-target="#updateVendor"
              >
                Edit Vendor
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      },
    },
  ];

  const deleteAction = (delete_id, product_name) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Product !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((deleteProductFromStore) => {
      if (deleteProductFromStore) {
        fetch(URL + "/APP-API/Billing/deleteStoreProduct", {
          method: "POST",
          header: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            delete_id: delete_id,
            product_name: product_name,
            store_id: adminStoreId,
            adminId: adminId,
          }),
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log("respond delete", responseJson);
            if (responseJson.delete) {
            } else {
            }

            for (let i = 0; i < 10; i++) {
              document.getElementsByClassName("btn-close")[i].click();
            }
          })
          .catch((error) => {
            //  console.error(error);
          });

        // reloadData();

        swal("Poof! Your Product  has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Product is safe!");
      }
    });
  };
  const deleteProductFromStore = () => {
    // console.log('delete_id',delID)
    alert("done");
  };

  const deletePlot = () => {
    console.log("kit kat", delID);
    fetch(URL + "/APP-API/App/deletePlot", {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: delID,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("respond", responseJson);
        if (responseJson.deleted) {
          //   getToast({ title: "Plot Deleted", dec: "", status: "error" });
        } else {
          alert("Error");
        }
        for (let i = 0; i < 10; i++) {
          document.getElementsByClassName("btn-close")[i].click();
        }
      })
      .catch((error) => {
        //  console.error(error);
      });
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0">Vendor List</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row g-2">
              {isFetching && "fetching..."}

              <div className="col-sm-auto ms-auto">
                <div className="list-grid-nav hstack gap-1">
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#addVendor"
                  >
                    <i className="ri-add-fill me-1 align-bottom" /> Add Vendor
                  </button>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
        </div>

        <div className="row"></div>

        <div className="row">
          <div className="col-lg-12">
            {isDataLoding ? (
              <Stack>
                <Skeleton height="100px" />
                <Skeleton height="100px" />
                <Skeleton height="100px" />
              </Stack>
            ) : (
              <div className="card">
                <div className="card-body">
                  <div id="customerList">
                    <div className="table-responsive table-card mb-1">
                      <DatatableWrapper
                        body={showData}
                        headers={STORY_HEADERS}
                        paginationOptionsProps={{
                          initialState: {
                            rowsPerPage: 10,
                            options: [10, 15, 20],
                          },
                        }}
                      >
                        <Row className="mb-4 p-2">
                          <Col
                            xs={12}
                            lg={4}
                            className="d-flex flex-col justify-content-end align-items-end"
                          >
                            <Filter />
                          </Col>
                          <Col
                            xs={12}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
                          >
                            <PaginationOptions />
                          </Col>
                          <Col
                            xs={12}
                            sm={6}
                            lg={4}
                            className="d-flex flex-col justify-content-end align-items-end"
                          >
                            <Pagination />
                          </Col>
                        </Row>
                        <Table className="table  table-hover">
                          <TableHeader />
                          <TableBody />
                        </Table>
                      </DatatableWrapper>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="modal fade"
          id="addVendor"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered w-50">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">
                  Add Vendor
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <AddVendorForm />
              </div>
            </div>
            {/*end modal-content*/}
          </div>
          {/*end modal-dialog*/}
        </div>
        {/*end modal*/}

        <div
          className="modal fade"
          id="updateVendor"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered w-50">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">
                  Edit Vendor
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <UpdateVendor vendorDetails={vendorData} />
              </div>
            </div>
            {/*end modal-content*/}
          </div>
          {/*end modal-dialog*/}
        </div>
        {/*end modal*/}

        <svg className="bookmark-hide">
          <symbol
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="var(--color-svg)"
            id="icon-star"
          >
            <path
              strokeWidth=".4"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </symbol>
        </svg>
      </div>
    </>
  );
};

export default VendorManagement;
