import React from 'react'
import { Link } from 'react-router-dom'
import LinkFile from './LinkFile/LinkFile'
import Completed from './OrderList/Completed'
import Cancled from './OrderList/Cancled'
import Processing from './OrderList/Processing'



function Orderlist() {
  return (
   <>
   <section className="middle-content">
   <LinkFile li="Orderlist"/>

		<div className="wishlist-sec order-listsec">
			<div className="container">
				<div className="row comm-mob-sec">
					<div className="col-12">
						<div className="common-filter-dropdown order-filter-dropdown">
							<select type="select">
								<option selected>Filter by Status</option>
								<option value="Completed">Completed</option>
								<option value="Cancelled">Cancelled</option>
								<option value="Processing">Processing</option>
							</select>
							<div className="order-export-btns">
								<button type="button" className="btn order-export-reportBtn" id="order_export_reportBtn"><i className="fa fa-download" aria-hidden="true"></i>Export</button>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="table-responsive">
							<table id="example">
								<thead>
									<tr>
										<th width="34px"></th>
										<th width="100px">Image</th>
										<th>Product Name</th>
										<th width="150px">Unit Price</th>
										<th width="150px">Order Status</th>
										<th width="140px"></th>
									</tr>
								</thead>
								<tbody>
									
									<Completed CloseIcon="assets/images/close-icon.png" Image="assets/images/pro-1.png" Name="Structure material"DelPrice="30.00"Price="24.00"/>
									<Cancled CloseIcon="assets/images/close-icon.png" Image="assets/images/pro-1.png" Name="Structure material"DelPrice="30.00"Price="24.00"/>
									<Processing CloseIcon="assets/images/close-icon.png" Image="assets/images/pro-1.png" Name="Structure material"DelPrice="30.00"Price="24.00"/>
									
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="row comm-desk-sec">
					<div className="col-12">
						<div className="common-filter-dropdown order-filter-dropdown">
							<select type="select">
								<option selected>Filter by Status</option>
								<option value="Completed">Completed</option>
								<option value="Cancelled">Cancelled</option>
								<option value="Processing">Processing</option>
							</select>
							<div className="order-export-btns">
								<button type="button" className="btn order-export-reportBtn" id="order_export_reportBtn"><i className="fa fa-download" aria-hidden="true"></i>Export</button>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="table-responsive">
							<table>
								<tbody>
									<tr>
										<td colSpan="6">
											<table className="secondlevel-table">
												<tr>
													<td>
														<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
													     	<img src="assets/images/close-icon.png" alt="delete icon"/>
													    </button>
													</td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
												</tr>
												<tr>
													<td><h3 className="wishlist-product-name">Structure material</h3></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-unitprice">
															<del>30.00 KD</del> <h5>$24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td><span className="wishlist-status-tag wishlist-in-stock">Completed</span></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-addcartbtn">
															<a href="order-view.html" className="orderdetail-viewLink" id="orderdetail_viewLink">View</a>
														</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td colSpan="6">
											<table className="secondlevel-table">
												<tr>
													<td>
														<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
													     	<img src="assets/images/close-icon.png" alt="delete icon"/>
													    </button>
													</td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
												</tr>
												<tr>
													<td><h3 className="wishlist-product-name">Structure material</h3></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-unitprice">
															<del>30.00 KD</del> <h5>$24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td><span className="wishlist-status-tag wishlist-out-stock">Cancelled</span></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-addcartbtn">
															<a href="order-view.html" className="orderdetail-viewLink" id="orderdetail_viewLink">View</a>
														</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td colSpan="6">
											<table className="secondlevel-table">
												<tr>
													<td>
														<button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
													     	<img src="assets/images/close-icon.png" alt="delete icon"/>
													    </button>
													</td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
												</tr>
												<tr>
													<td><h3 className="wishlist-product-name">Structure material</h3></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-unitprice">
															<del>30.00 KD</del> <h5>$24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td><span className="wishlist-status-tag order-processing-tag">Processing</span></td>
												</tr>
												<tr>
													<td>
														<div className="wishlist-addcartbtn">
															<a href="order-view.html" className="orderdetail-viewLink" id="orderdetail_viewLink">View</a>
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

export default Orderlist
