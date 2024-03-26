import React from 'react'
import { Link } from 'react-router-dom'


function Address(props) {
  return (
   <>
   <div class="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
							<div class="profile-sec-innerdata">
								<div class="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
								<div class="mpsi-rightbar">
									<h4>{props.h4}</h4>
									<p>Block Block A, St. 69 Street, House 2</p>
									<p class="profile-username-txt">Abu Hlefa</p>
									<div class="profile-address-ed">
										<Link to = "/editaddress" class="pae-addEdit">Edit</Link>
										<button type="button" class="btn pae-addDelete">Remove</button>
									</div>
								</div>
							</div>							
						</div>
   </>
  )
}

export default Address
