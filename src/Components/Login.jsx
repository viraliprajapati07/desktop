import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
   <>
    <section className="middle-content">
		<div className="middle-100vh-content">
			<div className="cred-forms-logo cfl-absolute">
				<img src="assets/images/main-logo.png" alt="brand logo"/>
			</div>
			<div className="login common-credform-padding">
				<div className="login-inner">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="login-form common-credform">
									<div className="common-credform-inner">
										<h3 className="comm-mob-sec">Login</h3>
										<form>
											<div className="form-group">
												<input type="email" name="email" placeholder="Email" className="form-control"/>
											</div>
											<div className="form-group">
												<input type="password" name="password" placeholder="Password" className="form-control"/>
											</div>
											<div className="form-group forgot-linkgroup mb-0">
												<a href="forgot-password.html" className="forgot-passlink">Forgot Password !</a>
											</div>
											<div className="common-credform-btns">
												<div className="common-credform-loginbtns">
													<button type="button" className="btn login-btn" id="login_btn">Login</button>
												</div>
												<div className="common-credform-guestbtns">
													<button type="button" className="btn guest-btn" id="guest_btn">
														Continue as a guest
													</button>
												</div>
												<div className="common-credform-regbtns mb-0">
													<Link to="/register" className="btn register-btn" id="register_btn">
														Register !
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

export default Login
