import { useState, useContext, useRef, useEffect } from 'react';
import URL from '../../URL';
import Cookies from 'universal-cookie';
import ContextData from '../../context/MainContext';
import ImageUploader from 'react-images-upload';
import Multiselect from 'multiselect-react-dropdown';

const cookies = new Cookies();

export const AddProductForm = (props) => {

    const { storeCategoryData, storeBrandsData, addDataToCurrentGlobal, getToast, reloadData } = useContext(ContextData);
    const [isLoading, setIL] = useState(false);

    const getSelectedBrandsRef = useRef(null);
    const [filteredBrandsData, setFilterBrandData] = useState([]);
    const [getAllSelectedBrands, setAllSelectedBrands] = useState([]);

    const getSelectedCategorysRef = useRef(null);
    const [filteredCategorysData, setFilterCategoryData] = useState([]);
    const [getAllSelectedCategorys, setAllSelectedCategorys] = useState([]);
    const [getSelectedCategoryId, setSelectedCategoryId] = useState({ "id": 999 });

    const getSelectedChildCategorysRef = useRef(null);
    const [filteredChildCategorysData, setFilterChildCategoryData] = useState([]);
    const [getAllSelectedChildCategorys, setAllSelectedChildCategorys] = useState([]);




    const bussnessID = cookies.get("userBussiness_id");
    const [productDetails, setproductDetails] = useState({
        'bussiness_id': bussnessID,
        'property_status': 'Sale',
        'property_type': '',
        'project_name': '',
        'project_location_area': '',
        'plot_total_area_unit': 'sqft',
        'property_decerption': '',
        'project_address': '',
        'project_city': '',
        'project_state': 'Uttar Pradesh',
        'project_feature_image': '',
        'project_video': '',
        'plot_type': '',
        'plot_total_area': '',
        'plot_sizes': 'sqft',
        'plot_rate': '',
        'plot_rate_unit': 'sqft',
        'road_size': '',
        'is_emi_avl': 'NO',
        'booking_min_amount': '',
        'land_possession': '',
        'project_pdf': '',
        'status': '',
        'date': +new Date(),
    });


    useEffect(() => {

        // const getSelectedBrandsRef = useRef(null);

        let brandsData = []

        storeBrandsData.map(function (brand) {


            brandsData.push({
                key: brand.brand_name,
                id: brand.id,
                cat: 'Group 1',
                brand_type: brand.brand_type,
                brand_image: brand.brand_image,
                deceptions: brand.deceptions,
                date: brand.date
            });

        })

        setFilterBrandData(brandsData);

        let CategorysData = []

        storeCategoryData.map(function (Category) {

            if (Category.category_level == 0) {
                CategorysData.push({
                    key: Category.category_name,
                    id: Category.id,
                    cat: 'Group 1',
                    category_type: Category.category_type,
                    category_image: Category.category_image,
                    category_level: Category.category_level,
                    deceptions: Category.deceptions,
                    date: Category.date
                });
            }


        })

        setFilterCategoryData(CategorysData);




        // console.log("filter", res)


    }, []);



    const setChaildCate = (id) => {


        // alert(id[0].id)

        setAllSelectedCategorys(id);
        setSelectedCategoryId(id[0].id)

        let ChildCategorysData = []


        storeCategoryData.map(function (Category) {



            if (Category.master_category_level == getSelectedCategoryId) {
                ChildCategorysData.push({
                    key: Category.category_name,
                    id: Category.id,
                    cat: 'Group 1',
                    category_type: Category.category_type,
                    category_image: Category.category_image,
                    category_level: Category.category_level,
                    deceptions: Category.deceptions,
                    date: Category.date
                });
            }

        })

        setFilterChildCategoryData(ChildCategorysData);



    }



    const AddPlot = () => {
        console.log("category select me", getSelectedCategorysRef.current.state.selectedValues[0].id);
        // setIL(true);
        // const formData = new FormData();

        // productDetails.project_feature_image && productDetails.project_feature_image.map((item, i) => {
        //     formData.append(`project_feature_image[]`, item, item.name);
        // })
        // formData.append('bussiness_id', productDetails.bussiness_id)
        // formData.append('project_id', Math.floor(Math.random() * (9999999999 - 1000000000 + 1) + 1000000000));
        // formData.append('property_status', productDetails.property_status)
        // formData.append('property_type', productDetails.property_type)
        // formData.append('project_name', productDetails.project_name)
        // formData.append('project_location_area', productDetails.project_location_area)
        // formData.append('property_decerption', productDetails.property_decerption)
        // formData.append('project_address', productDetails.project_address)
        // formData.append('project_city', productDetails.project_city)
        // formData.append('project_state', productDetails.project_state)
        // // formData.append('project_feature_image', productDetails.project_feature_image[0], productDetails.project_feature_image[0].name)
        // formData.append('project_video', productDetails.project_video)
        // formData.append('plot_type', productDetails.plot_type)
        // formData.append('plot_total_area', `${productDetails.plot_total_area}/${productDetails.plot_total_area_unit}`)
        // formData.append('plot_sizes', productDetails.plot_sizes)
        // formData.append('plot_rate', `${productDetails.plot_rate}/${productDetails.plot_rate_unit}`);
        // formData.append('road_size', productDetails.road_size + "/ft");
        // formData.append('is_emi_avl', productDetails.is_emi_avl);
        // formData.append('booking_min_amount', productDetails.booking_min_amount);
        // formData.append('land_possession', productDetails.land_possession);
        // formData.append('project_pdf', productDetails.project_pdf);
        // formData.append('status', productDetails.status);
        // formData.append('date', +new Date());


        // fetch(URL + "/APP-API/App/addPlots", {
        //     method: 'POST',
        //     header: {
        //         'Accept': 'application/json',
        //         'Content-type': 'application/json'
        //     },
        //     body: formData
        // }).then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log("respond plot upload", responseJson)
        //         if (responseJson.user) {
        //             alert("Member Exists");
        //         } else {
        //             console.log("added");
        //             addDataToCurrentGlobal({ type: "plots", payload: productDetails });
        //             getToast({ title: "Plot Added", dec: "", status: "success" });
        //             reloadData();
        //         }
        //         setIL(false);
        //         for (let i = 0; i < 10; i++) {
        //             document.getElementsByClassName("btn-close")[i].click();
        //         }
        //     })
        //     .catch((error) => {
        //         //  console.error(error);
        //     });
    };

    return (
        <>
            <div className="row">

                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Product Name</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, product_name: e.target.value })} value={productDetails.product_name} className="form-control" placeholder="Product Name" id="compnayNameinput" />
                    </div>
                </div>{/*end col*/}

                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Product Image (First Image is Features Image)</label>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose Multiple Images'
                            // onChange={this.onChangeImage}
                            imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                            maxFileSize={5242880}
                            singleImage={false}
                            withPreview={true}
                        />
                    </div>
                </div>{/*end col*/}



                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="firstNameinput" className="form-label">Product Category</label>


                        {filteredCategorysData.length && (

                            <Multiselect
                                // singleSelect={true}
                                selectionLimit={1}
                                displayValue="key"
                                onKeyPressFn={function noRefCheck() { }}
                                onSearch={function noRefCheck() { }}
                                onRemove={() => {
                                    setChaildCate(getSelectedCategorysRef.current.state.selectedValues)
                                }}
                                onSelect={() => {
                                    setChaildCate(getSelectedCategorysRef.current.state.selectedValues)
                                }}
                                options={filteredCategorysData}
                                ref={getSelectedCategorysRef}
                            // showCheckbox
                            />

                        )}

                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="firstNameinput" className="form-label">Product Child Category</label>
                        {filteredChildCategorysData.length && (

                            <Multiselect
                                // singleSelect={true}
                                selectionLimit={1}
                                displayValue="key"
                                onKeyPressFn={function noRefCheck() { }}
                                onSearch={function noRefCheck() { }}
                                onRemove={() => {
                                    setAllSelectedChildCategorys(getAllSelectedChildCategorys.current.state.selectedValues)
                                }}
                                onSelect={() => {
                                    setAllSelectedChildCategorys(getAllSelectedChildCategorys.current.state.selectedValues)
                                }}
                                options={filteredChildCategorysData}
                                ref={getAllSelectedChildCategorys}
                            // showCheckbox
                            />

                        )}

                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="firstNameinput" className="form-label">Product Brand</label>
                        {filteredBrandsData.length && (

                            <Multiselect
                                // singleSelect={true}
                                selectionLimit={1}
                                displayValue="key"
                                onKeyPressFn={function noRefCheck() { }}
                                onSearch={function noRefCheck() { }}
                                onRemove={() => {
                                    setAllSelectedBrands(getSelectedBrandsRef.current.state.selectedValues)
                                }}
                                onSelect={() => {
                                    setAllSelectedBrands(getSelectedBrandsRef.current.state.selectedValues)
                                }}
                                options={filteredBrandsData}
                                ref={getSelectedBrandsRef}
                            // showCheckbox
                            />

                        )}
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Loaction</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, project_location_area: e.target.value })} value={productDetails.project_location_area} className="form-control" placeholder="Enter Location" id="compnayNameinput" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Address</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, project_address: e.target.value })} value={productDetails.project_address} className="form-control" placeholder="Enter address" id="compnayNameinput" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="citynameInput" className="form-label">City</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, project_city: e.target.value })} value={productDetails.project_city} className="form-control" placeholder="Enter city" id="citynameInput" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">Feture Image</label>
                        <input multiple type="file" onChange={e => setproductDetails({ ...productDetails, project_feature_image: [...e.target.files] })} className="form-control" id="address1ControlTextarea" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="mobilenumberInput" className="form-label">Title</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, project_name: e.target.value })} value={productDetails.project_name} className="form-control" placeholder="Title" id="mobilenumberInput" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Discription</label>
                        <textarea onChange={e => setproductDetails({ ...productDetails, property_decerption: e.target.value })} value={productDetails.property_decerption} class="form-control" id="exampleFormControlTextarea5" rows="1"></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="firstNameinput" className="form-label">Total Project Area</label>
                        <div className='d-flex'>
                            <input type="number" onChange={e => setproductDetails({ ...productDetails, plot_total_area: e.target.value })} value={productDetails.plot_total_area} className="form-control" placeholder="Project Area" id="address1ControlTextarea" />
                            <button type="button" class="btn btn-light dropdown-toggle"
                                data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">{productDetails.plot_total_area_unit ? productDetails.plot_total_area_unit : "Select Size"}</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, plot_total_area_unit: "sqft" })} href="#">sqft</a>
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, plot_total_area_unit: "diciml" })} href="#">diciml</a>
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, plot_total_area_unit: "acre" })} href="#">acre</a>
                            </div>
                        </div>
                    </div>
                </div>{/*end col*/}

                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">Plot Rate</label>
                        <div className='d-flex'>
                            <input type="number" onChange={e => setproductDetails({ ...productDetails, plot_rate: e.target.value })} value={productDetails.plot_rate} className="form-control" placeholder="Rate" id="address1ControlTextarea" />
                            <button type="button" class="btn btn-light dropdown-toggle"
                                data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">{productDetails.plot_rate_unit ? productDetails.plot_rate_unit : "Select Size"}</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, plot_rate_unit: "sqft" })} href="#">sqft</a>
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, plot_rate_unit: "diciml" })} href="#">diciml</a>
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, plot_rate_unit: "acre" })} href="#">acre</a>
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, plot_rate_unit: "unit" })} href="#">unit</a>
                            </div>
                        </div>
                    </div>
                </div>{/*end col*/}
                <div className="col-md-4">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">Road Size</label>
                        <input type="number" onChange={e => setproductDetails({ ...productDetails, road_size: e.target.value })} value={productDetails.road_size} className="form-control" placeholder="Road Size" id="address1ControlTextarea" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-4">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">EMI Avilabe</label>
                        <div className='d-flex'>
                            <button type="button" class="btn btn-light dropdown-toggle"
                                data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">{productDetails.is_emi_avl ? productDetails.is_emi_avl : "Select Size"}</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, is_emi_avl: "YES" })} href="#">YES</a>
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, is_emi_avl: "NO" })} href="#">NO</a>
                            </div>
                        </div>
                    </div>
                </div>{/*end col*/}
                <div className="col-md-4">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">Land Possession</label>
                        <div className='d-flex'>
                            <button type="button" class="btn btn-light dropdown-toggle"
                                data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">{productDetails.land_possession ? productDetails.land_possession : "Select Possession"}</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, land_possession: "YES" })} href="#">YES</a>
                                <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, land_possession: "NO" })} href="#">NO</a>
                            </div>
                        </div>
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">Minimun Booking Amount</label>
                        <input type="number" onChange={e => setproductDetails({ ...productDetails, booking_min_amount: e.target.value })} value={productDetails.booking_min_amount} className="form-control" placeholder="Min Rate" id="address1ControlTextarea" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="address1ControlTextarea" className="form-label">Plot Video</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, project_video: e.target.value })} className="form-control" placeholder="Youtube Video Link" id="address1ControlTextarea" />
                    </div>
                </div>{/*end col*/}
                <div className="col-lg-12">
                    <div className="text-center mt-2">
                        {isLoading ? <a href="javascript:void(0)" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" /> Adding </a> : <button type="button" onClick={AddPlot} className="btn btn-primary">Add Plot</button>}
                    </div>
                </div>{/*end col*/}
            </div>{/*end row*/}
        </>
    )

}