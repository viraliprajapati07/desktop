import React from 'react'
import { Link } from 'react-router-dom'
import LinkFile from './LinkFile/LinkFile'

function MyAccount() {
  return (
   <>
   <section class="middle-content">
		<LinkFile li ="Profile"/>
		
		<div class="main-profile-sec">
			<div class="profile-sec-inner">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<Link to="/orderlist" class="mpsi-link">
								<div class="profile-sec-innerdata">
									<div class="mpsi-leftbar"><img src="assets/images/parcel-icon.png" alt="icon"/></div>
									<div class="mpsi-rightbar"><h4>Your Orders</h4><p>Check status of your order</p></div>
								</div>
							</Link>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<Link to="/orderlist" class="mpsi-link">
								<div class="profile-sec-innerdata">
									<div class="mpsi-leftbar"><img src="assets/images/wishlist-icon.png" alt="icon"/></div>
									<div class="mpsi-rightbar"><h4>Your Wishlist</h4><p>Check wishlist of your order</p></div>
								</div>
							</Link>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<Link to ="/profileinfo" class="mpsi-link">
								<div class="profile-sec-innerdata">
									<div class="mpsi-leftbar"><img src="assets/images/user-icon.png" alt="icon"/></div>
									<div class="mpsi-rightbar"><h4>Profile Info</h4><p>Edit your profile info</p></div>
								</div>
							</Link>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<Link to = "/address" class="mpsi-link">
								<div class="profile-sec-innerdata">
									<div class="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
									<div class="mpsi-rightbar"><h4>Your Addresses</h4><p>Edit address for your order</p></div>
								</div>
							</Link>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<Link to ="/changepassword" class="mpsi-link">
								<div class="profile-sec-innerdata">
									<div class="mpsi-leftbar"><img src="assets/images/login-icon.png" alt="icon"/></div>
									<div class="mpsi-rightbar"><h4>Login & Security</h4><p>Change password</p></div>
								</div>
							</Link>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<a href="#" class="mpsi-link">
								<div class="profile-sec-innerdata">
									<div class="mpsi-leftbar"><img src="assets/images/receive-mail.png" alt="icon"/></div>
									<div class="mpsi-rightbar"><h4>Inbox</h4><p>Notification & Messages</p></div>
								</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-12 mpsi-col">
							<div class="profile-sec-innerdata">
								<div class="mpsi-leftbar"><img src="assets/images/debit-card.png" alt="icon"/></div>
								<div class="mpsi-rightbar"><h4>Credit</h4><p><span class="d-inline-block">Used Credit:</span> <b>10 KD</b></p><p><span class="d-inline-block">Remaining Credit: </span><b>20 KD</b></p></div>
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

export default MyAccount
