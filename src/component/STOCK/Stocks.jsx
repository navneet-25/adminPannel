const Stocks = () => {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">Product</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="row">

                            <div className="col-sm-6 border-right">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Form Input Spin</h4>
                                </div>{/* end card header */}
                            </div>
                            <div className="col-sm-6">
                                <div className="card-header border-left">
                                    <h4 className="card-title mb-0">Form Input Spin</h4>
                                </div>{/* end card header */}
                            </div>

                        </div>
                        <div className="card-body">
                            <div>
                                <div className="row gy-4">
                                    <div className="col-sm-6">
                                        <div>
                                            <h5 className="fs-13 fw-medium text-muted">Default</h5>
                                            <div className="input-step">
                                                <button type="button" className="minus">–</button>
                                                <input type="number" className="product-quantity" defaultValue={2} min={0} max={100} readOnly />
                                                <button type="button" className="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div>
                                            <h5 className="fs-13 fw-medium text-muted">Light</h5>
                                            <div className="input-step light">
                                                <button type="button" className="minus">–</button>
                                                <input type="number" className="product-quantity" defaultValue={5} min={0} max={100} readOnly />
                                                <button type="button" className="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* end card-body */}
                    </div>{/* end card */}
                </div>
                {/* end col */}
            </div>

        </>
    )

}

export default Stocks;