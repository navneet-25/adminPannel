import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../../context/MainContext";
import URLDomain from "../../URL";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaMapMarkedAlt } from 'react-icons/fa';

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
                                    <div className="me-2"><i className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle" />{Store_bussiness_info.area},
                                        {Store_bussiness_info.city}</div>
                                    <div><i className="ri-store-line me-1 text-white-75 fs-16 align-middle" />{Store_bussiness_info.store_slug_name}
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
                                            <i className="ri-airplay-fill d-inline-block d-md-none" /> <span className="d-none d-md-inline-block">Business Info</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#Address" role="tab">
                                            <i className="ri-list-unordered d-inline-block d-md-none" /> <span className="d-none d-md-inline-block">Address</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#contact" role="tab">
                                            <i className="ri-price-tag-line d-inline-block d-md-none" /> <span className="d-none d-md-inline-block">Contact</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#PrivacyTerms" role="tab">
                                            <i className="ri-folder-4-line d-inline-block d-md-none" /> <span className="d-none d-md-inline-block">Privacy & Terms</span>
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
                                         
                                        </div>
                                        {/*end col*/}
                                        <div className="col-xxl-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title mb-3">About</h5>
                                                    <p>{Store_bussiness_info.about_us}</p>
                                                    <div className="row">

                                                    <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-arrow-right-circle-fill" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <p className="mb-1">Business Name :</p>
                                                                    <a href="#" className="fw-semibold">{Store_bussiness_info.buss_name}</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-arrow-right-circle-fill" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <p className="mb-1">Tag Line :</p>
                                                                    <a href="#" className="fw-semibold">{Store_bussiness_info.tag_line}</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Company Email :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.company_email}</a>
            </div>
        </div>
    </div>
                                                        {/*end col*/}
                                                    </div>


                                                    <div className="row ">



    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Website :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.website}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">GST NO :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.gst_no}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Fassai NO :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.fassai_no}</a>
            </div>
        </div>
    </div>
    {/*end col*/}
</div>

<div className="row mt-4">
<div className="col-1 col-md-1">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <a href={Store_bussiness_info.facebook} target="_blank">  <FaFacebookF/></a>
                  
                </div>
            </div>
           
        </div>
    </div>

    <div className="col-1 col-md-1">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <a href={Store_bussiness_info.instagram} target="_blank">  <AiOutlineInstagram/></a>
                  
                </div>
            </div>
           
        </div>
    </div>

    <div className="col-1 col-md-1">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <a href={Store_bussiness_info.twitter} target="_blank">  <AiOutlineTwitter/></a>
                  
                </div>
            </div>
           
        </div>
    </div>

    <div className="col-1 col-md-1">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <a href={Store_bussiness_info.linkedin} target="_blank">  <FaLinkedinIn/></a>
                  
                </div>
            </div>
           
        </div>
    </div>

    <div className="col-1 col-md-1">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <a href={Store_bussiness_info.google_map_link} target="_blank">  <FaMapMarkedAlt/></a>
                  
                </div>
            </div>
           
        </div>
    </div>

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
                                <div className="tab-pane fade" id="Address" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">Address</h5>

                                            <div className="row">

<div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Address Line 1 :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.strteet_linn1}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Address Line 2 :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.strteet_linn2}</a>
            </div>
        </div>
    </div>

    {/*end col*/}
</div>

<div className="row">

<div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Area:</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.area}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">City :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.city}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">State :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.state}</a>
            </div>
        </div>
    </div>

    {/*end col*/}
</div>


<div className="row">

<div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Zip Code:</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.pin_code}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Latitude :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.lat}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Longitude :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.lng}</a>
            </div>
        </div>
    </div>

    {/*end col*/}
</div>

                                        </div>
                                        {/*end card-body*/}
                                    </div>
                                    {/*end card*/}
                                </div>


                                {/*end tab-pane*/}
                                <div className="tab-pane fade" id="contact" role="tabpanel">
                                <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">Contact</h5>

                                            <div className="row">

<div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Primary Phone Number :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.mobile1}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Alternate Phone Number :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.mobile2}</a>
            </div>
        </div>
    </div>

    {/*end col*/}
</div>




<div className="row">

<div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Teliphone Number:</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.teliphone1}</a>
            </div>
        </div>
    </div>

    <div className="col-6 col-md-4">
        <div className="d-flex mt-4">
            <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                    <i className="ri-arrow-right-circle-fill" />
                </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
                <p className="mb-1">Alternate Teliphone Number :</p>
                <a href="#" className="fw-semibold">{Store_bussiness_info.teliphone2}</a>
            </div>
        </div>
    </div>

    {/*end col*/}
</div>


                                        </div>
                                        {/*end card-body*/}
                                    </div>
                                    {/*end card*/}
                                </div>
                                {/*end tab-pane*/}
                                <div className="tab-pane fade" id="PrivacyTerms" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                          
                                                <h5 className="card-title mb-3">Privacy & Policy</h5>
                                                <p>{Store_bussiness_info.privacy}</p>


                                        </div>

                                        <div className="card-body">
                                          
                                          <h5 className="card-title mb-3">Terms & Condition</h5>
                                          <p>{Store_bussiness_info.terms}</p>


                                  </div>

                                  <div className="card-body">
                                          
                                          <h5 className="card-title mb-3">Returns Policy</h5>
                                          <p>{Store_bussiness_info.returns}</p>


                                  </div>
                                  <div className="card-body">
                                          
                                          <h5 className="card-title mb-3">Shipping Condition</h5>
                                          <p>{Store_bussiness_info.shiiping}</p>


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