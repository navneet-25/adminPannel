import { Link, useNavigate } from "react-router-dom";
import { ImBook } from 'react-icons/im';
import { GoGraph } from 'react-icons/go';
import { AiFillSetting } from 'react-icons/ai';
import { RiUserSettingsFill } from 'react-icons/ri';

const Sidebar = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="app-menu navbar-menu">
                <div className="navbar-brand-box">
                    {/* Dark Logo*/}
                    <Link to="/" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="/assets/images/logo-sm.png" alt="" height={22} />
                        </span>
                        <span className="logo-lg">
                            <img src="/assets/images/logo-dark.png" alt="" height={17} />
                        </span>
                    </Link>
                    {/* Light Logo*/}
                    <Link to="/" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="/assets/images/logo-sm.png" alt="" height={22} />
                        </span>
                        <span className="logo-lg">
                            <img src="/assets/images/logo-light.png" alt="" height={17} />
                        </span>
                    </Link>
                    <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                        <i className="ri-record-circle-line" />
                    </button>
                </div>
                <div id="scrollbar">
                    <div className="container-fluid">
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                    <ImBook style={{ fill: "#fff" }} /><span data-key="t-authentication">DASHBOARD</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarAuth">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/dashboard" className="nav-link" data-key="t-cover"> Dashboard
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-title"><i className="ri-more-fill" /> <span data-key="t-pages">MANAGEMENT</span></li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#product-management" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="product-management">
                                    <i class="ri-building-2-fill" /><span data-key="t-authentication">PRODUCT</span>
                                </a>
                                <div className="collapse menu-dropdown" id="product-management">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/productManagement/category" className="nav-link" data-key="t-cover"> CATEGORY
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/productManagement/brand" className="nav-link" data-key="t-cover"> BRAND
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/productManagement/product" className="nav-link" data-key="t-cover"> PRODUCT
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#stocks-management" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="stocks-management">
                                    <GoGraph style={{ fill: "#fff" }} /><span data-key="t-authentication">STOCK</span>
                                </a>
                                <div className="collapse menu-dropdown" id="stocks-management">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/stocks" className="nav-link" data-key="t-cover"> STOCKS
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li className="menu-title"><i className="ri-more-fill" /> <span data-key="t-pages">Settings</span></li> */}
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#websiteSettings" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="websiteSettings">
                                    <AiFillSetting size={24} style={{ fill: "#e9e9e9" }} /> <span data-key="t-authentication">SALE</span>
                                </a>
                                <div className="collapse menu-dropdown" id="websiteSettings">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/sales" className="nav-link" data-key="t-cover"> SALES
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                    <i class="ri-group-fill"></i> <span data-key="t-dashboards">ORDER </span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarDashboards">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/order" className="nav-link"> ORDER </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                    <RiUserSettingsFill size={26} style={{ fill: "#e9e9e9" }} /> <span data-key="t-authentication">DELIVERY </span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarAuth">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/delivery" className="nav-link" data-key="t-cover"> DELIVERY
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                    <RiUserSettingsFill size={26} style={{ fill: "#e9e9e9" }} /> <span data-key="t-authentication">STAFF </span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarAuth">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/staffs" className="nav-link" data-key="t-cover"> STAFF
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                    <RiUserSettingsFill size={26} style={{ fill: "#e9e9e9" }} /> <span data-key="t-authentication">SETTING </span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarAuth">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/settings" className="nav-link" data-key="t-cover"> SETTING
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="menu-title"><i className="ri-more-fill" /> <span data-key="t-pages">Settings</span></li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#websiteSettings" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="websiteSettings">
                                    <AiFillSetting size={24} style={{ fill: "#e9e9e9" }} /> <span data-key="t-authentication">Website Settings</span>
                                </a>
                                <div className="collapse menu-dropdown" id="websiteSettings">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/settings/banners" className="nav-link" data-key="t-cover"> Banners
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/settings/testimonial" className="nav-link" data-key="t-cover"> Testimonial
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/company" className="nav-link" data-key="t-cover"> Company Info
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                    <i class="ri-group-fill"></i> <span data-key="t-dashboards">Emploes</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarDashboards">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/customers" className="nav-link"> Empoles Details </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" onClick={() => navigate("/customers/sallary")} className="nav-link"> Payroll </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                    <RiUserSettingsFill size={26} style={{ fill: "#e9e9e9" }} /> <span data-key="t-authentication">Master</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarAuth">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to="/settings/role" className="nav-link" data-key="t-cover"> Role
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    {/* Sidebar */}
                </div>
            </div>
        </>
    )

}

export default Sidebar;