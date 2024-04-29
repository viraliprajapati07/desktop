import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Product/Card';
import LinkFile from './LinkFile/LinkFile';
import CartBox from './Cart/CartBox';
import axios from 'axios';
// import KD from './Price/KD';

function Cart({ cartItems }) { 
    const [total, setTotal] = useState(0);

	// useEffect(() => {
    //     const totalPrice = cartItems.reduce((acc, item) => acc + (item.Price * item.quantity ), 0);
	// 	setTotal(totalPrice );
	// 	}, [cartItems]);
	
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
                                    
                                        <CartBox  />
                                 
                                      {/* <CartBox cart_items={cartItems} /> */}
                                </div>
                            </div>
				            <div className="col-12">
                                <div className="cart-total">
							        <h3 className='Total'>
										Total:  {total.toFixed(2)}
								    </h3>
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
    );
}

export default Cart;

///////////////////////////////////////////////////////////////
