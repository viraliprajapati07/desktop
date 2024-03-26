import React from 'react'
import { Link } from 'react-router-dom'


function InStock() {
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
												<td><h3 class="wishlist-product-name">Structure material</h3></td>
												<td>
													<div class="wishlist-unitprice">
														<del>30.00 KD</del> <h5>24.00 KD</h5>
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
