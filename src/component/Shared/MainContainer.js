import Header from "./Header";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";


const MainContainer = ({ children }) => {

    const location = useLocation();

    return (
        <>
            <div>
                {location.pathname === "/login" ? <>{children}</> :
                    <div id="layout-wrapper">
                        <Header />
                        <Sidebar />
                        <div className="vertical-overlay" />
                        <div className="main-content">
                            <div className="page-content">
                                <div className="container-fluid">
                                    {children}
                                </div>
                            </div>
                            <footer className="footer">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            © Velzon.
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="text-sm-end d-none d-sm-block">
                                                Design &amp; Develop by Themesbrand
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                }
            </div>
        </>
    )

}

export default MainContainer;