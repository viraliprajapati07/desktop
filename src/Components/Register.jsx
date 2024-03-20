import React from 'react'

function Register() {
  return (
    <>
    <section class="middle-content">
		<div class="middle-100vh-content">
			<div class="cred-forms-logo cfl-absolute">
				<img src="assets/images/main-logo.png" alt="brand logo"/>
			</div>
			<div class="register common-credform-padding">
				<div class="register-inner">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="register-form common-credform">
									<div class="common-credform-inner">
										<h3 class="comm-mob-sec">REGISTRATION</h3>
										<form>
											<div class="form-group">
												<input type="text" name="fullname" placeholder="Full name" class="form-control"/>
											</div>
											<div class="form-group">
												<input type="password" name="password" placeholder="Password" class="form-control"/>
											</div>
											<div class="form-group">
												<input type="password" name="confirm-password" placeholder="Confirm password" class="form-control"/>
											</div>
											<div class="form-group">
												<input type="email" name="email" placeholder="Email" class="form-control"/>
											</div>
											<div class="common-credform-btns mt-4 mb-4">
												<div class="common-credform-addressbtns mb-0">
													<button type="button" class="btn delivery-address-btn guest-btn" id="delivery_address_btn">
														Add delivery address
													</button>
												</div>
											</div>
											<div class="form-group">
												<textarea type="textarea" name="comment" placeholder="Comment (optional)" class="form-control"></textarea>
											</div>
											<div class="form-group terms-reglink">
												<div class="common-radiocheck-labels">
													<label class="radio-button__label-wrapper" for="terms_input" id="tashed_reg_terms">
												       Terms & conditions approval
												      <input type="radio" name="terms-input" id="terms_input" value="" class="radio-button__input" hidden=""/>
												      <div class="radio-button__custom-indicator"></div> 
												    </label>
												</div>
											</div>
											<div class="common-credform-btns">
												<div class="common-credform-loginbtns">
													<button type="button" class="btn login-btn" id="register_btn">
														Create Account!
													</button>
												</div>
											</div>
											<div class="common-ga-btns">
												<h5>Register using following account</h5>
												<div class="common-googlebtns">
													<button type="button" class="btn google-reg-btn" id="google_reg_btn">
														Google
													</button>
												</div>
												<div class="common-applebtns">
													<button type="button" class="btn apple-reg-btn" id="apple_reg_btn">
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
