import React from 'react'
import { Link } from 'react-router-dom'

function Cartpayment() {
  return (
   <>
   <section className="middle-content">
		<div className="cs-breadcrumb comm-mob-sec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul>
							<li><Link to ="/home">Home</Link></li>
							<li><Link to ="/cart">Product</Link></li>
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
						<div className="cart-payinfo">
							<div className="cart-payinfo-inner">
								<div className="ordered-schedule-info">
									<h3 className="cpi-cart-title">Your order will be delivered</h3>
									<p>Wednesday 24-05-2023</p>
								</div>
								<div className="cart-viewedit">
									<a href="javascript:void(0)" className="cart-viewedit-link">Edit</a>
								</div>
							</div>
							<div className="cart-payinfo-inner">
								<div className="cart-viewaddress">
									<h3 className="cpi-cart-title">Home</h3>
									<div className="cart-viewaddress-flex">
										<div className="cart-viewaddress-flex-l">
											<p>Block Block A, St. 69 Street, House 2</p>
											<p className="cadd-name">Abu Hlefa</p>
										</div>
										<div className="cart-viewedit">
											<a href="javascript:void(0)" className="cart-viewedit-link">Edit</a>
										</div>
									</div>
								</div>								
							</div>
							<div className="cart-payinfo-inner">
								<div className="cart-viewaddress">
									<h3 className="cpi-cart-title">Pay with</h3>
									<div className="cart-viewaddress-flex cvf-payment-flex">
										<div className="common-radiocheck-labels">
											<label className="radio-button__label-wrapper" for="payment_knet">
										      <img src="assets/images/knet.png" alt="knet image"/>  Knet
										      <input type="radio" name="payment_input" id="payment_knet" value="" className="radio-button__input" hidden=""/>
										      <div className="radio-button__custom-indicator"></div> 
										    </label>
										</div>
										<div className="common-radiocheck-labels">
											<label className="radio-button__label-wrapper" for="payment_visa">
										      <img src="assets/images/visa.png" alt="visa image"/>  Visa / Mastercard
										      <input type="radio" name="payment_input" id="payment_visa" value="" className="radio-button__input" hidden=""/>
										      <div className="radio-button__custom-indicator"></div> 
										    </label>
										</div>
										<div className="common-radiocheck-labels">
											<label className="radio-button__label-wrapper" for="payment_apple">
										      <img src="assets/images/visa.png" alt="apple image"/>  Apple pay
										      <input type="radio" name="payment_input" id="payment_apple" value="" className="radio-button__input" hidden=""/>
										      <div className="radio-button__custom-indicator">
                                                </div> 
										    </label>
										</div>
									</div>
									<div className="cart-smslink">
										<div className="cart-smslink-inner">
											<div className="cart-viewaddress-flex cvf-payment-flex">
												<div className="common-radiocheck-labels">
													<label className="radio-button__label-wrapper" for="payment_sms">
												      Send a link
												      <input type="radio" name="payment_input" id="payment_sms" value="" className="radio-button__input" hidden=""/>
												      <div className="radio-button__custom-indicator"></div> 
												    </label>
												</div>
											</div>
											<div className="cart-smslink-input">
												<input type="text" name="phone" placeholder="Mobile number" className="form-control"/>
											</div>
										</div>
									</div>
								</div>								
							</div>
							<div className="cart-payinfo-inner">
								<div className="cart-viewaddress">
									<h3 className="cpi-cart-title">Promo code</h3>
									<div className="cart-smslink promocode-inner">
										<div className="cart-smslink-inner">
											<div className="cart-smslink-input">
												<input type="text" name="promo" placeholder="Promo code" className="form-control"/>
											</div>
										</div>
									</div>
								</div>								
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="form-group pay-terms-reglink">
							<div className="common-radiocheck-labels">
								<label className="radio-button__label-wrapper" for="pay_terms_input" id="tashed_pay_terms">
							       Terms & conditions approval
							      <input type="radio" name="pay-terms-input" id="pay_terms_input" value="" className="radio-button__input" hidden=""/>
							      <div className="radio-button__custom-indicator"></div> 
							    </label>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="common-credform-btns">
							<div className="cart-view-btngroup mob-cartview-btn">
                                <Link to = "/category">
								<button type="button" className="btn login-btn" id="cart_continue_shopbtn">Continue Shopping</button>
                                </Link>
                                <Link to = "/registration">
								<button type="button" className="btn login-btn" id="cart_paymentnextbtn">Next</button>
                                </Link>
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

export default Cartpayment
