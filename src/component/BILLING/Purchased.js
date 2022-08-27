import { BiRupee } from 'react-icons/bi';
import { AiOutlinePercentage } from 'react-icons/ai';



export const Purchased = () => {


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
                                    <div className="col-xl-12">
                                        <div className="table-responsive mt-4 mt-xl-0">
                                            <table className="table table-hover table-striped align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">NO</th>
                                                        <th scope="col">ITEMS</th>
                                                        <th scope="col">QTY</th>
                                                        <th scope="col">PRICE/ITEM</th>
                                                        <th scope="col">DISCOUNT</th>
                                                        <th scope="col">TAX</th>
                                                        <th scope="col">AMMOUNT</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td width={"10%"} className="fw-medium">01</td>
                                                        <td width={"40%"} >Product Name Must be long so it cant fit inside</td>
                                                        <td width={"10%"} ><input type="number" className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                        <td width={"10%"} ><input type="number" className="invoice_input" style={{ width: "6rem" }} placeholder="0" /></td>
                                                        <td width={"10%"}>
                                                            <div>
                                                                <div>
                                                                    <BiRupee />
                                                                    <input type="number" className="invoice_input" style={{ width: "3rem" }} placeholder="0" />
                                                                </div>
                                                                <div className="mt-1">
                                                                    <AiOutlinePercentage />
                                                                    <input type="number" className="invoice_input" style={{ width: "3rem" }} placeholder="0" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td width={"10%"} ><input type="number" className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                        <td width={"10%"} ><input type="number" className="invoice_input" style={{ width: "3rem" }} placeholder="0" /></td>
                                                    </tr>
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