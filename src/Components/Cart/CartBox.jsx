// import React, { useState ,useEffect } from "react";
// import KD from '../Price/KD';
// import { useDispatch, useSelector } from "react-redux";
// import{fetchCart} from "./CartSlice";

// function CartBox(cart, initialQuantity) {
    
//      const [quantity, setQuantity] = useState(Number(initialQuantity) || 1);
     

//      const handleIncrement = () => {
//         setQuantity(prevQuantity => prevQuantity + 1);
//     };
//     const handleDecrement = () => {
//         if (quantity > 0) {
//             setQuantity(prevQuantity => prevQuantity - 1);
//         }
//     };
//     const dispatch = useDispatch();
//     const loading = useSelector((state) => state.cart.loading);
//     const error = useSelector((state) => state.cart.error);
//     const result = useSelector((state) => state.cart.result);
    
//     useEffect(() => {
//       dispatch(fetchCart());
       
//     }, []);
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     if (error) {
//       return <div>Error: {error}</div>;
//     }
   
//     return (
//         <div className="proview-flex cpf-flex">
//             {result && result.map((cart, index) => ( // Use index provided by map
//         <div key={index}>
//             <div className="proview-left"key={cart.id}>
//                 <div className="cart-viewimg">
//                     <a href="javascript:void(0)">
//                         <img src={cart.Image} alt="product image" />
//                     </a>
//                 </div>
//                 <button type="button" className="pro-delete-btn btn" id="pro_delete_btn">
//                     <img src="assets/images/close-icon.png" alt="delete icon" />
//                 </button>
//             </div>
//             <div className="proview-right">
//                 <div className="product-data">
//                     <h4><a href="product-view.html" tabIndex="0">{cart.name}</a></h4>
//                     <div className="product-varient mb-0">
//                         <div className="product-varient-inner">
//                             <label>{cart.InnerLabel}</label>
//                             <div className="pvi-flex">
//                                 <p>{cart.P}</p>
//                             </div>
//                         </div>
//                         <div className="cartv-flex">
//                             <div className="product-varient-inner pvi-weight">
//                                 <label>{cart.L}</label>
//                                 <div className="pvi-flex">
//                                     <span>{cart.Span}</span>
//                                     <span>{cart.Span}</span>
//                                     <span>{cart.Span}</span>
//                                 </div>
//                             </div>
//                             <div className="product-varient-inner">
//                                 <label>{cart.UnitLabel}</label>
//                                 <div className="pvi-flex">
//                                     <p>{cart.PriceP}</p>
//                                 </div>
//                             </div>
//                             <div className="product-pricedata">
//                                 <div className="ppd-flex">
//                                     <div className="price-amount">
//                                         <div className="price-amountinner">
//                                             <span className="price-discount"><del>{cart.Del}</del><KD /></span>
//                                             <span>{(cart.Price * quantity).toFixed(2)} <KD /></span>
//                                         </div>
//                                     </div>
//                                     <div className="pro-quantity">
//                                         <div className="quantity">
//                                             <button type="button" className="quantity-minus" onClick={handleDecrement}>-</button>
//                                             <input type="number" className="input-text qty" value={quantity} readOnly />
//                                             <button type="button" className="quantity-plus" onClick={handleIncrement}>+</button>
//                                         </div>
//                                     </div>
                                    
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>
//             </div>
//       ))}
//         </div>
        
//     );
// }

// export default CartBox;
// //  /////////////////////////////////////////////////////////////////
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

