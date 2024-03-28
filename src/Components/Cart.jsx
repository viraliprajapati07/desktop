import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Product/Card';
import LinkFile from './LinkFile/LinkFile';
import CartBox from './Cart/CartBox';
import KD from './Price/KD';

function Cart() {
	return (
		<>
			<section className="middle-content">
				<Link to="/category ">
					<LinkFile li="Product" li2="Cart" />
				</Link>
				<div className="product-view cart-view">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="cart-viewedit">
									<a href="javascript:void(0)" className="cart-viewedit-link">Edit</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="proview-top">
									<CartBox  Name="Structure material" Image='assets/images/pro-1.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece"  Del="12.00" Price="12.00 " />

									<CartBox  Name="Structure material" Image='assets/images/pro-1.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece"  Del="12.00" Price="12.00 " />

									<CartBox  Name="Structure material" Image='assets/images/pro-1.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece"  Del="12.00" Price="12.00 " />
								</div>
							</div>
							<div className="col-12">
								<div className="cart-viewtotals">
									<div className="cart-viewtotals-inner">
										<label>Subtotal:</label>
										<span>12.00 <KD/></span>
									</div>
									<div className="cart-viewtotals-inner cvi-noborder">
										<label>Delivery Charge:</label>
										<span>12.00 <KD/></span>
									</div>
									<div className="cart-viewtotals-inner cvi-noborder use-credit-fields">
										<label>Use Credit:<br /><span className="vailablility-credit-count m-0"><span className="m-0">Available Credit:</span> <b>4.00 <KD/></b></span></label>
										<span className="credit-span"><input type="number" placeholder="Enter Credit" className="form-control" name="credit-use" /> <span><KD/></span></span>
									</div>
									<div className="cart-viewtotals-inner cvi-bott " >
										<label>Total:</label>
										<span>12.00 <KD/></span>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="general-notes">
									<h3>General notes</h3>
									<textarea type="textarea" className="form-control" placeholder="Notes"></textarea>
								</div>
								<div className="common-credform-btns">
									<div className="cart-view-btngroup">
										<Link to="/category">
											<button type="button" className="btn login-btn" id="cart_continue_shopbtn">Continue Shopping</button>
										</Link>
										<Link to="/registration">
											<button type="button" className="btn login-btn" id="cart_nextbtn" style={{ marginLeft: "8%" }}>Next</button>
										</Link>
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
				<div className="best-seller product-slider comm-mob-sec">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="product-main-title common-main-title">
									<h2>Products you may like!</h2>
									<a href="#" className="view-moreLink">View all</a>
								</div>
							</div>
						</div>
						<div className="swiper product-sliding product-common-swiper">
							<div className="row common-slick-slide swiper-wrapper">
								<Card name="products" Name="Structure material" Image='assets/images/pro-1.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" Price="12.00 " />

								<Card name="products" Name="Structure material" Image='assets/images/pro-2.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" Price="12.00 " />

								<Card name="products" Name="Structure material" Image='assets/images/pro-3.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" Price="12.00 " />

								<Card name="products" Name="Structure material" Image='assets/images/pro-4.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" Price="12.00 " />

								<Card name="products" Name="Structure material" Image='assets/images/pro-4.png' InnerLabel='Suppler:' P="Hempel" L="Weight:" Span="1x50 ML" UnitLabel="Unit Type:" PriceP="Piece" CartImage="assets/images/add-cart.png" Icon="fa fa-star-o" Del="12.00" Price="12.00 " />
							</div>
							<div className="swiper-button-prev common-swipercontrol-btn"></div>
							<div className="swiper-button-next common-swipercontrol-btn"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Cart;
