import React from 'react';
import { Link } from 'react-router-dom';


function Addresses() {
  return (
    <>
    <section class="middle-content">
		<div class="cs-breadcrumb comm-mob-sec">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<ul>
                        <li><Link to = "/home">Home</Link></li>
							<li><Link to = "/profile">Profile</Link></li>
							<li>Addresses</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="main-profile-sec">
			<div class="profile-sec-inner">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
							<div class="profile-sec-innerdata active">
								<div class="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
								<div class="mpsi-rightbar">
									<h4>Home</h4>
									<p>Block Block A, St. 69 Street, House 2</p>
									<p class="profile-username-txt">Abu Hlefa</p>
									<div class="profile-address-ed">
										<a href="edit-address.html" class="pae-addEdit">Edit</a>
										<button type="button" class="btn pae-addDelete">Remove</button>
									</div>
								</div>
							</div>							
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
							<div class="profile-sec-innerdata">
								<div class="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
								<div class="mpsi-rightbar">
									<h4>Office</h4>
									<p>Block Block A, St. 69 Street, House 2</p>
									<p class="profile-username-txt">Abu Hlefa</p>
									<div class="profile-address-ed">
										<a href="edit-address.html" class="pae-addEdit">Edit</a>
										<button type="button" class="btn pae-addDelete">Remove</button>
									</div>
								</div>
							</div>							
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
							<div class="profile-sec-innerdata">
								<div class="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
								<div class="mpsi-rightbar">
									<h4>Workshop</h4>
									<p>Block Block A, St. 69 Street, House 2</p>
									<p class="profile-username-txt">Abu Hlefa</p>
									<div class="profile-address-ed">
										<a href="edit-address.html" class="pae-addEdit">Edit</a>
										<button type="button" class="btn pae-addDelete">Remove</button>
									</div>
								</div>
							</div>							
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
							<div class="profile-sec-innerdata">
								<div class="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
								<div class="mpsi-rightbar">
									<h4>Clinet 1 aziz</h4>
									<p>Block Block A, St. 69 Street, House 2</p>
									<p class="profile-username-txt">Abu Hlefa</p>
									<div class="profile-address-ed">
										<a href="edit-address.html" class="pae-addEdit">Edit</a>
										<button type="button" class="btn pae-addDelete">Remove</button>
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

export default Addresses
