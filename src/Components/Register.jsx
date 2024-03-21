import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <section className="middle-content">
		<div className="middle-100vh-content">
			<div className="cred-forms-logo cfl-absolute">
				<img src="assets/images/main-logo.png" alt="brand logo"/>
			</div>
			<div className="register common-credform-padding">
				<div className="register-inner">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="register-form common-credform">
									<div className="common-credform-inner">
										<h3 className="comm-mob-sec">REGISTRATION</h3>
										<form>
											<div className="form-group">
												<input type="text" name="fullname" placeholder="Full name" className="form-control"/>
											</div>
											<div className="form-group">
												<input type="password" name="password" placeholder="Password" className="form-control"/>
											</div>
											<div className="form-group">
												<input type="password" name="confirm-password" placeholder="Confirm password" className="form-control"/>
											</div>
											<div className="form-group">
												<input type="email" name="email" placeholder="Email" className="form-control"/>
											</div>
											<div className="common-credform-btns mt-4 mb-4">
												<div className="common-credform-addressbtns mb-0">
													<button type="button" className="btn delivery-address-btn guest-btn" id="delivery_address_btn">
														Add delivery address
													</button>
												</div>
											</div>
											<div className="form-group">
												<textarea type="textarea" name="comment" placeholder="Comment (optional)" className="form-control"></textarea>
											</div>
											<div className="form-group terms-reglink">
												<div className="common-radiocheck-labels">
													<label className="radio-button__label-wrapper" for="terms_input" id="tashed_reg_terms">
												       Terms & conditions approval
												      <input type="radio" name="terms-input" id="terms_input" value="" className="radio-button__input" hidden=""/>
												      <div className="radio-button__custom-indicator"></div> 
												    </label>
												</div>
											</div>
											<div className="common-credform-btns">
												<div className="common-credform-loginbtns">
													<Link to ='/cartpayment'>
													<button type="button" className="btn login-btn" id="register_btn">
														Create Account!
													</button>
													</Link>
												</div>
											</div>
											<div className="common-ga-btns">
												<h5>Register using following account</h5>
												<div className="common-googlebtns">
													<button type="button" className="btn google-reg-btn" id="google_reg_btn">
														Google
													</button>
												</div>
												<div className="common-applebtns">
													<button type="button" className="btn apple-reg-btn" id="apple_reg_btn">
														Apple
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

export default Register
