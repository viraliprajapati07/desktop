import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Product/Card';

function Cart() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [quantity3, setQuantity3] = useState(1);

  const handleIncrement1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const handleDecrement1 = () => {
    if (quantity1 > 0) {
      setQuantity1(quantity1 - 1);
    }
  };

  const handleIncrement2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const handleDecrement2 = () => {
    if (quantity2 > 0) {
      setQuantity2(quantity2 - 1);
    }
  };

  const handleIncrement3 = () => {
    setQuantity3(quantity3 + 1);
  };

  const handleDecrement3 = () => {
    if (quantity3 > 0) {
      setQuantity3(quantity3 - 1);
    }
  };
  return (
    <>
    <section className="middle-content">
		<div className="cs-breadcrumb comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul>
							<li><Link to="/home">Home</Link></li>
							<li><Link to="/category">Product</Link></li>
							<li>Cart</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
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
							<div className="proview-flex cpf-flex">
								<div className="proview-left">
									<div className="cart-viewimg">
										 <a href="javascript:void(0)">
								             <img src="assets/images/pro-1.png" alt="product image"/>
								         </a>
								     </div>
								     <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
								     	<img src="assets/images/close-icon.png" alt="delete icon"/>
								     </button>
								</div>
								<div className="proview-right">
									<div className="product-data">
										<h4><a href="product-view.html" tabindex="0">Structure material</a></h4>
										<div className="product-varient mb-0">
											<div className="product-varient-inner">
												<label>Suppler:</label>
												<div className="pvi-flex">
													<p>Hempel</p>
												</div>
											</div>
											<div className="cartv-flex">
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
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
														<div className="pro-quantity">
        <div className="quantity">
          <button type="button" className="quantity-minus" onClick={handleDecrement1}>-</button>
          <input type="number" className="input-text qty" value={quantity1} readOnly />
          <button type="button" className="quantity-plus" onClick={handleIncrement1}>+</button>
        </div>
      </div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="proview-flex cpf-flex">
								<div className="proview-left">
									<div className="cart-viewimg">
										 <a href="javascript:void(0)">
								             <img src="assets/images/pro-1.png" alt="product image"/>
								         </a>
								     </div>
								     <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
								     	<img src="assets/images/close-icon.png" alt="delete icon"/>
								     </button>
								</div>
								<div className="proview-right">
									<div className="product-data">
										<h4><a href="product-view.html" tabindex="0">Structure material</a></h4>
										<div className="product-varient mb-0">
											<div className="product-varient-inner">
												<label>Suppler:</label>
												<div className="pvi-flex">
													<p>Hempel</p>
												</div>
											</div>
											<div className="cartv-flex">
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
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
														<div className="pro-quantity">
														<div className="pro-quantity">
        <div className="quantity">
          <button type="button" className="quantity-minus" onClick={handleDecrement2}>-</button>
          <input type="number" className="input-text qty" value={quantity2} readOnly />
          <button type="button" className="quantity-plus" onClick={handleIncrement2}>+</button>
        </div>
      </div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="proview-flex cpf-flex">
								<div className="proview-left">
									<div className="cart-viewimg">
										 <a href="javascript:void(0)">
								             <img src="assets/images/pro-1.png" alt="product image"/>
								         </a>
								     </div>
								     <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
								     	<img src="assets/images/close-icon.png" alt="delete icon"/>
								     </button>
								</div>
								<div className="proview-right">
									<div className="product-data">
										<h4><a href="product-view.html" tabindex="0">Structure material</a></h4>
										<div className="product-varient mb-0">
											<div className="product-varient-inner">
												<label>Suppler:</label>
												<div className="pvi-flex">
													<p>Hempel</p>
												</div>
											</div>
											<div className="cartv-flex">
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
												<div className="product-pricedata">
													<div className="ppd-flex">
														<div className="price-amount">
															<div className="price-amountinner">
																<span className="price-discount"><del>12.00</del> KD</span>
																<span>12.00 KD</span>
															</div>
														</div>
														<div className="pro-quantity">
														<div className="pro-quantity">
        <div className="quantity">
          <button type="button" className="quantity-minus" onClick={handleDecrement3}>-</button>
          <input type="number" className="input-text qty" value={quantity3} readOnly />
          <button type="button" className="quantity-plus" onClick={handleIncrement3}>+</button>
        </div>
      </div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="cart-viewtotals">
							<div className="cart-viewtotals-inner">
								<label>Subtotal:</label>
								<span>12.00 kd</span>
							</div>
							<div className="cart-viewtotals-inner cvi-noborder">
								<label>Delivery Charge:</label>
								<span>12.00 kd</span>
							</div>
							<div className="cart-viewtotals-inner cvi-noborder use-credit-fields">
								<label>Use Credit:<br/><span className="vailablility-credit-count m-0"><span className="m-0">Available Credit:</span> <b>4.00 Kd</b></span></label>
								<span className="credit-span"><input type="number" placeholder="Enter Credit" className="form-control" name="credit-use"/> <span>kd</span></span>
							</div>
							<div className="cart-viewtotals-inner cvi-bott">
								<label>Total:</label>
								<span>12.00 kd</span>
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
								<Link to ="/category">
								<button type="button" className="btn login-btn" id="cart_continue_shopbtn">Continue Shopping</button>
								</Link>
								<Link to= "/registration">
								<button type="button" className="btn login-btn" id="cart_nextbtn">Next</button>
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
		
	</section>
    <div class="comm-msg-modal cam-modal choose-address-modal" id="choose_address_modal">
		<div class="modl-inner">
			<div class="modl-header position-relative text-center">
				<h3>Choose delivery address</h3>
				<button type="button" class="btn modal-close-btn"><img src="assets/images/modal-close.png" alt="close"/></button>
			</div>
			<div class="modl-body">
				<h4><a href="#" class="add-address-linkmodal" id="cart_newaddress_pop">Add new adress</a></h4>
				<div class="modal-addressbox">
					<div class="modal-addressbox-inner">
						<div class="modal-addressbox-innerleft">
							<label for="address_choose_home">
								<h4>Home</h4>
								<p>Block Block A, St. 69 Street, House 2</p>
								<h5>Abu Hlefa</h5>
								<input type="radio" name="address_choose" class="radio-button__input" id="address_choose_home" hidden/>
								<div class="radio-button__custom-indicator"></div>
							</label>
						</div>
						<div class="modal-addressbox-innerbottom">
							<a href="#">Edit</a>
						</div>
 					</div>
 					<div class="modal-addressbox-inner">
						<div class="modal-addressbox-innerleft">
							<label for="address_choose_office">
								<h4>Office</h4>
								<p>Block Block A, St. 69 Street, House 2</p>
								<h5>Abu Hlefa</h5>
								<input type="radio" name="address_choose" class="radio-button__input" id="address_choose_office" hidden/>
								<div class="radio-button__custom-indicator"></div>
							</label>
						</div>
						<div class="modal-addressbox-innerbottom">
							<a href="#">Edit</a>
						</div>
 					</div>
 					<div class="modal-addressbox-inner">
						<div class="modal-addressbox-innerleft">
							<label for="address_choose_workshop">
								<h4>Workshop</h4>
								<p>Block Block A, St. 69 Street, House 2</p>
								<h5>Abu Hlefa</h5>
								<input type="radio" name="address_choose" class="radio-button__input" id="address_choose_workshop" hidden/>
								<div class="radio-button__custom-indicator"></div>
							</label>
						</div>
						<div class="modal-addressbox-innerbottom">
							<a href="#">Edit</a>
						</div>
 					</div>
 					<div class="modal-addressbox-inner">
						<div class="modal-addressbox-innerleft">
							<label for="address_choose_other">
								<h4>Clinet 1 aziz</h4>
								<p>Block Block A, St. 69 Street, House 2</p>
								<h5>Abu Hlefa</h5>
								<input type="radio" name="address_choose" class="radio-button__input" id="address_choose_other" hidden/>
								<div class="radio-button__custom-indicator"></div>
							</label>
						</div>
						<div class="modal-addressbox-innerbottom">
							<a href="#">Edit</a>
						</div>
 					</div>
				</div>
				<div class="mfc-formsend-btn text-center mt-4">
					<button type="button" class="btn text-capitalize" id="choose_address_nextbtn">Next</button>
				</div>
			</div>
		</div>
	</div>

	<div class="comm-msg-modal cam-modal addnew-address-modal" id="addnew_address_modal">
		<div class="modl-inner">
			<div class="modl-header position-relative text-center">
				<h3>New Address</h3>
				<button type="button" class="btn modal-close-btn"><img src="assets/images/modal-close.png" alt="close"/></button>
			</div>
			<div class="modl-body">
				<div class="addnew-address-form common-credform">
					<form>
						<div class="form-group">
							<input type="text" name="add-name" placeholder="Adress name" class="form-control"/>
						</div>
						<div class="form-group">
							<div class="new-address-select">
								<img src="assets/images/select-arrow.png" alt="arrow"/>
								<select type="select" name="add-area" class="form-control">
									<option disabled selected>Area</option>
									<option value="Area Name">Area Name</option>
									<option value="Area Name">Area Name</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<input type="text" name="add-block" placeholder="Block" class="form-control"/>
						</div>
						<div class="form-group">
							<input type="text" name="add-street" placeholder="Street" class="form-control"/>
						</div>
						<div class="form-group">
							<input type="text" name="add-avenue" placeholder="Avenue ( Optional )" class="form-control"/>
						</div>
						<div class="form-group">
							<input type="text" name="add-building-no" placeholder="Building number" class="form-control"/>
						</div>
						<div class="form-group">
							<input type="text" name="add-floor" placeholder="Floor ( Optional )" class="form-control"/>
						</div>
						<div class="form-group">
							<input type="text" name="add-apartment" placeholder="Apartment number ( Optional )" class="form-control"/>
						</div>
						<div class="form-group">
							<div class="address-map-location">
								<h4>Select your location ( Optional )</h4>
								<div class="aml-inner">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.41193999645!2d47.961267178803226!3d29.37610101465698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1684418108436!5m2!1sen!2sin" style={{border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy :"no-referrer-when-downgrade"}}></iframe>
								</div>
							</div>
						</div>
						<div class="form-group mb-0 mfc-formsend-btn text-center">
							<button type="button" class="btn" id="add_newaddress_btn">Add</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>


    </>
  )
}

export default Cart;
