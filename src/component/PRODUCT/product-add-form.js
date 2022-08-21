import { useState, useContext, useRef, useEffect } from 'react';
import URL from '../../URL';
import Cookies from 'universal-cookie';
import ContextData from '../../context/MainContext';
import ImageUploader from 'react-images-upload';
import Multiselect from 'multiselect-react-dropdown';
import ReactJSBarcode from 'react-jsbarcode';

const cookies = new Cookies();

export const AddProductForm = (props) => {

    const { storeCategoryData, storeBrandsData, storeProductUnits, addDataToCurrentGlobal, getToast, reloadData } = useContext(ContextData);
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


    const adminStoreId = cookies.get("adminStoreId");
    const adminStoreType = cookies.get("adminStoreType");
    // `product_name`, `product_uniq_slug_name`, `product_image`, `product_type`, `parent_category_id`,
    //  `category_id`, `brand_id`, `price`, `discount_in_percent`, `sale_price`, `product_size`, `product_unit`, 
    //  `stock_quantity`, `stok_warehouse_qty`, `stock_alert_quantity`, `product_bar_code`,
    //  `deceptions`, `hsn_code`, `i_gst`, `c_gst`, `s_gst`, `expeiry_date`,
    const [productDetails, setproductDetails] = useState({
        'store_id': adminStoreId,
        'product_name': '',
        'product_uniq_slug_name': '',
        'product_image': '',
        'product_type': '',
        'parent_category_id': '',
        'category_id': '',
        'brand_id': '',
        'price': '',
        'discount_in_percent': '',
        'sale_price': '',
        'product_size': '',
        'product_unit': '',
        'product_size': '',
        'product_bar_code':null,
        'deceptions': '',
        'hsn_code': '',
        'i_gst': 0,
        'c_gst': 0,
        's_gst': 0,
        'expeiry_date': '',
        'margin_in_rs': '',
     
       
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
                    ...Category
                });
            }
        })

        setFilterCategoryData(CategorysData);

    }, []);



    const setChaildCate = (id) => {
        if (id.length) {

            setAllSelectedCategorys(id);
            setSelectedCategoryId(id[0].master_category_id)

            let ChildCategorysData = [];

            const getSelectedCategoryIDD = id[0].master_category_id;


            storeCategoryData.map(function (Category) {
                if (Category.master_category_level == getSelectedCategoryIDD) {
                    ChildCategorysData.push({
                        key: Category.category_name,
                        ...Category
                    });
                }
            })

            setFilterChildCategoryData(ChildCategorysData);
        }

    }

    const generateBarCode = () =>{

        let randNo = (Date.now())      ;
        setproductDetails({ ...productDetails, product_bar_code: randNo })
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
        // formData.append('product_bar_code', productDetails.product_bar_code)
        // formData.append('project_state', productDetails.project_state)
        // // formData.append('project_feature_image', productDetails.project_feature_image[0], productDetails.project_feature_image[0].name)
        // formData.append('project_video', productDetails.project_video)
        // formData.append('plot_type', productDetails.plot_type)
        // formData.append('product_size', `${productDetails.product_size}/${productDetails.product_size_unit}`)
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
                        <label htmlFor="firstNameinput" className="form-label">Size & Unit</label>
                        <div className='d-flex'>
                            <input type="text" onChange={e => setproductDetails({ ...productDetails, product_size: e.target.value })} value={productDetails.product_size} className="form-control" placeholder="Product Size" id="address1ControlTextarea" />
                           
                            <button type="button" class="btn btn-light dropdown-toggle"
                                data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">{productDetails.product_unit ? productDetails.product_unit : "Unit"}</button>
                            <div class="dropdown-menu">
                                {storeProductUnits.map(function (item, i) {
                                    console.log('test');
                                    return <a class="dropdown-item" onClick={() => setproductDetails({ ...productDetails, product_unit: item.unit_name })} href="#">{item.unit_name}</a>
                                })}


                            </div>
                        </div>
                    </div>
                </div>{/*end col*/}
                <div className="col-md-12">
                    <div className='row'>
                        <div className='col-sm-4'>
                        <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Price</label>
                        <input type="number" onChange={e => setproductDetails({ ...productDetails, price: e.target.value })} value={productDetails.price} className="form-control" placeholder="Price" id="compnayNameinput" />
                    </div>

                        </div>
                        <div className='col-sm-4'>
                        <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Discount in Rs</label>
                        <input type="number" onChange={e => setproductDetails({ ...productDetails, discount_in_rs: e.target.value })} value={productDetails.discount_in_rs} className="form-control" placeholder="Discount in Rs" id="compnayNameinput" />
                        
                    </div>

                        </div>
                        <div className='col-sm-4'>
                        <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Sale Price</label>
                        <input type="number" onChange={e => setproductDetails({ ...productDetails, sale_price: e.target.value })} value={productDetails.sale_price} className="form-control" placeholder="Sale Price" id="compnayNameinput" />
                    </div>

                        </div>
                    </div>

                
                </div>
                
                <div className="col-md-12">
                    <div className='row'>
                        <div className='col-sm-4'>
                        <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">I GST (%)</label>
                        <input type="number" onChange={e => setproductDetails({ ...productDetails, i_gst: e.target.value,c_gst: e.target.value/2, s_gst: e.target.value/2 })} value={productDetails.i_gst} className="form-control" placeholder="I GST" id="compnayNameinput" />
                    </div>

                        </div>
                        <div className='col-sm-4'>
                        <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">C GST (%)</label>
                        <input type="number" onChange={e => setproductDetails({ ...productDetails, c_gst: productDetails.i_gst/2 })} value={productDetails.c_gst} disabled className="form-control" placeholder="C GST" id="compnayNameinput" />
                        
                    </div>

                        </div>
                        <div className='col-sm-4'>
                        <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">S GST (%)</label>
                        <input type="number" onChange={e => setproductDetails({ ...productDetails, s_gst: productDetails.i_gst/2 })} value={productDetails.s_gst} disabled className="form-control" placeholder="S GST" id="compnayNameinput" />
                    </div>

                        </div>
                    </div>

                
                </div>
                
             
                
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="mobilenumberInput" className="form-label">HSN Code</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, project_name: e.target.value })} value={productDetails.project_name} className="form-control" placeholder="HSN Code" id="mobilenumberInput" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Product Margin (RS)</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, project_name: e.target.value })} value={productDetails.project_name} className="form-control" placeholder="Product Margin" id="mobilenumberInput" />
                    </div>
                </div>

                <div className="col-md-5 my-3">
                    <div className="mb-3">
                        <label htmlFor="citynameInput" className="form-label">Barcode</label>
                        <input type="text" onChange={e => setproductDetails({ ...productDetails, product_bar_code: e.target.value })} value={productDetails.product_bar_code} className="form-control" placeholder="Barcode" id="citynameInput" />
                    </div>
                </div>{/*end col*/}
                <div className="col-md-7">
                    <div className="mb-3">
                        <div className=' row col-sm-12  justify-content-center'>
                            <div className='col-sm-8'></div>
                            <label  className="btn btn-sm btn-danger" onClick={generateBarCode} >Generate Barecode  </label>
                            {/* <div className='col-sm-4'> <i className="ri-add-fill"  /></div> */}
                        </div>
                        
                       
                        <ReactJSBarcode
                         value={productDetails.product_bar_code} 
                         options={{ format: 'code128' ,height:30 ,}} 
                         renderer="svg" />
                    </div>
                </div>{/*end col*/}

                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="compnayNameinput" className="form-label">Deceptions</label>
                        <textarea onChange={e => setproductDetails({ ...productDetails, property_decerption: e.target.value })} value={productDetails.property_decerption} class="form-control" id="exampleFormControlTextarea5" rows="4"></textarea>
                    </div>
                </div>
               
 
              
                <div className="col-lg-12">
                    <div className="text-center mt-2">
                        {isLoading ? <a href="javascript:void(0)" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" /> Adding </a> : <button type="button" onClick={AddPlot} className="btn btn-primary">Add Plot</button>}
                    </div>
                </div>{/*end col*/}
            </div>{/*end row*/}
        </>
    )

}