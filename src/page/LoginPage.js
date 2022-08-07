import { useState, useContext } from 'react';
import OtpInput from 'react-otp-input';
import URL from '../URL';
import Data from '../context/MainContext';
import Cookies from 'universal-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

const cookies = new Cookies();


const LoginPage = () => {

    const [mobile, setMobile] = useState();
    const [isLoading, setLoading] = useState();
    const [verification, setVerification] = useState(false);
    const [OTP, setOTP] = useState('');
    const [inputOTP, setInputOTP] = useState('');
    const [wrongOTP, setWrongOTP] = useState(false);
    const [error, setError] = useState(false);
    const [userDetails, setUserDetails] = useState([]);
    const { setUserLogin, auth } = useContext(Data);

    const navigate = useNavigate();


    const sendOTP = () => {
        setError(false);
        setLoading(true);
        fetch(URL + "/APP-API/App/cheackUserMobileExist", {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                mobile,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("result login", responseJson);
                if (responseJson.status) {
                    setVerification(true);
                    setOTP(responseJson.otp);
                    setUserDetails(responseJson.data);
                } else {
                    setError(true);
                }
            })
            .catch((error) => {
                //  console.error(error);
            });
    }

    const validateOtp = () => {
        setLoading(true);
        console.log("user", userDetails);
        if (Number(inputOTP) === OTP) {
            cookies.set('isUserLogin', true, { maxAge: 9999999999 });
            cookies.set('userID', userDetails.id, { maxAge: 9999999999 });
            cookies.set('userBussiness_id', userDetails.bussiness_id, { maxAge: 9999999999 });
            cookies.set('userName', userDetails.name, { maxAge: 9999999999 });
            cookies.set('userMobile', userDetails.mobile, { maxAge: 9999999999 });
            setUserLogin({ user_info: userDetails });
            navigate("/");

        } else setWrongOTP(true);
    }

    if (auth.isUserLogin && cookies.get("userID")) {
        return <Navigate to="/" />
    } else return (
        <>
            <div className="auth-page-wrapper pt-5">
                {/* auth page bg */}
                <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
                    <div className="bg-overlay" />
                    <div className="shape">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
                        </svg>
                    </div>
                </div>
                {/* auth page content */}
                <div className="auth-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <a href="index.html" className="d-inline-block auth-logo">
                                            <img src="assets/images/logo-light.png" alt="" height={20} />
                                        </a>
                                    </div>
                                    <p className="mt-3 fs-15 fw-medium">Premium Admin &amp; Dashboard Template</p>
                                </div>
                            </div>
                        </div>
                        {verification ?
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6 col-xl-5">
                                    <div className="card mt-4">
                                        <div className="card-body p-4">
                                            <div className="mb-4">
                                                <div className="avatar-lg mx-auto">
                                                    <div className="avatar-title bg-light text-primary display-5 rounded-circle">
                                                        <i className="ri-mail-line" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-2 mt-4">
                                                <div className="text-muted text-center mb-4 mx-lg-3">
                                                    <h4 className>Verify Your Email</h4>
                                                    <p>Please enter the 4 digit code sent to <span className="fw-semibold">example@abc.com</span></p>
                                                </div>
                                                <OtpInput
                                                    value={inputOTP}
                                                    onChange={e => setInputOTP(e)}
                                                    numInputs={4}
                                                    shouldAutoFocus={true}
                                                    inputStyle="form-control opt otpWidth form-control-lg text-center"
                                                    separator={<span className="mx-2">-</span>}
                                                    containerStyle="justify-content-center"
                                                    placeholder="0000"
                                                    hasErrored={wrongOTP}
                                                    errorStyle={{ border: "1px solid red", color: "red" }}
                                                />
                                                <div className="mt-3">
                                                    <button type="button" onClick={validateOtp} className="btn btn-success w-100">Confirm</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end card body */}
                                    </div>
                                    {/* end card */}
                                    <div className="mt-4 text-center">
                                        <p className="mb-0">Didn't receive a code ? <a href="auth-pass-reset-basic.html" className="fw-semibold text-primary text-decoration-underline">Resend</a> </p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6 col-xl-5">
                                    <div className="card mt-4">
                                        <div className="card-body p-4">
                                            <div className="text-center mt-2">
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p className="text-muted">Sign in to continue to Velzon.</p>
                                            </div>
                                            <div className="p-2 mt-4">
                                                <form>
                                                    <div className="mb-3">
                                                        <label htmlFor="Mobile" className="form-label">Mobile</label>
                                                        <input onChange={e => setMobile(e.target.value)} type="number" maxLength={10} value={mobile} className="form-control" id="Mobile" placeholder="Enter Phones" />
                                                    </div>
                                                    {error &&
                                                        <div class="alert alert-danger alert-dismissible alert-solid alert-label-icon fade show mb-xl-0 mt-2" role="alert">
                                                            <i class="ri-error-warning-line label-icon"></i><strong>Invalid </strong>
                                                            Mobile number
                                                        </div>
                                                    }
                                                    <div className="mt-4">
                                                        <button className="btn btn-success w-100" type='button' onClick={sendOTP}>Sign In</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* end card body */}
                                    </div>
                                </div>
                            </div>
                        }
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end auth page content */}
                {/* footer */}
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <p className="mb-0 text-muted">©  Skyably. Crafted with <i className="mdi mdi-heart text-danger" /> by Navneet Pal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* end Footer */}
            </div>
        </>
    )

}

export default LoginPage;