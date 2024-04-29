import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import KD from '../Price/KD';
import { fetchCart } from './CartSlice';
function CartBox({ }) {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.cart.loading);
    const error = useSelector((state) => state.cart.error);
    const result = useSelector((state) => state.cart.result);
    
    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    const cartItems = Array.isArray(result.cart_items) ? result.cart_items : [];
    return (
        <div className="proview-flex cpf-flex">
            {cartItems.map((cart) => {
                const mainImage = cart.images && cart.images.find(image => image.main_image === 0);
                if ( !mainImage) return  null;
                return (
                    <div key={cart.cart_item_id} className="proview-left">
                       
                        <div className="cart-viewimg">
                            <a href="javascript:void(0)">
                                <img src={mainImage.image} alt="product image" />
                            </a>
                        </div>
                        <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
                            <img src="assets/images/close-icon.png" alt="delete icon" />
                        </button>
                        <div className="proview-right">
                            <div className="product-data">
                                <h4><a href="product-view.html" tabIndex="0">{cart.name}</a></h4>
                                <div className="product-varient mb-0">
                                    <div className="product-varient-inner">
                                        <label>{cart.weight} {cart.weight_type}</label>
                                        <div className="pvi-flex">
                                            <p>{cart.unit}</p>
                                        </div>
                                    </div>
                                    <div className="cartv-flex">
                                        <div className="product-varient-inner pvi-weight">
                                            <label>{cart.length} {cart.length_type}</label>
                                            <div className="pvi-flex">
                                                <span>{cart.width} {cart.width_type}</span>
                                                <span>{cart.height} {cart.height_type}</span>
                                            </div>
                                        </div>
                                        <div className="product-varient-inner">
                                            <label>Supplier: {cart.supplier}</label>
                                            <div className="pvi-flex">
                                                <p>Quantity: {cart.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="product-pricedata">
                                            <div className="ppd-flex">
                                                <div className="price-amount">
                                                    <div className="price-amountinner">
                                                        <span className="price-discount"><del>{cart.discount}</del><KD /></span>
                                                        <span>{cart.product_total} <KD /></span>
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
            })}
        </div>
    );
}export default CartBox;
