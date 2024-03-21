import React from 'react'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
   <>
   <section class="middle-content">
		<div class="cs-breadcrumb comm-mob-sec">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<ul>
							<li><Link to="/home">Home</Link></li>
							<li>Wishlist</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="wishlist-sec">
			<div class="container">
				<div class="row comm-mob-sec">
					<div class="col-12">
						<div class="common-filter-dropdown order-filter-dropdown">
							<select type="select">
								<option selected>Filter by Status</option>
								<option value="In Stock">In Stock</option>
								<option value="Out of Stock">Out of Stock</option>
							</select>
						</div>
					</div>
					<div class="col-12">
						<div class="table-responsive">
							<table>
								<thead>
									<tr>
										<th width="34px"></th>
										<th width="100px">Image</th>
										<th>Product Name</th>
										<th width="150px">Unit Price</th>
										<th width="150px">Stock Status</th>
										<th width="140px"></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div class="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
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
									<tr>
										<td>
											<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div class="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
											</div>
										</td>
										<td><h3 class="wishlist-product-name">Structure material</h3></td>
										<td>
											<div class="wishlist-unitprice">
													<del>30.00 KD</del> <h5>24.00 KD</h5>
											</div>
										</td>
										<td><span class="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
										<td>
											<div class="wishlist-addcartbtn">
												<button type="button" class="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div class="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
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
									<tr>
										<td>
											<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div class="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
											</div>
										</td>
										<td><h3 class="wishlist-product-name">Structure material</h3></td>
										<td>
											<div class="wishlist-unitprice">
													<del>30.00 KD</del> <h5>24.00 KD</h5>
											</div>
										</td>
										<td><span class="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
										<td>
											<div class="wishlist-addcartbtn">
												<button type="button" class="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div class="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
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
									<tr>
										<td>
											<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
										     	<img src="assets/images/close-icon.png" alt="delete icon"/>
										    </button>
										</td>
										<td>
											<div class="wishlist-product-img">
												<img src="assets/images/pro-1.png" alt="product image"/>
											</div>
										</td>
										<td><h3 class="wishlist-product-name">Structure material</h3></td>
										<td>
											<div class="wishlist-unitprice">
													<del>30.00 KD</del> <h5>24.00 KD</h5>
											</div>
										</td>
										<td><span class="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
										<td>
											<div class="wishlist-addcartbtn">
												<button type="button" class="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="row comm-desk-sec">
					<div class="col-12">
						<div class="common-filter-dropdown order-filter-dropdown">
							<select type="select">
								<option selected>Filter by Status</option>
								<option value="In Stock">In Stock</option>
								<option value="Out of Stock">Out of Stock</option>
							</select>
						</div>
					</div>
					<div class="col-12">
						<div class="table-responsive">
							<table>
								<tbody>
									<tr>
										<td colspan="6">
											<table class="secondlevel-table">
												<tr>
													<td>
														<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
													     	<img src="assets/images/close-icon.png" alt="delete icon"/>
													    </button>
													</td>
												</tr>
												<tr>
													<td>
														<div class="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
												</tr>
												<tr>
													<td><h3 class="wishlist-product-name">Structure material</h3></td>
												</tr>
												<tr>
													<td>
														<div class="wishlist-unitprice">
																<del>30.00 KD</del> <h5>24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td><span class="wishlist-status-tag wishlist-in-stock">In Stock</span></td>
												</tr>
												<tr>
													<td>
                                                    <Link to="/cart">
														<div class="wishlist-addcartbtn">
															<button type="button" class="btn wishlist-addcartBtn" id="wishlist_addcartBtn">Add to Cart</button>
														</div>
                                                   </Link>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td colspan="6">
											<table class="secondlevel-table">
												<tr>
													<td>
														<button type="button" class="delete-wishlistBtn btn" id="delete_wishlistBtn">
													     	<img src="assets/images/close-icon.png" alt="delete icon"/>
													    </button>
													</td>
												</tr>
												<tr>
													<td>
														<div class="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
												</tr>
												<tr>
													<td><h3 class="wishlist-product-name">Structure material</h3></td>
												</tr>
												<tr>
													<td>
														<div class="wishlist-unitprice">
																<del>30.00 KD</del> <h5>24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td><span class="wishlist-status-tag wishlist-out-stock">Out of Stock</span></td>
												</tr>
												<tr>
													<td>
														<div class="wishlist-addcartbtn">
															<button type="button" class="btn wishlist-addcartBtn" id="wishlist_addcartBtn" disabled>Add to Cart</button>
														</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
   </>
  )
}

export default Wishlist
