import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../../context/MainContext";
import URLDomain from "../../URL";

const Partner = () => {

    const {  Store_bussiness_info } = useContext(ContextData);

console.log("Store_bussiness_info",Store_bussiness_info)

    return (
        <>
          
                <div className="profile-foreground position-relative mx-n4 mt-n4">
                    <div className="profile-wid-bg">
                        <img src={Store_bussiness_info?.banner} alt="" className="profile-wid-img" />
                    </div>
                </div>
                <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                    <div className="row g-4">
                        <div className="col-auto">
                            <div className="avatar-lg">
                                <img src={Store_bussiness_info?.logo} alt="user-img" className="img-thumbnail rounded-circle" />
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col">
                            <div className="p-2">
                                <h3 className="text-white mb-1">{Store_bussiness_info.buss_name}</h3>
                                <p className="text-white-75">{Store_bussiness_info.tag_line}</p>
                                <div className="hstack text-white-50 gap-1">
                                    <div className="me-2"><i className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle" />{Store_bussiness_info.city},
                                        {Store_bussiness_info.state}</div>
                                    <div><i className="ri-building-line me-1 text-white-75 fs-16 align-middle" />{Store_bussiness_info.store_slug_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <div className="d-flex">
                                {/* Nav tabs */}
                                <ul className="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link fs-14 active" data-bs-toggle="tab" href="#overview-tab" role="tab">
                                            <i className="ri-airplay-fill d-inline-block d-md-none" /> <span className="d-none d-md-inline-block">Overview</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#Properties" role="tab">
                                            <i className="ri-list-unordered d-inline-block d-md-none" /> <span className="d-none d-md-inline-block">Properties</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#projects" role="tab">
                                            <i className="ri-price-tag-line d-inline-block d-md-none" /> <span className="d-none d-md-inline-block">Projects</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#documents" role="tab">
                                            <i className="ri-folder-4-line d-inline-block d-md-none" /> <span className="d-none d-md-inline-block">Documents</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex-shrink-0">
                                    <Link to="/company/edit" className="btn btn-success"><i className="ri-edit-box-line align-bottom" /> Edit Profile</Link>
                                </div>
                            </div>
                            {/* Tab panes */}
                            <div className="tab-content pt-4 text-muted">
                                <div className="tab-pane active" id="overview-tab" role="tabpanel">
                                    <div className="row">
                                        <div className="col-xxl-3">
                                            {/* <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title mb-5">Complete Your Profile</h5>
                                                <div className="progress animated-progress custom-progress progress-label">
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="label">30%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title mb-3">Info</h5>
                                                    <div className="table-responsive">
                                                        <table className="table table-borderless mb-0">
                                                            <tbody>
                                                                <tr>
                                                                    <th className="ps-0" scope="row">Company Name :</th>
                                                                    <td className="text-muted">{Store_bussiness_info.buss_name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className="ps-0" scope="row">Mobile :</th>
                                                                    <td className="text-muted">+(91) {Store_bussiness_info.mobile1}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className="ps-0" scope="row">E-mail :</th>
                                                                    <td className="text-muted">{Store_bussiness_info.company_email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className="ps-0" scope="row">Location :</th>
                                                                    <td className="text-muted">{Store_bussiness_info.city},
                                                                        {Store_bussiness_info.state}
                                                                    </td>
                                                                </tr>
                                                                {/* <tr>
                                                                <th className="ps-0" scope="row">Joining Date</th>
                                                                <td className="text-muted">24 Nov 2021</td>
                                                            </tr> */}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>{/* end card body */}
                                            </div>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-xxl-9">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title mb-3">About</h5>
                                                    <p>{Store_bussiness_info.about_us}</p>
                                                    <div className="row">
                                                        <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-global-line" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <p className="mb-1">Website :</p>
                                                                    <a href="#" className="fw-semibold">{Store_bussiness_info.website}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*end col*/}
                                                    </div>
                                                    {/*end row*/}
                                                </div>
                                                {/*end card-body*/}
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                                <div className="tab-pane fade" id="Properties" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">Properties</h5>
                                            <div className="acitivity-timeline">
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src="assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Oliver Phillips <span className="badge bg-soft-primary text-primary align-middle">New</span>
                                                        </h6>
                                                        <p className="text-muted mb-2">We talked about a project on
                                                            linkedin.</p>
                                                        <small className="mb-0 text-muted">Today</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            N
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Nancy Martino <span className="badge bg-soft-secondary text-secondary align-middle">In
                                                            Progress</span></h6>
                                                        <p className="text-muted mb-2"><i className="ri-file-text-line align-middle ms-2" />
                                                            Create new project Buildng product</p>
                                                        <div className="avatar-group mb-2">
                                                            <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Christi">
                                                                <img src="assets/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-xs" />
                                                            </a>
                                                            <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Frank Hook">
                                                                <img src="assets/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-xs" />
                                                            </a>
                                                            <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title=" Ruby">
                                                                <div className="avatar-xs">
                                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                                        R
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a href="javascript: void(0);" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="more">
                                                                <div className="avatar-xs">
                                                                    <div className="avatar-title rounded-circle">
                                                                        2+
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <small className="mb-0 text-muted">Yesterday</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src="assets/images/users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Natasha Carey <span className="badge bg-soft-success text-success align-middle">Completed</span>
                                                        </h6>
                                                        <p className="text-muted mb-2">Adding a new event with
                                                            attachments</p>
                                                        <div className="row">
                                                            <div className="col-xxl-4">
                                                                <div className="row border border-dashed gx-2 p-2 mb-2">
                                                                    <div className="col-4">
                                                                        <img src="assets/images/small/img-2.jpg" alt="" className="img-fluid rounded" />
                                                                    </div>
                                                                    {/*end col*/}
                                                                    <div className="col-4">
                                                                        <img src="assets/images/small/img-3.jpg" alt="" className="img-fluid rounded" />
                                                                    </div>
                                                                    {/*end col*/}
                                                                    <div className="col-4">
                                                                        <img src="assets/images/small/img-4.jpg" alt="" className="img-fluid rounded" />
                                                                    </div>
                                                                    {/*end col*/}
                                                                </div>
                                                                {/*end row*/}
                                                            </div>
                                                        </div>
                                                        <small className="mb-0 text-muted">25 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src="assets/images/users/avatar-6.jpg" alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Bethany Johnson</h6>
                                                        <p className="text-muted mb-2">added a new member to velzon
                                                            dashboard</p>
                                                        <small className="mb-0 text-muted">19 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-soft-danger text-danger">
                                                                <i className="ri-shopping-bag-line" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Your order is placed <span className="badge bg-soft-danger text-danger align-middle ms-1">Out
                                                            of Delivery</span></h6>
                                                        <p className="text-muted mb-2">These customers can rest assured
                                                            their order has been placed.</p>
                                                        <small className="mb-0 text-muted">16 Nov</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src="assets/images/users/avatar-7.jpg" alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Lewis Pratt</h6>
                                                        <p className="text-muted mb-2">They all have something to say
                                                            beyond the words on the page. They can come across as
                                                            casual or neutral, exotic or graphic. </p>
                                                        <small className="mb-0 text-muted">22 Oct</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-soft-info text-info">
                                                                <i className="ri-line-chart-line" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Monthly sales report</h6>
                                                        <p className="text-muted mb-2"><span className="text-danger">2 days
                                                            left</span> notification to submit the monthly sales
                                                            report. <a href="javascript:void(0);" className="link-warning text-decoration-underline">Reports
                                                                Builder</a></p>
                                                        <small className="mb-0 text-muted">15 Oct</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src="assets/images/users/avatar-8.jpg" alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">New ticket received <span className="badge bg-soft-success text-success align-middle">Completed</span>
                                                        </h6>
                                                        <p className="text-muted mb-2">User <span className="text-secondary">Erica245</span> submitted a
                                                            ticket.</p>
                                                        <small className="mb-0 text-muted">26 Aug</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end card-body*/}
                                    </div>
                                    {/*end card*/}
                                </div>
                                {/*end tab-pane*/}
                                <div className="tab-pane fade" id="projects" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none profile-project-warning">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Chat App Update</a>
                                                                    </h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">2 year
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-warning fs-10">
                                                                        Inprogress</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-1.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-3.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                                                        J
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none profile-project-success">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">ABC Project
                                                                        Customization</a></h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">2 month
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-primary fs-10">
                                                                        Progress</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-8.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-7.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-6.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <div className="avatar-title rounded-circle bg-primary">
                                                                                        2+
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none profile-project-info">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Client - Frank
                                                                        Hook</a></h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">1 hr
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-info fs-10">New
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-4.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                                                        M
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-3.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none profile-project-primary">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Velzon Project</a>
                                                                    </h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">11 hr
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-success fs-10">
                                                                        Completed</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-7.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-5.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none profile-project-danger">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Brand Logo Design</a>
                                                                    </h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">10 min
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-info fs-10">New
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-7.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-6.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                                                        E
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none profile-project-primary">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Chat App</a></h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">8 hr
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-warning fs-10">
                                                                        Inprogress</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                                                        R
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-3.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-8.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none profile-project-warning">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Project Update</a>
                                                                    </h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">48 min
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-warning fs-10">
                                                                        Inprogress</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-6.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-5.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-4.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none profile-project-success">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Client - Jennifer</a>
                                                                    </h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">30 min
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-primary fs-10">
                                                                        Process</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-1.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none mb-xxl-0   profile-project-info">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Bsuiness Template -
                                                                        UI/UX design</a></h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">7 month
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-success fs-10">
                                                                        Completed</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-2.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-3.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-4.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <div className="avatar-title rounded-circle bg-primary">
                                                                                        2+
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end card body */}
                                                    </div>
                                                    {/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none mb-xxl-0  profile-project-success">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Update Project</a>
                                                                    </h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">1 month
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-info fs-10">New
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-7.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                                                        A
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>{/* end card body */}
                                                    </div>{/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none mb-sm-0  profile-project-danger">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">Bank Management
                                                                        System</a></h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">10 month
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-success fs-10">
                                                                        Completed</div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-7.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-6.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-5.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <div className="avatar-title rounded-circle bg-primary">
                                                                                        2+
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>{/* end card body */}
                                                    </div>{/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-xxl-3 col-sm-6">
                                                    <div className="card profile-project-card shadow-none mb-0  profile-project-primary">
                                                        <div className="card-body p-4">
                                                            <div className="d-flex">
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="fs-14 text-truncate"><a href="#" className="text-dark">PSD to HTML
                                                                        Convert</a></h5>
                                                                    <p className="text-muted text-truncate mb-0">Last
                                                                        Update : <span className="fw-semibold text-dark">29 min
                                                                            Ago</span></p>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <div className="badge badge-soft-info fs-10">New
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div>
                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                Members :</h5>
                                                                        </div>
                                                                        <div className="avatar-group">
                                                                            <div className="avatar-group-item">
                                                                                <div className="avatar-xs">
                                                                                    <img src="assets/images/users/avatar-7.jpg" alt="" className="rounded-circle img-fluid" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>{/* end card body */}
                                                    </div>{/* end card */}
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-12">
                                                    <div className="mt-4">
                                                        <ul className="pagination pagination-separated justify-content-center mb-0">
                                                            <li className="page-item disabled">
                                                                <a href="javascript:void(0);" className="page-link"><i className="mdi mdi-chevron-left" /></a>
                                                            </li>
                                                            <li className="page-item active">
                                                                <a href="javascript:void(0);" className="page-link">1</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:void(0);" className="page-link">2</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:void(0);" className="page-link">3</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:void(0);" className="page-link">4</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:void(0);" className="page-link">5</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="javascript:void(0);" className="page-link"><i className="mdi mdi-chevron-right" /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end row*/}
                                        </div>
                                        {/*end card-body*/}
                                    </div>
                                    {/*end card*/}
                                </div>
                                {/*end tab-pane*/}
                                <div className="tab-pane fade" id="documents" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-4">
                                                <h5 className="card-title flex-grow-1 mb-0">Documents</h5>
                                                <div className="flex-shrink-0">
                                                    <input className="form-control d-none" type="file" id="formFile" />
                                                    <label htmlFor="formFile" className="btn btn-danger"><i className="ri-upload-2-fill me-1 align-bottom" /> Upload
                                                        File</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="table-responsive">
                                                        <table className="table table-borderless align-middle mb-0">
                                                            <thead className="table-light">
                                                                <tr>
                                                                    <th scope="col">File Name</th>
                                                                    <th scope="col">Type</th>
                                                                    <th scope="col">Size</th>
                                                                    <th scope="col">Upload Date</th>
                                                                    <th scope="col">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="avatar-sm">
                                                                                <div className="avatar-title bg-soft-primary text-primary rounded fs-20">
                                                                                    <i className="ri-file-zip-fill" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="ms-3 flex-grow-1">
                                                                                <h6 className="fs-15 mb-0"><a href="javascript:void(0)">Artboard-documents.zip</a>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>Zip File</td>
                                                                    <td>4.57 MB</td>
                                                                    <td>12 Dec 2021</td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:void(0);" className="btn btn-light btn-icon" id="dropdownMenuLink15" data-bs-toggle="dropdown" aria-expanded="true">
                                                                                <i className="ri-equalizer-fill" />
                                                                            </a>
                                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink15">
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-eye-fill me-2 align-middle text-muted" />View</a>
                                                                                </li>
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-download-2-fill me-2 align-middle text-muted" />Download</a>
                                                                                </li>
                                                                                <li className="dropdown-divider" />
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-delete-bin-5-line me-2 align-middle text-muted" />Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="avatar-sm">
                                                                                <div className="avatar-title bg-soft-danger text-danger rounded fs-20">
                                                                                    <i className="ri-file-pdf-fill" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="ms-3 flex-grow-1">
                                                                                <h6 className="fs-15 mb-0"><a href="javascript:void(0);">Bank
                                                                                    Management System</a></h6>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>PDF File</td>
                                                                    <td>8.89 MB</td>
                                                                    <td>24 Nov 2021</td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:void(0);" className="btn btn-light btn-icon" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="true">
                                                                                <i className="ri-equalizer-fill" />
                                                                            </a>
                                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink3">
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-eye-fill me-2 align-middle text-muted" />View</a>
                                                                                </li>
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-download-2-fill me-2 align-middle text-muted" />Download</a>
                                                                                </li>
                                                                                <li className="dropdown-divider" />
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-delete-bin-5-line me-2 align-middle text-muted" />Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="avatar-sm">
                                                                                <div className="avatar-title bg-soft-secondary text-secondary rounded fs-20">
                                                                                    <i className="ri-video-line" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="ms-3 flex-grow-1">
                                                                                <h6 className="fs-15 mb-0"><a href="javascript:void(0);">Tour-video.mp4</a>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>MP4 File</td>
                                                                    <td>14.62 MB</td>
                                                                    <td>19 Nov 2021</td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:void(0);" className="btn btn-light btn-icon" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="true">
                                                                                <i className="ri-equalizer-fill" />
                                                                            </a>
                                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink4">
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-eye-fill me-2 align-middle text-muted" />View</a>
                                                                                </li>
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-download-2-fill me-2 align-middle text-muted" />Download</a>
                                                                                </li>
                                                                                <li className="dropdown-divider" />
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-delete-bin-5-line me-2 align-middle text-muted" />Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="avatar-sm">
                                                                                <div className="avatar-title bg-soft-success text-success rounded fs-20">
                                                                                    <i className="ri-file-excel-fill" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="ms-3 flex-grow-1">
                                                                                <h6 className="fs-15 mb-0"><a href="javascript:void(0);">Account-statement.xsl</a>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>XSL File</td>
                                                                    <td>2.38 KB</td>
                                                                    <td>14 Nov 2021</td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:void(0);" className="btn btn-light btn-icon" id="dropdownMenuLink5" data-bs-toggle="dropdown" aria-expanded="true">
                                                                                <i className="ri-equalizer-fill" />
                                                                            </a>
                                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink5">
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-eye-fill me-2 align-middle text-muted" />View</a>
                                                                                </li>
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-download-2-fill me-2 align-middle text-muted" />Download</a>
                                                                                </li>
                                                                                <li className="dropdown-divider" />
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-delete-bin-5-line me-2 align-middle text-muted" />Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="avatar-sm">
                                                                                <div className="avatar-title bg-soft-info text-info rounded fs-20">
                                                                                    <i className="ri-folder-line" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="ms-3 flex-grow-1">
                                                                                <h6 className="fs-15 mb-0"><a href="javascript:void(0);">Project
                                                                                    Screenshots Collection</a>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>Floder File</td>
                                                                    <td>87.24 MB</td>
                                                                    <td>08 Nov 2021</td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:void(0);" className="btn btn-light btn-icon" id="dropdownMenuLink6" data-bs-toggle="dropdown" aria-expanded="true">
                                                                                <i className="ri-equalizer-fill" />
                                                                            </a>
                                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink6">
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-eye-fill me-2 align-middle" />View</a>
                                                                                </li>
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-download-2-fill me-2 align-middle" />Download</a>
                                                                                </li>
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-delete-bin-5-line me-2 align-middle" />Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="avatar-sm">
                                                                                <div className="avatar-title bg-soft-danger text-danger rounded fs-20">
                                                                                    <i className="ri-image-2-fill" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="ms-3 flex-grow-1">
                                                                                <h6 className="fs-15 mb-0"><a href="javascript:void(0);">Velzon-logo.png</a>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>PNG File</td>
                                                                    <td>879 KB</td>
                                                                    <td>02 Nov 2021</td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <a href="javascript:void(0);" className="btn btn-light btn-icon" id="dropdownMenuLink7" data-bs-toggle="dropdown" aria-expanded="true">
                                                                                <i className="ri-equalizer-fill" />
                                                                            </a>
                                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink7">
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-eye-fill me-2 align-middle" />View</a>
                                                                                </li>
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-download-2-fill me-2 align-middle" />Download</a>
                                                                                </li>
                                                                                <li><a className="dropdown-item" href="javascript:void(0);"><i className="ri-delete-bin-5-line me-2 align-middle" />Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        <a href="javascript:void(0);" className="text-success "><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" />
                                                            Load more </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*end tab-pane*/}
                            </div>
                            {/*end tab-content*/}
                        </div>
                    </div>
                    {/*end col*/}
                </div>
            </>
            
      
    )

}

export default Partner;