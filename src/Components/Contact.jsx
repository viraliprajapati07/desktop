import React from 'react'
import ContectBox from './Contact/ContectBox';

function Contact() {
  return (
    <>
    <section className="middle-content">
		<div className="contact-page">
			<div className="container">
			<div className="row">
					<div className="col-12">
						<div className="cred-forms-logo">
							<img src="assets/images/main-logo.png" alt="brand logo"/>
						</div>
					</div>
					<div className="col-12">
						<div className="mf-contactdata">
							<ContectBox/>
							<ContectBox/>
							<ContectBox/>
							<ContectBox/>
							</div>
						<div className="mfc-saperator">
							<div className="mfc-saperator-line"></div>
						</div>						
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="mfc-form">
							<form>
								<div className="form-group">
									<input type="text" name="name" placeholder="Name" className="form-control"/>
								</div>
								<div className="form-group">
									<input type="text" name="phone" placeholder="Email or Phone number" className="form-control"/>
								</div>
								<div className="form-group">
									<textarea type="textarea" name="commnet" placeholder="Comment" className="form-control"></textarea>
								</div>
								<div className="form-group mb-0 mfc-formsend-btn">
									<button type="button" className="btn">Send</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-12">
						<div className="mfc-saperator">
							<div className="mfc-saperator-line"></div>
						</div>	
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="mfc-map">
							<h3>STORE ADDRESS</h3>
							<p>Store address, Street, Buliding, Office 1012</p>
							<div className="mfc-mapinner">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.41193999645!2d47.961267178803226!3d29.37610101465698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1684418108436!5m2!1sen!2sin" style={{border:"0", allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="mfc-saperator">
							<div className="mfc-saperator-line"></div>
						</div>	
					</div>
					<div className="col-12">
						<div className="mfc-socialicons">
							<ul>
								<li>
									<a href="#" target="_blank"><img src="assets/images/twitter-blue.png" alt="twitter icon"/></a>
								</li>
								<li>
									<a href="#" target="_blank"><img src="assets/images/instagram-blue.png" alt="instagram icon"/></a>
								</li>
							</ul>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Contact;
