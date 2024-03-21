import React from 'react'
import { Link } from 'react-router-dom'

function Changename() {
  return (
   <>
   <section className="middle-content">
		<div className="middle-100vh-content">
			<div className="cred-forms-logo cfl-absolute">
				<img src="assets/images/main-logo.png" alt="brand logo"/>
			</div>
			<div className="forgot-password common-credform-padding">
				<div className="login-inner">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="forgot-password-form common-credform">
									<div className="common-credform-inner">
										<h3>change name</h3>
										<form>
											<div className="form-group">
												<input type="text" name="name" placeholder="Full Name" className="form-control" value="Abu Hlefa"/>
											</div>
											<div className="common-credform-btns">
												<div className="common-credform-loginbtns mb-0">
													<Link to = "/profileinfo">
													<button type="button" className="btn registration-nextbtn login-btn" id="update_name_btn">
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

export default Changename
