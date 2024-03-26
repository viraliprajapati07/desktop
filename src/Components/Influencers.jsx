import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Product/Card';


function Influencers() {
	return (
		<>
			<section className="middle-content">
				<div className="influencers-topbanner">
					<div className="container-fluid p-0">
						<div className="row">
							<div className="col-12">
								<div className="banner influencers-banner">
									<div className="banner-inner">
										<div className="banner-item">
											<div className="banner-image">
												<img src="assets/images/influencers-banner.png" alt="banner" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="comm-mob-sec">
					<div className="best-seller product-slider">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="product-main-title common-main-title">
										<h2>Tools</h2>
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

									<Card name="products" Name="Structure material" Image='assets/images/pro-5.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel ="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD"/>

								</div>
								<div className="swiper-button-prev common-swipercontrol-btn"></div>
								<div className="swiper-button-next common-swipercontrol-btn"></div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="product-separator"></div>
							</div>
						</div>
					</div>
					<div className="new-product product-slider">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="product-main-title common-main-title">
										<h2>Stuff</h2>
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

									<Card name="products" Name="Structure material" Image='assets/images/pro-9.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel ="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD"/>
								</div>
								<div className="swiper-button-prev common-swipercontrol-btn"></div>
								<div className="swiper-button-next common-swipercontrol-btn"></div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="product-separator"></div>
							</div>
						</div>
					</div>
					<div className="best-seller product-slider">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="product-main-title common-main-title">
										<h2>Bags</h2>
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

									<Card name="products" Name="Structure material" Image='assets/images/pro-5.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel ="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" KD="KD" KDSpan="12.00 KD"/>
									</div>
									<div className="swiper-button-prev common-swipercontrol-btn"></div>
		   		    <div className="swiper-button-next common-swipercontrol-btn"></div>
									{/* <div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active" style={{ width: "255px", marginRight: "30px" }}>
										<div className="product-box">
											<div className="product-img text-center">
												<img src="assets/images/pro-1.png" alt="product image" />
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
															<Link to="/cart">
																<img src="assets/images/add-cart.png" alt="add cart icon" />
															</Link>
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
				</div>
				<div className="comm-desk-sec">
					<div className="best-seller product-slider catts-products inf-products">
						<div className="container">
							<div className="row comm-mob-sec">
								<div className="col-12">
									<div className="product-main-title common-main-title">
										<h2>Material</h2>
									</div>
								</div>
							</div>
							<div className="row category-products mob-catlistpro">
								<div className="col-12 inf-col-overflow p-0">
									<div className="inf-item-label">
										<h3>Tools</h3>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
									<div className="product-box">
										<div className="product-img text-center">
											<img src="assets/images/pro-1.png" alt="product image" />
										</div>
										<div className="product-data">
											<div className="ppd-flex comm-desk-sec mob-fav">
												<button type="button" className="btn add-favBtn" id="add_favBtn">
													<i className="fa fa-star-o" aria-hidden="true"></i>
												</button>
											</div>
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
											<div className="product-pricedata comm-mob-sec">
												<div className="ppd-flex">
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<Link to="/cart">
															<img src="assets/images/add-cart.png" alt="add cart icon" />
														</Link>
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
											<div className="mob-addcart comm-desk-sec">
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>
																<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
																<button type="button" className="quantity-plus">+</button>
															</div>
														</div>
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
													</div>
												</div>
												<div className="pro-addcartbtn">
													<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
									<div className="product-box">
										<div className="product-img text-center">
											<img src="assets/images/pro-2.png" alt="product image" />
										</div>
										<div className="product-data">
											<div className="ppd-flex comm-desk-sec mob-fav">
												<button type="button" className="btn add-favBtn" id="add_favBtn">
													<i className="fa fa-star-o" aria-hidden="true"></i>
												</button>
											</div>
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
											<div className="product-pricedata comm-mob-sec">
												<div className="ppd-flex">
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<Link to="/cart">
															<img src="assets/images/add-cart.png" alt="add cart icon" />
														</Link>
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
											<div className="mob-addcart comm-desk-sec">
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>
																<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
																<button type="button" className="quantity-plus">+</button>
															</div>
														</div>
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
													</div>
												</div>
												<div className="pro-addcartbtn">
													<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row category-products mob-catlistpro">
								<div className="col-12 inf-col-overflow p-0">
									<div className="inf-item-label">
										<h3>Stuff</h3>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
									<div className="product-box">
										<div className="product-img text-center">
											<img src="assets/images/pro-1.png" alt="product image" />
										</div>
										<div className="product-data">
											<div className="ppd-flex comm-desk-sec mob-fav">
												<button type="button" className="btn add-favBtn" id="add_favBtn">
													<i className="fa fa-star-o" aria-hidden="true"></i>
												</button>
											</div>
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
											<div className="product-pricedata comm-mob-sec">
												<div className="ppd-flex">
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<Link to="/cart">
															<img src="assets/images/add-cart.png" alt="add cart icon" />
														</Link>
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
											<div className="mob-addcart comm-desk-sec">
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>
																<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
																<button type="button" className="quantity-plus">+</button>
															</div>
														</div>
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
													</div>
												</div>
												<div className="pro-addcartbtn">
													<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
									<div className="product-box">
										<div className="product-img text-center">
											<img src="assets/images/pro-2.png" alt="product image" />
										</div>
										<div className="product-data">
											<div className="ppd-flex comm-desk-sec mob-fav">
												<button type="button" className="btn add-favBtn" id="add_favBtn">
													<i className="fa fa-star-o" aria-hidden="true"></i>
												</button>
											</div>
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
											<div className="product-pricedata comm-mob-sec">
												<div className="ppd-flex">
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<Link to="/cart">
															<img src="assets/images/add-cart.png" alt="add cart icon" />
														</Link>
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
											<div className="mob-addcart comm-desk-sec">
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>
																<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
																<button type="button" className="quantity-plus">+</button>
															</div>
														</div>
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
													</div>
												</div>
												<div className="pro-addcartbtn">
													<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row category-products mob-catlistpro">
								<div className="col-12 inf-col-overflow p-0">
									<div className="inf-item-label">
										<h3>Bags</h3>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
									<div className="product-box">
										<div className="product-img text-center">
											<img src="assets/images/pro-1.png" alt="product image" />
										</div>
										<div className="product-data">
											<div className="ppd-flex comm-desk-sec mob-fav">
												<button type="button" className="btn add-favBtn" id="add_favBtn">
													<i className="fa fa-star-o" aria-hidden="true"></i>
												</button>
											</div>
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
											<div className="product-pricedata comm-mob-sec">
												<div className="ppd-flex">
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<Link to="/cart">
															<img src="assets/images/add-cart.png" alt="add cart icon" />
														</Link>
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
											<div className="mob-addcart comm-desk-sec">
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>
																<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
																<button type="button" className="quantity-plus">+</button>
															</div>
														</div>
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
													</div>
												</div>
												<div className="pro-addcartbtn">
													<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-12 product-boxitem">
									<div className="product-box">
										<div className="product-img text-center">
											<img src="assets/images/pro-2.png" alt="product image" />
										</div>
										<div className="product-data">
											<div className="ppd-flex comm-desk-sec mob-fav">
												<button type="button" className="btn add-favBtn" id="add_favBtn">
													<i className="fa fa-star-o" aria-hidden="true"></i>
												</button>
											</div>
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
											<div className="product-pricedata comm-mob-sec">
												<div className="ppd-flex">
													<button type="button" className="btn add-cartBtn" id="add_cartBtn">
														<Link to="/cart">
															<img src="assets/images/add-cart.png" alt="add cart icon" />
														</Link>
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
											<div className="mob-addcart comm-desk-sec">
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="pro-quantity">
															<div className="quantity">
																<button type="button" className="quantity-minus">-</button>
																<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric" />
																<button type="button" className="quantity-plus">+</button>
															</div>
														</div>
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
													</div>
												</div>
												<div className="pro-addcartbtn">
													<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div> */}
								</div>
							</div>
						</div>
					</div>
				
			</section>


		</>
	)
}

export default Influencers
