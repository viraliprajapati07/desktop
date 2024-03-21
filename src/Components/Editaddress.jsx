import React from 'react'
import { Link } from 'react-router-dom'

function Editaddress() {
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
								<div className="register-form common-credform update-address-form">
									<div className="common-credform-inner">
										<h3 className="comm-mob-sec">Update Address</h3>
										<form>
											<div className="form-group">
												<input type="text" name="add-name" placeholder="Address name" className="form-control" value="Home"/>
											</div>
											<div className="form-group">
												<div className="new-address-select">
													<img src="assets/images/select-arrow.png" alt="arrow"/>
													<select type="select" name="add-area" className="form-control">
														<option disabled="" selected="">Area</option>
														<option value="Area Name">Area Name</option>
														<option value="Area Name">Area Name</option>
													</select>
												</div>
											</div>
											<div className="form-group">
												<input type="text" name="add-block" placeholder="Block" className="form-control" value="Block Block A"/>
											</div>
											<div className="form-group">
												<input type="text" name="add-street" placeholder="street" className="form-control" value="St. 69 Street"/>
											</div>
											<div className="form-group">
												<input type="text" name="add-avenue" placeholder="Avenue ( Optional )" className="form-control"/>
											</div>
											<div className="form-group">
												<input type="text" name="add-building-no" placeholder="Building number" className="form-control" value="2"/>
											</div>
											<div className="form-group">
												<input type="text" name="add-floor" placeholder="Floor ( Optional )" className="form-control"/>
											</div>
											<div className="form-group">
												<input type="text" name="add-apartment" placeholder="Apartment number ( Optional )" className="form-control"/>
											</div>
											<div className="common-credform-btns">
												<div className="common-credform-loginbtns">
                                                    <Link to ="/addresses">
													<button type="button" className="btn login-btn" id="address_updateBtn">
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

export default Editaddress
