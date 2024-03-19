import React, { useEffect } from 'react';
import Swiper from 'swiper/swiper-bundle'; // Import Swiper bundled version
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles



const MyComponent = () => {
  useEffect(() => {
    const bannerSwiper = new Swiper('.banner-carousel', {
      spaceBetween: 0,
      centeredSlides: false,
      slidesPerView: 1,
      loop: true,
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        reverseDirection: false,
        disableOnInteraction: false,
      },
    });

    const productSwiper = new Swiper('.product-sliding', {
      spaceBetween: 30,
      centeredSlides: false,
      slidesPerView: 4,
      loop: false,
      freeMode: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        200: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });

    const influencersSwiper = new Swiper('.influencers-sliding', {
      spaceBetween: 0,
      centeredSlides: false,
      slidesPerView: 'auto',
      loop: false,
      freeMode: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Event handlers
    const addCartHandler = () => {
      // Your logic when add to cart button is clicked
      window.location.href = 'cart.html';
    };

    const missingItemPopBtnHandler = () => {
      // Your logic for handling missing item pop-up button click
      document.getElementById('missing_item_modal').classNameList.remove('show');
    };

    const missingItemConfPopBtnHandler = () => {
      // Your logic for handling missing item confirmation pop-up buttons click
      document.getElementById('missing_item_confmodal').classNameList.remove('show');
    };

    // Event listeners
    document.getElementById('pro_addcart_btn').addEventListener('click', addCartHandler);
    document.getElementById('add_cartBtn').addEventListener('click', addCartHandler);
    document.getElementById('missing_item_popbtn').addEventListener('click', missingItemPopBtnHandler);
    document.getElementById('missing_item_confpopbtnY').addEventListener('click', missingItemConfPopBtnHandler);
    document.getElementById('missing_item_confpopbtnN').addEventListener('click', missingItemConfPopBtnHandler);

    // Cleanup
    return () => {
      bannerSwiper.destroy();
      productSwiper.destroy();
      influencersSwiper.destroy();

      document.getElementById('pro_addcart_btn').removeEventListener('click', addCartHandler);
      document.getElementById('add_cartBtn').removeEventListener('click', addCartHandler);
      document.getElementById('missing_item_popbtn').removeEventListener('click', missingItemPopBtnHandler);
      document.getElementById('missing_item_confpopbtnY').removeEventListener('click', missingItemConfPopBtnHandler);
      document.getElementById('missing_item_confpopbtnN').removeEventListener('click', missingItemConfPopBtnHandler);
    };
  }, []);

  return (
    <div>
<section className="middle-content">
		<div className="banner">
			<div className="swiper banner-inner banner-carousel">
				<div className="common-slick-slide swiper-wrapper">
					<div className="swiper-slide banner-item">
						<div className="banner-image">
							<img src="assets/images/banner.png" alt="banner"/>
						</div>
						<div className="banner-data">
							<div className="banner-datainner">
								<h1>ALL YOU NEED TO START<br/>YOUR DREAM HOME</h1>
								<p>
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
					<div className="swiper-slide banner-item">
						<div className="banner-image">
							<img src="assets/images/banner2.png" alt="banner"/>
						</div>
						<div className="banner-data">
							<div className="banner-datainner">
								<h1>ALL YOU NEED TO START<br/>YOUR DREAM HOME</h1>
								<p>
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
					<div className="swiper-slide banner-item">
						<div className="banner-image">
							<img src="assets/images/banner.png" alt="banner"/>
						</div>
						<div className="banner-data">
							<div className="banner-datainner">
								<h1>ALL YOU NEED TO START<br/>YOUR DREAM HOME</h1>
								<p>
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
				</div>
				<div className="swiper-pagination"></div>
			</div>
		</div>
		<div className="influencers product-slider comm-desk-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="product-main-title common-main-title">
							<h2>Influencers</h2>
						</div>
					</div>
				</div>
				<div className="swiper product-common-swiper influencers-sliding">
					<div className="common-slick-slide swiper-wrapper">
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html" className="influencers-link">
								<div className="influencers-img">
									<img src="assets/images/influencers-1.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-2.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-3.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-4.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
							</a>
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
				   	<div className="swiper-button-next common-swipercontrol-btn"></div>
				</div>
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
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-1.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-2.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-3.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-4.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-4.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
		   		    <div className="swiper-button-next common-swipercontrol-btn"></div>
				</div>
			</div>
		</div>
		<div className="container comm-mob-sec">
			<div className="row">
				<div className="col-12">
					<div className="product-separator"></div>
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
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-5.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-6.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-7.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-8.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-8.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="product-view.html">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
			   		<div className="swiper-button-next common-swipercontrol-btn"></div>
			   	</div>
			</div>
		</div>
		<div className="container comm-mob-sec">
			<div className="row">
				<div className="col-12">
					<div className="product-separator"></div>
				</div>
			</div>
		</div>
		<div className="mob-shoptabs">
			<div className="mob-shoptabs-inner comm-desk-sec">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
				  <li className="nav-item">
				    <a className="nav-link active" id="mob_shopbycat-tab" data-toggle="tab" href="#mob_shopbycat" role="tab" aria-controls="mob_shopbycat" aria-selected="true">
				    	CONSTRUCTION MATERIALS STEP WISE
				    </a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" id="mob_stepcons-tab" data-toggle="tab" href="#mob_stepcons" role="tab" aria-controls="mob_stepcons" aria-selected="false">
				    	CATEGORIES
				    </a>
				  </li>
				</ul>
			</div>
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
								<div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
									<div className="home-catname">
										<a href="category-list.html">
											<div className="home-catimg">
												<img src="assets/images/cat-back-1.png" alt="category image"/>
												<h4>MATRIAL</h4>
											</div>
										</a>
			 						</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
									<div className="home-catname">
										<a href="category-list.html">
											<div className="home-catimg">
												<img src="assets/images/cat-back-2.png" alt="category image"/>
												<h4>TOOLS</h4>
											</div>
										</a>
			 						</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
									<div className="home-catname">
										<a href="category-list.html">
											<div className="home-catimg">
												<img src="assets/images/cat-back-3.png" alt="category image"/>
												<h4>ASMENT</h4>
											</div>
										</a>
			 						</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
									<div className="home-catname">
										<a href="category-list.html">
											<div className="home-catimg">
												<img src="assets/images/cat-back-4.png" alt="category image"/>
												<h4>WOOD</h4>
											</div>
										</a>
			 						</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-pane fade" id="mob_stepcons" role="tabpanel" aria-labelledby="mob_stepcons-tab">
					<div className="shopbycat stepwise-construction">
						<div className="container">
							<div className="row comm-mob-sec">
								<div className="col-12">
									<div className="common-main-title">
										<h2 className="text-center">Construction Materials <br/>Step wise</h2>
			 						</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="swc-boxflex">
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-1.png" alt="stepwise construction icon"/>
											</div>
											<h5>SITE PREPARATION</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-2.png" alt="stepwise construction icon"/>
											</div>
											<h5>EXCAVATION <br/>& FOUNDATION</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-3.png" alt="stepwise construction icon"/>
											</div>
											<h5>WATERPROOF <br/>& INSULATION</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-4.png" alt="stepwise construction icon"/>
											</div>
											<h5>CONCRETE STRUCTURE</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-5.png" alt="stepwise construction icon"/>
											</div>
											<h5>BLOCK <br/>& ACCESSORIES</h5>
										</div>
										<div className="swc-boxflex-inner comm-desk-sec">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-6.png" alt="stepwise construction icon"/>
											</div>
											<h5>REPAIR <br/>& SPECIALTIES</h5>
										</div>
										<div className="swc-boxflex-inner comm-desk-sec">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-7.png" alt="stepwise construction icon"/>
											</div>
											<h5>FINISHING WORKS</h5>
										</div>
										<div className="swc-boxflex-inner comm-desk-sec">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-8.png" alt="stepwise construction icon"/>
											</div>
											<h5>MISCELLANEOUS TOOLS</h5>
										</div>
										<div className="swc-boxflex-inner comm-desk-sec">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-9.png" alt="stepwise construction icon"/>
											</div>
											<h5>PLASTER <br/>& ACCESSORIES</h5>
										</div>
									</div>
								</div>					
							</div>
							<div className="row comm-mob-sec">
								<div className="col-12">
									<div className="swc-boxflex swc-boxflex-two">
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-6.png" alt="stepwise construction icon"/>
											</div>
											<h5>REPAIR <br/>& SPECIALTIES</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-7.png" alt="stepwise construction icon"/>
											</div>
											<h5>FINISHING WORKS</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-8.png" alt="stepwise construction icon"/>
											</div>
											<h5>MISCELLANEOUS TOOLS</h5>
										</div>
										<div className="swc-boxflex-inner">
											<div className="swc-boxflex-img">
												<img src="assets/images/swc-9.png" alt="stepwise construction icon"/>
											</div>
											<h5>PLASTER <br/>& ACCESSORIES</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container comm-mob-sec">
			<div className="row">
				<div className="col-12">
					<div className="product-separator"></div>
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
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html" className="influencers-link">
								<div className="influencers-img">
									<img src="assets/images/influencers-1.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-2.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-3.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-4.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-5.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-1.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-2.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
						<div className="swiper-slide influencers-boxcol">
							<a href="influencers.html">
								<div className="influencers-img">
									<img src="assets/images/influencers-3.png" alt="influencers image"/>
								</div>
								<div className="influencers-name">
									<h4>Influencers</h4>
								</div>
							</a>
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
			   		<div className="swiper-button-next common-swipercontrol-btn"></div>
				</div>
			</div>
		</div>
	</section>
    </div>
  );
};

export default MyComponent;
