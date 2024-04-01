
import React, { useState } from 'react';
import KD from '../Price/KD';

function CartBox(props, initialQuantity) {
   
    const [quantity, setQuantity] = useState(Number(initialQuantity) || 1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="proview-flex cpf-flex">
            <div className="proview-left">
                <div className="cart-viewimg">
                    <a href="javascript:void(0)">
                        <img src={props.Image} alt="product image" />
                    </a>
                </div>
                <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
                    <img src="assets/images/close-icon.png" alt="delete icon" />
                </button>
            </div>
            <div className="proview-right">
                <div className="product-data">
                    <h4><a href="product-view.html" tabIndex="0">{props.Name}</a></h4>
                    <div className="product-varient mb-0">
                        <div className="product-varient-inner">
                            <label>{props.InnerLabel}</label>
                            <div className="pvi-flex">
                                <p>{props.P}</p>
                            </div>
                        </div>
                        <div className="cartv-flex">
                            <div className="product-varient-inner pvi-weight">
                                <label>{props.L}</label>
                                <div className="pvi-flex">
                                    <span>{props.Span}</span>
                                    <span>{props.Span}</span>
                                    <span>{props.Span}</span>
                                </div>
                            </div>
                            <div className="product-varient-inner">
                                <label>{props.UnitLabel}</label>
                                <div className="pvi-flex">
                                    <p>{props.PriceP}</p>
                                </div>
                            </div>
                            <div className="product-pricedata">
                                <div className="ppd-flex">
                                    <div className="price-amount">
                                        <div className="price-amountinner">
                                            <span className="price-discount"><del>{props.Del}</del><KD /></span>
                                            <span>{(props.Price * quantity).toFixed(2)} <KD /></span>
                                        </div>
                                    </div>
                                    <div className="pro-quantity">
                                        <div className="quantity">
                                            <button type="button" className="quantity-minus" onClick={handleDecrement}>-</button>
                                            <input type="number" className="input-text qty" value={quantity} readOnly />
                                            <button type="button" className="quantity-plus" onClick={handleIncrement}>+</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    );
}

export default CartBox;
//  /////////////////////////////////////////////////////////////////

 