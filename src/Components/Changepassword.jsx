import React from 'react'
import { Link } from 'react-router-dom'

function Changepassword() {
  return (
   <>
   <section class="middle-content">
		<div class="middle-100vh-content">
			<div class="cred-forms-logo cfl-absolute">
				<img src="assets/images/main-logo.png" alt="brand logo"/>
			</div>
			<div class="forgot-password common-credform-padding">
				<div class="login-inner">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="forgot-password-form common-credform">
									<div class="common-credform-inner">
										<h3>change password</h3>
										<form>
											<div class="form-group">
												<input type="password" name="current-pass" placeholder="Current password" class="form-control"/>
											</div>
											<div class="form-group">
												<input type="password" name="new-pass" placeholder="New password" class="form-control"/>
											</div>
											<div class="form-group">
												<input type="password" name="reenter-pass" placeholder="Re-enter password" class="form-control"/>
											</div>
											<div class="common-credform-btns">
												<div class="common-credform-loginbtns mb-0">
													<Link to = "/login">
													<button type="button" class="btn forgotpass-sendbtn login-btn" id="changepass_updatebtn">
														Update
													</button>
													</Link>
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

export default Changepassword
