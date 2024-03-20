import React from 'react'
import { Link } from 'react-router-dom'

function Profileinfo() {
  return (
   <>
   <section className="middle-content">
		<div className="cs-breadcrumb comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul>
							<li><Link to = "/home">Home</Link></li>
							<li><Link to = "/profile">Profile</Link></li>
							<li>Profile Info</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="main-profile-sec">
			<div className="profile-sec-inner">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="main-profile-information">
								<div className="main-profile-information-inner">
									<div className="mpinfoi-left">
										<label>Name:</label>
										<p>Abu Hlefa</p>
									</div>
									<div className="mpinfoi-right">
										<a href="change-name.html" className="mpinfoi-right-editBtn">Edit</a>
									</div>
								</div>
								<div className="main-profile-information-inner">
									<div className="mpinfoi-left">
										<label>Email:</label>
										<p>vishal.vnerds@gmail.com</p>
									</div>
									<div className="mpinfoi-right">
										<a href="change-email.html" className="mpinfoi-right-editBtn">Edit</a>
									</div>
								</div>
								<div className="main-profile-information-inner">
									<div className="mpinfoi-left">
										<label>Mobile Number:</label>
										<p>+91 9664741462</p>
									</div>
									<div className="mpinfoi-right">
										<a href="change-mobile.html" className="mpinfoi-right-editBtn">Edit</a>
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

export default Profileinfo
