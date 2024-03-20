import React from 'react';
import { Link } from 'react-router-dom';


function Registration() {
  return (
    <>
    <section className="middle-content">
		<div className="middle-100vh-content">
			<div className="cred-forms-logo cfl-absolute">
				<img src="assets/images/main-logo.png" alt="brand logo"/>
			</div>
			<div className="registration-sec common-credform-padding">
				<div className="login-inner">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="registration-form common-credform">
									<div className="common-credform-inner">
										<h3>REGISTRATION</h3>
										<form id="registration_phoneform">
											<div className="form-group">
												<input type="text" name="phone" placeholder="Mobile number" className="form-control"/>
											</div>
											<div className="common-credform-btns">
												<div className="common-credform-loginbtns mb-0">
												<Link to= "/register">
													<button type="button" className="btn registration-nextbtn login-btn" id="registration_nextbtn">
														Next
													</button>
													</Link>
												</div>
											</div>
										</form>
										<form id="registration_otpform" className="d-none">
											<div className="form-group">
												<input type="text" name="otp" placeholder="OTP" className="form-control text-center"/>
											</div>
											<div className="form-group">
												<div className="reg-timer-flex">
													<p className="reg-countdown-timer">1:53</p>
													<button type="button" className="otp-resend-btn" id="otp_resend_btn">Resend</button>
												</div>
											</div>
											<div className="common-credform-btns">
												<div className="common-credform-loginbtns mb-0">
											
													<button type="button" className="btn registration-otp-nextbtn login-btn" id="registration_otp_nextbtn">
														Next
													</button>
                                                    
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Registration

