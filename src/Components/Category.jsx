import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
	
  return (
    <>
    <section class="middle-content">
		<div class="banner comm-mob-sec">
			<div class="swiper banner-inner banner-carousel">
				<div class="common-slick-slide swiper-wrapper">
					<div class="swiper-slide banner-item">
					<div className="banner">
					<div className="swiper banner-inner banner-carousel swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
					<div className="carousel-container" style={{ position: "relative"}}>

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
            <h1 className='h1'>ALL YOU NEED TO START<br/>YOUR DREAM HOME</h1>
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
            <h1 className='h1'>ALL YOU NEED TO START<br/>YOUR DREAM HOME</h1>
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
            <h1 className='h1'>ALL YOU NEED TO START<br/>YOUR DREAM HOME</h1>
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
		<div class="catg-slider">
			<div class="container-fluid p-0">
				<div class="row">
					<div class="col-12">
						<div className="catg-slider">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <Carousel interval={1500} pause={false} indicators={false}>
              <Carousel.Item className='catg-sliderbox'>
                <a href="javascript:void(0)" className="catg-boxlink">
                  <div className="catg-img">
                    <img
                      className="d-block w-100"
                      src="assets/images/cat-background.png"
                      alt="First slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <h5>STRUCTURE MATERIAL</h5>
                  </Carousel.Caption>
                </a>
              </Carousel.Item>
			 
			  <Carousel.Item className='catg-sliderbox'>
                <a href="javascript:void(0)" className="catg-boxlink">
                  <div className="catg-img">
                    <img
                      className="d-block w-100"
                      src="assets/images/cat-background.png"
                      alt="First slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <h5>STRUCTURE MATERIAL</h5>
                  </Carousel.Caption>
                </a>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
						{/* <div class="catg-sliderinner swiper">
							 <div class="swiper-wrapper">
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
							<div class="catg-sliderbox swiper-slide">
								<a href="javascript:void(0)" class="catg-boxlink">
									<div class="catg-img">
										<img src="assets/images/cat-background.png" alt="category background image"/>
									</div>
									<h5>STRUCTURE MATERIAL</h5>
								</a>
							</div>
						</div> 
						</div>*/}

					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="product-separator"></div>
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
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-1.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-2.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-3.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-4.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-5.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-6.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-7.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-8.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-9.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-10.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-11.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-12.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-13.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-14.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-15.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
						<div class="product-box">
							<div class="product-img text-center">
								<img src="assets/images/pro-16.png" alt="product image"/>
							</div>
							<div class="product-data">
								<div class="ppd-flex comm-desk-sec mob-fav">
									<button type="button" class="btn add-favBtn" id="add_favBtn">
										 <i class="fa fa-star-o" aria-hidden="true"></i>
									</button>
								</div>
								<h4><a href="product-view.html">Structure material</a></h4>
								<div class="product-varient">
									<div class="product-varient-inner">
										<label>Suppler:</label>
										<div class="pvi-flex">
											<p>Hempel</p>
										</div>
									</div>
									<div class="product-varient-inner pvi-weight">
										<label>Weight:</label>
										<div class="pvi-flex">
											<span>1x50 ML</span>
											<span>1x50 ML</span>
											<span>1x50 ML</span>
										</div>
									</div>
									<div class="product-varient-inner">
										<label>Unit Type:</label>
										<div class="pvi-flex">
											<p>Piece</p>
										</div>
									</div>
								</div>
								<div class="product-pricedata comm-mob-sec">
									<div class="ppd-flex">
										<button type="button" class="btn add-cartBtn" id="add_cartBtn">
											<img src="assets/images/add-cart.png" alt="add cart icon"/>
										</button>
										<button type="button" class="btn add-favBtn" id="add_favBtn">
											 <i class="fa fa-star-o" aria-hidden="true"></i>
										</button>
										<div class="price-amount">
											<div class="price-amountinner">
												<span class="price-discount"><del>12.00</del> KD</span>
												<span>12.00 KD</span>
											</div>
										</div>
									</div>
								</div>
								<div class="mob-addcart comm-desk-sec">
									<div class="product-pricedata">
										<div class="ppd-flex">
											<div class="pro-quantity">
												<div class="quantity">
													<button type="button" class="quantity-minus">-</button>	
														<input type="number" id="quantity_count" class="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
													<button type="button" class="quantity-plus">+</button>	
												</div>
											</div>
											<div class="price-amount">
												<div class="price-amountinner">
													<span class="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="pro-addcartbtn">
										<button type="button" class="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- end middle content --> */}


    </>
  )
}

export default Category
