import { useState, useContext } from 'react';
import URLDomain from '../../../URL';
import Cookies from 'universal-cookie';
import ContextData from '../../../context/MainContext';
import Dropzone from 'react-dropzone'
import { useEffect } from 'react';

const cookies = new Cookies();

export const AddBannerForm = (props) => {

    const { addDataToCurrentGlobal, getToast } = useContext(ContextData);
    const [isLoading, setIL] = useState(false);
    const bussnessID = cookies.get("userBussiness_id");
    const [bannerDetails, setBannerDetails] = useState({
        'bussiness_id': bussnessID,
        'heading': '',
        'sub_heading': '',
        'image': [],
        'status': '1',
        'date': +new Date(),
    });

    const AddBanner = () => {
        console.log("help me", bannerDetails);
        setIL(true);
        const formData = new FormData();

        bannerDetails.image.map((item, i) => {
            formData.append(`image[]`, item, item.name);
        })
        formData.append('bussiness_id', bannerDetails.bussiness_id);
        formData.append('heading', bannerDetails.heading);
        formData.append('sub_heading', bannerDetails.sub_heading);
        // formData.append('image', bannerDetails.image, bannerDetails.image.name);
        formData.append('status', bannerDetails.status);
        formData.append('date', +new Date());


        fetch(URLDomain + "/APP-API/App/setBanners", {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: formData
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("respond plot upload", responseJson)
                if (responseJson.user) {
                    alert("Member Exists");
                } else {
                    console.log("added");
                    addDataToCurrentGlobal({ type: "business_banners", payload: bannerDetails });
                    getToast({ title: "Banner Added", dec: "", status: "success" });
                    //updateData tothe local databae; addDataToCurrentGlobal -> updateDatatoGlobal
                }
                setIL(false);
                document.getElementsByClassName("btn-close")[0].click();
            })
            .catch((error) => {
                //  console.error(error);
            });
    };


    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="mobilenumberInput" className="form-label">Heading</label>
                        <input type="text" onChange={e => setBannerDetails({ ...bannerDetails, heading: e.target.value })} value={bannerDetails.heading} className="form-control" placeholder="Title" id="mobilenumberInput" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Sub Heading</label>
                        <input type="text" onChange={e => setBannerDetails({ ...bannerDetails, sub_heading: e.target.value })} value={bannerDetails.sub_heading} className="form-control" placeholder="Enter Location" id="compnayNameinput" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Banners</label>
                        <Dropzone multiple={false} onDrop={acceptedFiles => setBannerDetails({ ...bannerDetails, image: acceptedFiles })}>
                            {({ getRootProps, getInputProps }) => (
                                <section className='container'>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                    <aside>
                                        <h4>Files</h4>
                                        <ul>{bannerDetails.image.map(file => (
                                            <li key={file.path}>
                                                {file.path} - {file.size} bytes
                                            </li>
                                        ))}</ul>
                                    </aside>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                </div>{/*end col*/}
                {/* <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">Status</label>
                        <div className='d-flex'>
                            <button type="button" class="btn btn-light dropdown-toggle"
                                data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">{bannerDetails.status ? bannerDetails.status : "Select Status"}</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onClick={() => setBannerDetails({ ...bannerDetails, status: "1" })} href="#">Active</a>
                                <a class="dropdown-item" onClick={() => setBannerDetails({ ...bannerDetails, status: "0" })} href="#">Deactive</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-12">
                    <div className="text-center mt-2">
                        {isLoading ? <a href="javascript:void(0)" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" /> Adding </a> : <button type="button" onClick={AddBanner} className="btn btn-primary">Add</button>}
                    </div>
                </div>{/*end col*/}
            </div>{/*end row*/}
        </>
    )

}