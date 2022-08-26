

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
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Hoverable Rows</h4>
                            <div className="flex-shrink-0">
                                <div className="form-check form-switch form-switch-right form-switch-md">
                                    <label htmlFor="hover-rows-showcode" className="form-label text-muted">Show
                                        Code</label>
                                    <input className="form-check-input code-switcher" type="checkbox" id="hover-rows-showcode" />
                                </div>
                            </div>
                        </div>{/* end card header */}
                        <div className="card-body">
                            <p className="text-muted">Use <code>table-hover</code> class to enable a hover state on
                                table rows within a &lt;tbody&gt;.</p>
                            <div className="live-preview">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="table-responsive">
                                            <table className="table table-hover align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" style={{ width: '25px' }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="checkAll" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <th scope="col">Order ID</th>
                                                        <th scope="col">Shop</th>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option1" defaultChecked />
                                                            </div>
                                                        </th>
                                                        <td>#541254265</td>
                                                        <td>Amezon</td>
                                                        <td>Cleo Carson</td>
                                                        <td>$4,521</td>
                                                        <td><a href="javascript:void(0);"><i className="ri-download-2-line fs-17 lh-1 align-middle" /></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option1" defaultChecked />
                                                            </div>
                                                        </th>
                                                        <td>#744145235</td>
                                                        <td>Shoppers</td>
                                                        <td>Juston Eichmann</td>
                                                        <td>$7,546</td>
                                                        <td><a href="javascript:void(0);"><i className="ri-download-2-line fs-17 lh-1 align-middle" /></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox4" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td>#9855126598</td>
                                                        <td>Flipkart</td>
                                                        <td>Bettie Johson</td>
                                                        <td>$1,350</td>
                                                        <td><a href="javascript:void(0);"><i className="ri-download-2-line fs-17 lh-1 align-middle" /></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td>#847512653</td>
                                                        <td>Shoppers</td>
                                                        <td>Maritza Blanda</td>
                                                        <td>$4,521</td>
                                                        <td><a href="javascript:void(0);"><i className="ri-download-2-line fs-17 lh-1 align-middle" /></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xl-6">
                                        <div className="table-responsive mt-4 mt-xl-0">
                                            <table className="table table-hover table-striped align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Invoice</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td>Basic Plan</td>
                                                        <td>$860</td>
                                                        <td>Nov 22, 2021</td>
                                                        <td><i className="ri-checkbox-circle-line align-middle text-success" />
                                                            Subscribed</td>
                                                        <td>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" defaultChecked />
                                                                <label className="form-check-label ms-2" htmlFor="SwitchCheck1">Yes/No</label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td>Premium Plan</td>
                                                        <td>$1200</td>
                                                        <td>Nov 10, 2021</td>
                                                        <td><i className="ri-close-circle-line align-middle text-danger" />
                                                            Unsubscribed</td>
                                                        <td>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck2" />
                                                                <label className="form-check-label ms-2" htmlFor="SwitchCheck2">Yes/No</label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td>Basic Plan</td>
                                                        <td>$860</td>
                                                        <td>Nov 19, 2021</td>
                                                        <td><i className="ri-checkbox-circle-line align-middle text-success" />
                                                            Subscribed</td>
                                                        <td>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck3" />
                                                                <label className="form-check-label ms-2" htmlFor="SwitchCheck3">Yes/No</label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td>Corporate Plan</td>
                                                        <td>$1599</td>
                                                        <td>Nov 22, 2021</td>
                                                        <td><i className="ri-checkbox-circle-line align-middle text-success" />
                                                            Subscribed</td>
                                                        <td>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck4" defaultChecked />
                                                                <label className="form-check-label ms-2" htmlFor="SwitchCheck4">Yes/No</label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                            </div>
                            <div className="d-none code-view">
                                <pre className="language-markup" style={{ height: '275px' }}><code>&lt;!-- Hoverable Rows --&gt;{"\n"}&lt;table class="table table-hover table-nowrap mb-0"&gt;{"\n"}{"    "}&lt;thead&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="col"&gt;{"\n"}{"                "}&lt;div class="form-check"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" id="checkAll" value="option1"&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Order ID&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Shop&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Customer&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Price&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Action&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;{"\n"}{"                "}&lt;div class="form-check"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" checked&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;#541254265&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Amezon&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Cleo Carson&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;$4,521&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;&lt;a href="javascript:void(0);"&gt;&lt;i class="ri-download-2-line"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;{"\n"}{"                "}&lt;div class="form-check"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" checked&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;#744145235&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Shoppers&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Juston Eichmann&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;$7,546&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;&lt;a href="javascript:void(0);"&gt;&lt;i class="ri-download-2-line"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;{"\n"}{"                "}&lt;div class="form-check"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1"&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;#9855126598&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Flipkart&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Bettie Johson&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;$1,350&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;&lt;a href="javascript:void(0);"&gt;&lt;i class="ri-download-2-line"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;{"\n"}{"                "}&lt;div class="form-check"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1"&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;#847512653&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Shoppers&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Maritza Blanda&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;$4,521&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;&lt;a href="javascript:void(0);"&gt;&lt;i class="ri-download-2-line"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;</code>{"\n"}{"\n"}<code>&lt;table class="table table-hover table-striped align-middle table-nowrap mb-0"&gt;{"\n"}{"    "}&lt;thead&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Id&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Invoice&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Amount&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Date&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Status&lt;/th&gt;{"\n"}{"            "}&lt;th scope="col"&gt;Action&lt;/th&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/thead&gt;{"\n"}{"    "}&lt;tbody&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;1&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Basic Plan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;$860&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nov 22, 2021&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;&lt;i class="ri-checkbox-circle-line align-middle text-success"&gt;&lt;/i&gt; Subscribed&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;{"\n"}{"                "}&lt;div class="form-check form-switch"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" checked=""&gt;{"\n"}{"                    "}&lt;label class="form-check-label" for="SwitchCheck1"&gt;Yes/No&lt;/label&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;2&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Premium Plan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;$1200&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nov 10, 2021&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;&lt;i class="ri-close-circle-line align-middle text-danger"&gt;&lt;/i&gt; Unsubscribed&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;{"\n"}{"                "}&lt;div class="form-check form-switch"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck2"&gt;{"\n"}{"                    "}&lt;label class="form-check-label" for="SwitchCheck2"&gt;Yes/No&lt;/label&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;3&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Basic Plan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;$860&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nov 19, 2021&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;&lt;i class="ri-checkbox-circle-line align-middle text-success"&gt;&lt;/i&gt; Subscribed&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;{"\n"}{"                "}&lt;div class="form-check form-switch"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck3"&gt;{"\n"}{"                    "}&lt;label class="form-check-label" for="SwitchCheck3"&gt;Yes/No&lt;/label&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"        "}&lt;tr&gt;{"\n"}{"            "}&lt;th scope="row"&gt;4&lt;/th&gt;{"\n"}{"            "}&lt;td&gt;Corporate Plan&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;$1599&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;Nov 22, 2021&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;&lt;i class="ri-checkbox-circle-line align-middle text-success"&gt;&lt;/i&gt; Subscribed&lt;/td&gt;{"\n"}{"            "}&lt;td&gt;{"\n"}{"                "}&lt;div class="form-check form-switch"&gt;{"\n"}{"                    "}&lt;input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck4" checked=""&gt;{"\n"}{"                    "}&lt;label class="form-check-label" for="SwitchCheck4"&gt;Yes/No&lt;/label&gt;{"\n"}{"                "}&lt;/div&gt;{"\n"}{"            "}&lt;/td&gt;{"\n"}{"        "}&lt;/tr&gt;{"\n"}{"    "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;</code></pre>
                            </div>
                        </div>{/* end card-body */}
                    </div>{/* end card */}
                </div>
                {/* end col */}
            </div>

        </>
    )

}