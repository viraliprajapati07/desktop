import React from 'react'
import { Link } from 'react-router-dom';

function Categorlist() {
  return (
   <>
   <section className="middle-content">
		<div className="catg-slider catlist-padding">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="catg-sliderinner catlist-flex">
							<div className="catg-sliderbox">
								<Link to ="/categorlist" className="catg-boxlink">
									<div className="catg-img">
										<img src="assets/images/catlist-1.png" alt="category"/>
									</div>
									<h5>LEVELING MATERIAL</h5>
								</Link>
							</div>
							<div className="catg-sliderbox">
								<a href="category.html" className="catg-boxlink">
									<div className="catg-img">
										<img src="assets/images/catlist-2.png" alt="category"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div className="catg-sliderbox">
								<a href="category.html" className="catg-boxlink">
									<div className="catg-img">
										<img src="assets/images/catlist-3.png" alt="category"/>
									</div>
									<h5>PLUMBING MATERIAL</h5>
								</a>
							</div>
							<div className="catg-sliderbox">
								<a href="category.html" className="catg-boxlink">
									<div className="catg-img">
										<img src="assets/images/catlist-4.png" alt="category"/>
									</div>
									<h5>FLOORING MATERIAL</h5>
								</a>
							</div>
							<div className="catg-sliderbox">
								<a href="category.html" className="catg-boxlink">
									<div className="catg-img">
										<img src="assets/images/catlist-5.png" alt="category"/>
									</div>
									<h5>WOODEN ELECTRICIAN MATERIAL</h5>
								</a>
							</div>
							<div className="catg-sliderbox">
								<a href="category.html" className="catg-boxlink">
									<div className="catg-img">
										<img src="assets/images/catlist-6.png" alt="category"/>
									</div>
									<h5>PAINTING MATERIAL</h5>
								</a>
							</div>
							<div className="catg-sliderbox">
								<a href="category.html" className="catg-boxlink">
									<div className="catg-img">
										<img src="assets/images/catlist-7.png" alt="category"/>
									</div>
									<h5>REQUIRED INSTALLATION MATERIAL</h5>
								</a>
							</div>
							<div className="catg-sliderbox">
								<a href="category.html" className="catg-boxlink">
									<div className="catg-img">
										<img src="assets/images/catlist-8.png" alt="category"/>
									</div>
									<h5>FINISHING</h5>
								</a>
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

export default Categorlist
