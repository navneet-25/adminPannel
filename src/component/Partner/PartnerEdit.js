import { useContext } from "react";
import { useEffect, useState } from "react";
import ContextData from "../../context/MainContext";
import URLDomain from "../../URL";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaMapMarkedAlt } from 'react-icons/fa';

const PartnerEdit = () => {

    const { user, partner, isLoading } = useContext(ContextData);

    const [partnerEdit, setPartner] = useState(partner);
    const [logo, setLogo] = useState();
    const [banner, setBanner] = useState();

    useEffect(() => {
        setPartner(partner);
    }, [partner]);

    const update = () => {
        console.log("kit kat", partnerEdit);
        fetch(URLDomain + "/APP-API/App/updatePartner", {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                ...partnerEdit
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("respond", responseJson)
                // if (responseJson.user) {
                //     alert("Member Exists");
                // } else {
                //     console.log("added");
                // }
                // document.getElementsByClassName("btn-close")[0].click();
            })
            .catch((error) => {
                //  console.error(error);
            });
    }

    const updateImage = () => {
        console.log("sesodine", logo, "banner", banner);

        const formData = new FormData();

        logo ? formData.append(`file`, logo, logo.name) : formData.append("file", banner, banner.name);
        logo ? formData.append(`logo`, logo.name) : formData.append("banner", banner.name);
        formData.append('bussiness_id', partner.bussiness_id);

        console.log("formdata", formData)
        fetch(URLDomain + "/APP-API/App/uploadImage", {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: formData
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("respond", responseJson)
                // if (responseJson.user) {
                //     alert("Member Exists");
                // } else {
                //     console.log("added");
                // }
                // document.getElementsByClassName("btn-close")[0].click();
            })
            .catch((error) => {
                //  console.error(error);
            });
    }

    return (
        <>
            <div>
                <div className="position-relative mx-n4 mt-n4">
                    <div className="profile-wid-bg profile-setting-img">
                        <img src={banner ? URL.createObjectURL(banner) : URLDomain + "/APP-API/" + partner?.banner} className="profile-wid-img" alt="" />
                        <div className="overlay-content">
                            <div className="text-end p-3">
                                <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                    <input id="profile-foreground-img-file-input" onChange={e => setBanner(e.target.files[0])} type="file" className="profile-foreground-img-file-input" />
                                    {banner ? <button type="button" onClick={updateImage} className="btn btn-light mt-2">Upload Banner</button> : <label htmlFor="profile-foreground-img-file-input" className="profile-photo-edit btn btn-light">
                                        <i className="ri-image-edit-line align-bottom me-1" /> Change Cover
                                    </label>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-3">
                        <div className="card mt-n5">
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                        <img src={logo ? URL.createObjectURL(logo) : URLDomain + "/APP-API/" + partner?.logo} className="rounded-circle avatar-xl img-thumbnail user-profile-image" alt="user-profile-image" />
                                        <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                            <input id="profile-img-file-input" onChange={e => setLogo(e.target.files[0])} type="file" className="profile-img-file-input" />
                                            <label htmlFor="profile-img-file-input" className="profile-photo-edit avatar-xs">
                                                <span className="avatar-title rounded-circle bg-light text-body">
                                                    <i className="ri-camera-fill" />
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="fs-16 mb-1">{partner?.buss_name}</h5>
                                    <p className="text-muted mb-0">Property</p>
                                    {logo && <button type="button" onClick={updateImage} className="btn btn-primary mt-2">Upload Image</button>}
                                </div>
                            </div>
                        </div>
                        {/*end card*/}
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title mb-0">Portfolio</h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="javascript:void(0);" className="badge bg-light text-primary fs-12"><i className="ri-add-fill align-bottom me-1" /> Add</a>
                                    </div>
                                </div>
                                <div className="mb-3 d-flex">
                                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                                        <span className="avatar-title rounded-circle fs-16 bg-light text-dark border">
                                            <FaMapMarkedAlt />
                                        </span>
                                    </div>
                                    <input type="text" value={partnerEdit?.google_map_link} onChange={e => setPartner({ ...partnerEdit, google_map_link: e.target.value })} className="form-control" id="gitUsername" placeholder="https://www.google.com/maps/embed?#########" />
                                </div>
                                <div className="mb-3 d-flex">
                                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                                        <span className="avatar-title rounded-circle fs-16 bg-primary text-light">
                                            <FaFacebookF />
                                        </span>
                                    </div>
                                    <input type="text" value={partnerEdit?.facebook} onChange={e => setPartner({ ...partnerEdit, facebook: e.target.value })} className="form-control" id="gitUsername" placeholder="https://www.facebook.com/xxxxxxxxxx/" />
                                </div>
                                <div className="mb-3 d-flex">
                                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                                        <span className="avatar-title rounded-circle fs-16" style={{ background: "#d85252" }}>
                                            <AiOutlineInstagram />
                                        </span>
                                    </div>
                                    <input type="text" value={partnerEdit?.instagram} onChange={e => setPartner({ ...partnerEdit, instagram: e.target.value })} className="form-control" id="websiteInput" placeholder="https://www.instagram.com/xxxxxxxx" />
                                </div>
                                <div className="mb-3 d-flex">
                                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                                        <span className="avatar-title rounded-circle fs-16 bg-success">
                                            <FaLinkedinIn />
                                        </span>
                                    </div>
                                    <input type="text" value={partnerEdit?.linkedin} onChange={e => setPartner({ ...partnerEdit, linkedin: e.target.value })} className="form-control" id="dribbleName" placeholder="https://www.linkedin.com/in/xxxxxxx-xxxxxx-xxxxxx/" />
                                </div>
                                <div className="d-flex">
                                    <div className="avatar-xs d-block flex-shrink-0 me-3">
                                        <span className="avatar-title rounded-circle fs-16" style={{ background: "#1e5dff" }}>
                                            <AiOutlineTwitter />
                                        </span>
                                    </div>
                                    <input type="text" value={partnerEdit?.twitter} onChange={e => setPartner({ ...partnerEdit, twitter: e.target.value })} className="form-control" id="pinterestName" placeholder="https://twitter.com/xxxxxxxxxx" />
                                </div>
                            </div>
                        </div>
                        {/*end card*/}
                    </div>
                    {/*end col*/}
                    <div className="col-xxl-9">
                        <div className="card mt-xxl-n5">
                            <div className="card-header">
                                <ul className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab">
                                            <i className="fas fa-home" />
                                            Bussness Details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#changePassword" role="tab">
                                            <i className="far fa-user" />
                                            Address
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#experience" role="tab">
                                            <i className="far fa-envelope" />
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body p-4">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="personalDetails" role="tabpanel">
                                        <form action="javascript:void(0);">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="firstnameInput" className="form-label">Bussness
                                                            Name</label>
                                                        <input type="text" className="form-control" id="firstnameInput" value={partnerEdit?.buss_name} onChange={e => setPartner({ ...partnerEdit, buss_name: e.target.value })} placeholder="Enter your firstname" />
                                                    </div>
                                                </div>
                                                {/*end col*/}

                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="emailInput" className="form-label">Email
                                                            Address</label>
                                                        <input type="email" value={partnerEdit?.company_email} onChange={e => setPartner({ ...partnerEdit, company_email: e.target.value })} className="form-control" id="emailInput" placeholder="Enter your email" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="designationInput" className="form-label">Tag Link</label>
                                                        <input type="text" value={partnerEdit?.tag_line} onChange={e => setPartner({ ...partnerEdit, tag_line: e.target.value })} className="form-control" id="designationInput" placeholder="Designation" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="websiteInput1" className="form-label">Website</label>
                                                        <input type="text" value={partnerEdit?.website} onChange={e => setPartner({ ...partnerEdit, website: e.target.value })} className="form-control" id="websiteInput1" placeholder="www.example.com" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-12">
                                                    <div className="mb-3 pb-2">
                                                        <label htmlFor="exampleFormControlTextarea" className="form-label">Description</label>
                                                        <textarea className="form-control" value={partnerEdit?.about_us} onChange={e => setPartner({ ...partnerEdit, about_us: e.target.value })} id="exampleFormControlTextarea" placeholder="Enter your description" rows={3} />
                                                    </div>
                                                </div>
                                                {/*end col*/}

                                            </div>
                                            {/*end row*/}
                                        </form>
                                    </div>
                                    {/*end tab-pane*/}
                                    <div className="tab-pane" id="changePassword" role="tabpanel">
                                        <form action="javascript:void(0);">
                                            <div className="row g-2">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="cityInput" className="form-label">Address 1</label>
                                                        <input type="text" value={partnerEdit?.strteet_linn1} onChange={e => setPartner({ ...partnerEdit, strteet_linn1: e.target.value })} className="form-control" id="cityInput" placeholder="City" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="countryInput" className="form-label">Address 2</label>
                                                        <input type="text" value={partnerEdit?.strteet_linn2} onChange={e => setPartner({ ...partnerEdit, strteet_linn2: e.target.value })} className="form-control" id="countryInput" placeholder="Country" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="countryInput" className="form-label">Area</label>
                                                        <input type="text" value={partnerEdit?.area} onChange={e => setPartner({ ...partnerEdit, area: e.target.value })} className="form-control" id="countryInput" placeholder="Country" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="cityInput" className="form-label">City</label>
                                                        <input type="text" value={partnerEdit?.city} onChange={e => setPartner({ ...partnerEdit, city: e.target.value })} className="form-control" id="cityInput" placeholder="City" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="countryInput" className="form-label">State</label>
                                                        <input type="text" value={partnerEdit?.state} onChange={e => setPartner({ ...partnerEdit, state: e.target.value })} className="form-control" id="countryInput" placeholder="Country" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="zipcodeInput" className="form-label">Zip
                                                            Code</label>
                                                        <input type="text" value={partnerEdit?.pin_code} onChange={e => setPartner({ ...partnerEdit, pin_code: e.target.value })} className="form-control" minLength={5} maxLength={6} id="zipcodeInput" placeholder="Enter zipcode" />
                                                    </div>
                                                </div>
                                                {/*end col*/}
                                            </div>
                                            {/*end row*/}
                                        </form>
                                    </div>
                                    {/*end tab-pane*/}
                                    <div className="tab-pane" id="experience" role="tabpanel">
                                        <form>
                                            <div id="newlink">
                                                <div id={1}>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="phonenumberInput" className="form-label">Teliphone
                                                                    Number</label>
                                                                <input type="number" maxLength={10} minLength={10} value={partnerEdit?.teliphone1} onChange={e => setPartner({ ...partnerEdit, teliphone1: e.target.value })} className="form-control" id="phonenumberInput" placeholder="Enter your phone number" defaultValue="+(1) 987 6543" />
                                                            </div>
                                                        </div>
                                                        {/*end col*/}
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="phonenumberInput" className="form-label"> Alternate Teliphone
                                                                    Number</label>
                                                                <input type="number" maxLength={10} minLength={10} value={partnerEdit?.teliphone2} onChange={e => setPartner({ ...partnerEdit, teliphone2: e.target.value })} className="form-control" id="phonenumberInput" placeholder="Enter your phone number" defaultValue="+(1) 987 6543" />
                                                            </div>
                                                        </div>
                                                        {/*end col*/}
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="phonenumberInput" className="form-label">Phone
                                                                    Number</label>
                                                                <input type="number" maxLength={10} minLength={10} value={partnerEdit?.mobile1} onChange={e => setPartner({ ...partnerEdit, mobile1: e.target.value })} className="form-control" id="phonenumberInput" placeholder="Enter your phone number" defaultValue="+(1) 987 6543" />
                                                            </div>
                                                        </div>
                                                        {/*end col*/}
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="phonenumberInput" className="form-label"> Alternate Phone
                                                                    Number</label>
                                                                <input type="number" maxLength={10} minLength={10} value={partnerEdit?.mobile2} onChange={e => setPartner({ ...partnerEdit, mobile2: e.target.value })} className="form-control" id="phonenumberInput" placeholder="Enter your phone number" defaultValue="+(1) 987 6543" />
                                                            </div>
                                                        </div>
                                                        {/*end col*/}
                                                    </div>
                                                    {/*end row*/}
                                                </div>
                                            </div>
                                            {/*end col*/}
                                        </form>
                                    </div>
                                    {/*end tab-pane*/}
                                    <div className="col-lg-12">
                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" onClick={update} className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end col*/}
                </div>
            </div>
        </>
    )

}

export default PartnerEdit;