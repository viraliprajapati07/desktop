import React from 'react';
import KD from '../Price/KD';



function OutOfStock(props) {
	return (
		<tr>
			<td>
				<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
					<img src="assets/images/close-icon.png" alt="delete icon" />
				</button>
			</td>
			<td>
				<div class="wishlist-product-img">
					<img src="assets/images/pro-1.png" alt="product image" />
				</div>
			</td>
			<td><h3 class="wishlist-product-name">{props.Name}</h3></td>
			<td>
				<div class="wishlist-unitprice">
				<del>{props.DelPrice}<KD/></del> <h5>{props.Price}<KD/></h5>
				</div>
			</td>
			<td><span class="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
			<td>
				<div class="wishlist-addcartbtn">
					<button type="button" class="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
				</div>
			</td>
		</tr>
	)
}

export default OutOfStock
