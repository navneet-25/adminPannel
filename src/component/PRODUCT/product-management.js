import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ContextData from "../../context/MainContext";
import URL from '../../URL';

import { ImportNewProduct } from "./Import/import-new-product";
import { AddProductForm } from "./Add/product-add-form";
import { AddUnitForm } from "./Add/unit-add-form";
import { UpdateProductPriceComp } from "./Update/UpdateProductPriceComp";
import { UpdateProductStockComp } from "./Update/UpdateProductStockComp";
import { DownloadBarcode } from "./Update/DownloadBarcode";

import SweetAlert from 'react-bootstrap-sweetalert';

// import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

import swal from 'sweetalert';


import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from "react-bs-datatable";

// Create table headers consisting of 4 columns.
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const ProductManagement = () => {
    const { storeProductsData, removeDataToCurrentGlobal, getToast, reloadData } = useContext(ContextData);
    const [delID, setProductDelID] = useState(0);
    const [isDeletAction, setDeletAction] = useState(false);
    const [UpdateProductPrice, setUpdateProductPrice] = useState({});
    // const [downloadBarcode, setdownloadBarcode] = useState({});
    const [showData, setShowData] = useState(storeProductsData);

    const adminStoreId = cookies.get("adminStoreId");
    const adminId = cookies.get("adminId");




    useEffect(() => {

   
        setShowData(storeProductsData);
    }, [storeProductsData]);

    const ChangeStatus = () => {

        setProductDelID(true)

    };

    const STORY_HEADERS = [

        {
            prop: "product_name",
            title: "Product",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                    <p className="text-primary">{row.product_name} {row.product_size} {row.product_unit}</p>
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
            prop: "stock_quantity",
            title: "Store Stock",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                    <p className="text-danger">{row.stock_quantity}</p>
                );
            }
        },
        {
            prop: "stok_warehouse_qty",
            title: "Warehouse Stock",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                    <p className="text-danger">{row.stok_warehouse_qty}</p>
                );
            }
        },


        {
            prop: "child_category_name",
            title: "Category",
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
            prop: "purchase_price",
            title: "Purchase Price",
            isFilterable: true,
            isSortable: true,
            cell: (row) => {
                return (
                    <p className="text-danger"> ₹ {row.purchase_price}</p>
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
                    <p className="text-dark"> ₹ {row.price}</p>
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
            prop: "Stock",
            title: "Action",

            cell: (row) => {


                return (
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Action
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setUpdateProductPrice(row)} data-bs-toggle="modal" data-bs-target="#UpdateProductPricing" >Update Price</Dropdown.Item>
                            <Dropdown.Item onClick={() => setUpdateProductPrice(row)} data-bs-toggle="modal" data-bs-target="#UpdateProductStock" >Update Stock</Dropdown.Item>
                            <Dropdown.Item onClick={() => setUpdateProductPrice(row)} data-bs-toggle="modal" data-bs-target="#downloadBarcode" >Download Barcode</Dropdown.Item>
                            <Dropdown.Item onClick={() => deleteAction(row.id, row.product_name + " " + row.product_size + " " + row.product_unit)}>Delete Product</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                );


            }
        },

    ];

    const deleteAction = (delete_id, product_name) => {


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Product !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((deleteProductFromStore) => {



                if (deleteProductFromStore) {




                    fetch(URL + "/APP-API/Billing/deleteStoreProduct", {
                        method: 'POST',
                        header: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            delete_id: delete_id,
                            product_name: product_name,
                            store_id: adminStoreId,
                            adminId: adminId
                        })
                    }).then((response) => response.json())
                        .then((responseJson) => {
                            console.log("respond delete", responseJson)
                            if (responseJson.delete) {
                                getToast({ title: "Product Deleted ", dec: "Successful", status: "success" });

                            } else {
                                getToast({ title: "ERROR", dec: "ERROR", status: "error" });
                            }

                            for (let i = 0; i < 10; i++) {
                                document.getElementsByClassName("btn-close")[i].click();
                            }
                        })
                        .catch((error) => {
                            //  console.error(error); 
                        });

                    reloadData();



                    swal("Poof! Your Product  has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Product is safe!");
                }
            });

    }
    const deleteProductFromStore = () => {

        // console.log('delete_id',delID)
        alert("done")
    }


    const deletePlot = () => {
        console.log("kit kat", delID);
        fetch(URL + "/APP-API/App/deletePlot", {
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


                <div className="modal fade" id="UpdateProductPricing" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered w-50">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="myModalLabel">Update Product Price</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <UpdateProductPriceComp productDetails={UpdateProductPrice} />
                            </div>
                        </div>{/*end modal-content*/}
                    </div>{/*end modal-dialog*/}
                </div>{/*end modal*/}

                <div className="modal fade" id="UpdateProductStock" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered w-50">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="myModalLabel">Update Product Stock</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <UpdateProductStockComp productDetails={UpdateProductPrice} />
                            </div>
                        </div>{/*end modal-content*/}
                    </div>{/*end modal-dialog*/}
                </div>{/*end modal*/}



                <div className="modal fade" id="downloadBarcode" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered w-50">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="myModalLabel">Barcode</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <DownloadBarcode productDetails={UpdateProductPrice} />
                            </div>
                        </div>{/*end modal-content*/}
                    </div>{/*end modal-dialog*/}
                </div>{/*end modal*/}

                <svg className="bookmark-hide">
                    <symbol viewBox="0 0 24 24" stroke="currentColor" fill="var(--color-svg)" id="icon-star"><path strokeWidth=".4" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></symbol>
                </svg>
            </div>
        </>
    )

}

export default ProductManagement;