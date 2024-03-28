import React from 'react'
import { Link } from 'react-router-dom';
import KD from '../Price/KD';




function InStock(props) {
	return (
		<tr>
			<td>
				<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
					<img src={props.CloseIcon} alt="delete icon" />
				</button>
			</td>
			<td>
				<div class="wishlist-product-img">
					<img src={props.Image} alt="product image" />
				</div>
			</td>
			<td><h3 class="wishlist-product-name">{props.Name}</h3></td>
			<td>
				<div class="wishlist-unitprice">
					<del>{props.DelPrice}<KD/></del> <h5>{props.Price}<KD/></h5>
				</div>
			</td>
			<td><span class="wishlist-status-tag wishlist-in-stock">In Stock</span></td>
			<td>
				<Link to="/cart">
					<div class="wishlist-addcartbtn">
						<button type="button" class="btn wishlist-addcartBtn" id="wishlist_addcartBtn">Add to Cart</button>
					</div>
				</Link>
			</td>
		</tr>
	)
}

export default InStock
