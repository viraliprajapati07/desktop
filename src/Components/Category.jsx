import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from './Product/Card';


const Category = () => {

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
	const slides = [
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
		{
			imgSrc: 'assets/images/cat-background.png',
			title: 'STRUCTURE MATERIAL',
		},
	];
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<section class="middle-content">
				<div class="banner comm-mob-sec">
					<div class="swiper banner-inner banner-carousel">
						<div class="common-slick-slide swiper-wrapper">
							<div class="swiper-slide banner-item">
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
											<div className="radio-buttons-container-r">
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
									</div>

								</div>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<div className="container-fluid ">
					<div className="row">
						<div className="col-12">
							<div className="auto-slider">
								<div className="slider-wrapper" style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${(activeSlide * (120 + 25))}px)` }}>
									{slides.map((slide, index) => (
										<div key={index} className={`slide`} style={{ flex: '0 0 120px', marginRight: '25px', marginTop: '20px' }}>
											<a href="javascript:void(0)" className="catg-boxlink">
												<div className="catg-img" style={{ width: '200px', height: '90px', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
													<img src={slide.imgSrc} alt="category background image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
													<h5 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', fontWeight: "bold" }}>{slide.title}</h5>
												</div>
											</a>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="best-seller product-slider catts-products">
					<div class="container">
						<div class="row comm-mob-sec">
							<div class="col-12">
								<div class="product-main-title common-main-title">
									<h2>Material</h2>
								</div>
							</div>
						</div>
						<div class="row category-products mob-catlistpro">
					
							<Card name="products" Name="Structure material" Image='assets/images/pro-1.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

							<Card name="products" Name="Structure material" Image='assets/images/pro-2.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

							<Card name="products" Name="Structure material" Image='assets/images/pro-3.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

							<Card name="products" Name="Structure material" Image='assets/images/pro-4.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />
                          </div>
					
						<div class="row category-products mob-catlistpro">

							<Card name="products" Name="Structure material" Image='assets/images/pro-5.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />


							<Card name="products" Name="Structure material" Image='assets/images/pro-6.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

							<Card name="products" Name="Structure material" Image='assets/images/pro-7.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />


							<Card name="products" Name="Structure material" Image='assets/images/pro-8.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

						</div>

						<div class="row category-products mob-catlistpro">

							<Card name="products" Name="Structure material" Image='assets/images/pro-9.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />


							<Card name="products" Name="Structure material" Image='assets/images/pro-10.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

							<Card name="products" Name="Structure material" Image='assets/images/pro-11.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />


							<Card name="products" Name="Structure material" Image='assets/images/pro-12.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

						</div>
						<div class="row category-products mob-catlistpro">

							<Card name="products" Name="Structure material" Image='assets/images/pro-13.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />


							<Card name="products" Name="Structure material" Image='assets/images/pro-14.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

							<Card name="products" Name="Structure material" Image='assets/images/pro-15.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />


							<Card name="products" Name="Structure material" Image='assets/images/pro-16.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD" />

						</div>



					</div>
				</div>


			</section >
			{/* <!-- end middle content --> */}


		</>
	)
}

export default Category
