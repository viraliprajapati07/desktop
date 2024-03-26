import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Card from './Product/Card';
import CategoryBox from './Category/CategoryBox';
import InfluencerBox from './Influencers/InfluencerBox';

const Home = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = (index + 1) % 3; // Change '3' to the total number of images
			setIndex(nextIndex);
		}, 2500);

		return () => clearInterval(interval);
	}, [index]);

	const handleRadioChange = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<div className="mobile-sidebar">
				<div className="mobile-sidebar-inner">
					<div className="mobile-sidebar-innerflex">
						<div className="msi-inner-top">
							<button type="button" className="btn mobile-sidebar-closeBtn"><img src="assets/images/modal-close.png" alt="close icon" /></button>
							<ul className="msi-menubar">
								<li><a href="index.html" className="active">home</a></li>
								<li className="mobile-menu-dropdown"><a href="#" className="mmd-link">my account <i className="fa fa-angle-down" aria-hidden="true"></i></a>
									<ul>
										<li><a href="profile.html">Profile</a></li>
										<li><a href="order-list.html">my orders</a></li>
										<li><a href="wishlist.html">whislist</a></li>
									</ul>
								</li>
								<li><a href="about.html">about us</a></li>
								<li><a href="contact.html">contact us</a></li>
								<li><a href="terms.html">terms & conditions</a></li>
								<li><a href="feedback.html">feedback</a></li>
								<li><a href="#">tell a friend</a></li>
							</ul>
							<div className="lang-notif">
								<div className="lang-notif-inner">
									<span>Language</span>
									<span className="lang-switchlink"><a href="#">ar</a>/<a href="#">en</a></span>
								</div>
								<div className="lang-notif-inner">
									<span>notification</span>
									<span className="lni-swicthes">
										<div className="custom-control custom-switch">
											<label className="custom-control-label" for="customSwitch1">
												<input type="checkbox" className="custom-control-input" id="customSwitch1" checked />
												<span className="custom-control-label-span"></span>
											</label>
										</div>
									</span>
								</div>
								<div className="msi-logobar">
									<img src="assets/images/main-logo.png" alt="brand logo" />
								</div>
								<div className="msi-socialbar">
									<ul>
										<li><a href="javascript:void(0)"><img src="assets/images/twitter-blue.png" alt="twitter icon" /></a></li>
										<li><a href="javascript:void(0)"><img src="assets/images/instagram-blue.png" alt="twitter icon" /></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="msi-inner-bottom">
							<div className="msi-powerby-logobar">
								<div className="msi-powerby-logobar-inner">
									<img src="assets/images/msi-si-logo.png" alt="brand logo" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  <div className="wrapper">
			<section className="middle-content">
					<div className="banner">
						<div className="swiper banner-inner banner-carousel swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
							<div className="carousel-container" style={{ position: "relative" }}>
								<Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="common-slick-slide" controls={false} indicators={false}>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="assets/images/banner.png"
											alt="First slide"
										/>
										<Carousel.Caption className='caption'>
											<div className='row'>
												<div className='col-md-6'>
													<div className='slidcontent'>
														<h1 className='h1'>ALL YOU NEED TO START<br />YOUR DREAM HOME</h1>
														<p className='p'>
															Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
															nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
															volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
															ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
															autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
															consequat, vel illum dolore eu feugiat
														</p>
														<a href="javascript: void(0)" className="banner-btn">Start Shopping</a>
													</div>
												</div>
											</div>
										</Carousel.Caption>
									</Carousel.Item>
									
									
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="assets/images/banner2.png"
											alt="Second slide"
										/>
										<Carousel.Caption className='caption'>
											<div className='row'>
												<div className='col-md-6'>
													<div className='slidcontent'>
														<h1 className='h1'>ALL YOU NEED TO START<br />YOUR DREAM HOME</h1>
														<p className='p'>
															Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
															nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
															volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
															ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
															autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
															consequat, vel illum dolore eu feugiat
														</p>
														<a href="javascript: void(0)" className="banner-btn">Start Shopping</a>
													</div>
												</div>
											</div>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="assets/images/banner.png"
											alt="Third slide"
										/>
										<Carousel.Caption className='caption'>
											<div className='row'>
												<div className='col-md-6'>
													<div className='slidcontent'>
														<h1 className='h1'>ALL YOU NEED TO START<br />YOUR DREAM HOME</h1>
														<p className='p'>
															Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
															nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
															volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
															ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
															autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
															consequat, vel illum dolore eu feugiat
														</p>
														<a href="javascript: void(0)" className="banner-btn">Start Shopping</a>
													</div>
												</div>
											</div>
										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>
								<div className="radio-buttons-container">
									{[0, 1, 2].map((idx) => (
										<input
											key={idx}
											type="radio"
											id={`radio${idx}`}
											name="slider"
											style={{ marginRight: '10px', cursor: 'pointer' }}
											checked={index === idx}
											onChange={() => handleRadioChange(idx)}
										/>
									))}
								</div>
							</div>
							<div className="swiper-pagination"></div>
						</div>
					</div>
				
					<div className="best-seller product-slider comm-mob-sec">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="product-main-title common-main-title">
										<h2>Best seller</h2>
										<a href="#" className="view-moreLink">View all</a>
									</div>
								</div>
							</div>
							<div className="swiper product-sliding product-common-swiper">
								<div className="row common-slick-slide swiper-wrapper">

									<Card name="products" Name="Structure material" Image='assets/images/pro-1.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

									<Card name="products" Name="Structure material" Image='assets/images/pro-2.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

									<Card name="products" Name="Structure material" Image='assets/images/pro-3.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

									<Card name="products" Name="Structure material" Image='assets/images/pro-4.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

									<Card name="products" Name="Structure material" Image='assets/images/pro-5.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />
								</div>
								<div className="swiper-button-prev common-swipercontrol-btn"></div>
								<div className="swiper-button-next common-swipercontrol-btn"></div>
							</div>
						</div>
					</div>
					
					<div className="new-product product-slider comm-mob-sec">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="product-main-title common-main-title">
										<h2>New products</h2>
										<a href="#" className="view-moreLink">View all</a>
									</div>
								</div>
							</div>
							<div className="swiper product-sliding product-common-swiper">
								<div className="row common-slick-slide swiper-wrapper">

									<Card name="products" Name="Structure material" Image='assets/images/pro-5.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />


									<Card name="products" Name="Structure material" Image='assets/images/pro-6.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

									<Card name="products" Name="Structure material" Image='assets/images/pro-7.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />
									
									<Card name="products" Name="Structure material" Image='assets/images/pro-8.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />


								</div>
								<div className="swiper-button-prev common-swipercontrol-btn"></div>
								<div className="swiper-button-next common-swipercontrol-btn"></div>
							</div>
						</div>
					</div>

					<div className="mob-shoptabs">

						<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade show active" id="mob_shopbycat" role="tabpanel" aria-labelledby="mob_shopbycat-tab">
								<div className="shopbycat">
									<div className="container">
										<div className="row comm-mob-sec">
											<div className="col-12">
												<div className="common-main-title">
													<h2 className="text-center">Shop By Category</h2>
												</div>
											</div>
										</div>
										<div className="row">
											<CategoryBox img="assets/images/cat-back-1.png" h4="MATRIAL" />

											<CategoryBox img="assets/images/cat-back-2.png" h4="Tools" />

											<CategoryBox img="assets/images/cat-back-3.png" h4="ASMENT" />

											<CategoryBox img="assets/images/cat-back-4.png" h4="WOOD" />

										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				
					<div className="influencers product-slider comm-mob-sec">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="product-main-title common-main-title">
										<h2>Influencers</h2>
										<a href="#" className="view-moreLink">View all</a>
									</div>
								</div>
							</div>
							<div className="swiper product-common-swiper influencers-sliding">
								<div className="common-slick-slide swiper-wrapper">

									<InfluencerBox img="assets/images/influencers-1.png" alt="influencers image" />

									<InfluencerBox img="assets/images/influencers-2.png" alt="influencers image" />

									<InfluencerBox img="assets/images/influencers-3.png" alt="influencers image" />

									<InfluencerBox img="assets/images/influencers-4.png" alt="influencers image" />

									<InfluencerBox img="assets/images/influencers-5.png" alt="influencers image" />

									<InfluencerBox img="assets/images/influencers-1.png" alt="influencers image" />

									<InfluencerBox img="assets/images/influencers-2.png" alt="influencers image" />

									<InfluencerBox img="assets/images/influencers-3.png" alt="influencers image" />

								</div>
								<div className="swiper-button-prev common-swipercontrol-btn"></div>
								<div className="swiper-button-next common-swipercontrol-btn"></div>
							</div>
						</div>
					</div>
				</section>

			</div>
		</>
	)
}
export default Home;

