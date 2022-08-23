import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ContextData from "../../context/MainContext";
import URLDomain from "../../URL";

import { ImportNewProduct } from "./import-new-product";
import { AddProductForm } from "./product-add-form";
import { AddUnitForm } from "./unit-add-form";


import  SweetAlert from 'react-bootstrap-sweetalert';

import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table  } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


 
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from "react-bs-datatable";

// Create table headers consisting of 4 columns.


 

const ProductManagement = () => {
    const { storeProductsData, removeDataToCurrentGlobal, getToast } = useContext(ContextData);
    const [delID, setDelID] = useState(false);
    const [editablePlot, setEditablePlot] = useState({});
    const [showData, setShowData] = useState(storeProductsData);



    useEffect(() => {
        setShowData(storeProductsData);
    }, [storeProductsData]);

    const ChangeStatus = () => {

        setDelID(true)

    };

    const STORY_HEADERS = [

        {
            prop: "product_name",
            title: "Product",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                   <p className="text-primary">{row.product_name}</p>
                );
            }
        },
        {
            prop: "product_size",
            title: "Size",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                   <p className="text-dark">{row.product_size} {row.product_unit}</p>
                );
            }
        },
        {
            prop: "parent_category_name",
            title: "Category",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                   <p className="text-success">{row.parent_category_name}</p>
                );
            }
        },
        {
            prop: "child_category_name",
            title: "Child Category",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                   <p className="text-success">{row.child_category_name}</p>
                );
            }
        },
        {
            prop: "brand_name",
            title: "Brand",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                   <p className="text-dark">{row.brand_name}</p>
                );
            }
        },
        {
            prop: "price",
            title: "Price",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                   <p className="text-danger"> ₹ {row.price}</p>
                );
            }
        },
        {
            prop: "discount_in_rs",
            title: "Discount",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                   <p className="text-danger"> ₹ {row.discount_in_rs}</p>
                );
            }
        },
        {
            prop: "sale_price",
            title: "Sale Price",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                   <p className="text-danger"> ₹ {row.sale_price}</p>
                );
            }
        },
      {
            prop: "image",
            title: "Image",

            cell: (row) => {
                return (
                    <img src={row.product_image} alt="" style={{ height: '40px', borderRadius: '14px' }} />
                );
            }
        },


        {
            prop: "Stock",
            title: "Stock",

            cell: (row) => {


                return (
                    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
       Action 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Update Price</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Update Stock</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Delete Product</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                );


            }
        },
        
    ];

    const deletePlot = () => {
        console.log("kit kat", delID);
        fetch(URLDomain + "/APP-API/App/deletePlot", {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: delID
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("respond", responseJson)
                if (responseJson.deleted) {
                    removeDataToCurrentGlobal({ type: "storeProductsData", payload: delID, where: "id" });
                    getToast({ title: "Plot Deleted", dec: "", status: "error" });
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
    }


    return (
        <>

            {delID ? (
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    // onConfirm={this.deleteFile}
                    // onCancel={this.onCancel}
                    focusCancelBtn
                >
                    You will not be able to recover this imaginary file!
                </SweetAlert>
            ) : null}
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0">product List</h4>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row g-2">

                            <div className="col-sm-auto ms-auto">
                                <div className="list-grid-nav hstack gap-1">
                                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#importproduct"><i className="ri-add-fill me-1 align-bottom" /> Import product   </button>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUnits"><i className="ri-add-fill me-1 align-bottom" /> Add Units</button>
                                    <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addproducts"><i className="ri-add-fill me-1 align-bottom" /> Add Products</button>
                                </div>
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                    </div>
                </div>

                <div className="row">

                </div>

                <div className="row">
                    <div className="col-lg-12">
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
                                                    options: [10, 15, 20]
                                                }
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
                                            <Table
                                                className="table  table-hover">
                                                <TableHeader />
                                                <TableBody />
                                            </Table>
                                        </DatatableWrapper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <div className="modal fade" id="importproduct" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered w-50">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="myModalLabel">Import Product</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <ImportNewProduct />
                                        </div>
                                    </div>{/*end modal-content*/}
                                </div>{/*end modal-dialog*/}
                            </div>{/*end modal*/}
                        </div>
                    </div>{/* end col */}
                </div>{/*end row*/}

                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <div className="modal fade" id="addproducts" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="myModalLabel">Add Product</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <AddProductForm />
                                        </div>
                                    </div>{/*end modal-content*/}
                                </div>{/*end modal-dialog*/}
                            </div>{/*end modal*/}
                        </div>
                    </div>{/* end col */}
                </div>{/*end row*/}

                <div className="row"> 
                    <div className="col-lg-12">
                        <div>
                            <div className="modal fade" id="addUnits" tabIndex={-1} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered w-50">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="myModalLabel">Add Unit</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <AddUnitForm />
                                        </div>
                                    </div>{/*end modal-content*/}
                                </div>{/*end modal-dialog*/}
                            </div>{/*end modal*/}
                        </div>
                    </div>{/* end col */}
                </div>{/*end row*/}

                <svg className="bookmark-hide">
                    <symbol viewBox="0 0 24 24" stroke="currentColor" fill="var(--color-svg)" id="icon-star"><path strokeWidth=".4" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></symbol>
                </svg>
            </div>
        </>
    )

}

export default ProductManagement;