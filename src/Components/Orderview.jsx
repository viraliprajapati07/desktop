import React from 'react';
import LinkFile from './LinkFile/LinkFile'



function Orderview() {
  return (
    <>
    <section className="middle-content">
	<LinkFile li="Order View"/>
		
		<div className="wishlist-sec order-viewsec">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="orderview-alldetails">
							<p>Order #483 was placed on October 23, 2023 and is currently Completed.</p>
							<div className="ovd-box ovd-box-mb-4">
								<div className="generate-invoice">
									<h5 className="m-0">Order Details</h5>
									<div className="order-export-btns">
										<button type="button" className="btn order-export-reportBtn" id="order_export_reportBtn"><i className="fa fa-download" aria-hidden="true"></i>Invoice</button>
									</div>
								</div>
								<div className="ovd-tables">
									<div className="table-responsive">
										<table>
											<thead>
												<tr>
													<th width="100px">Image</th>
													<th>Product Name</th>
													<th width="100px">Supplier</th>
													<th width="100px">Weight</th>
													<th width="150px">Payment Method</th>
													<th width="150px">Order Status</th>
													<th width="100px" className="text-center">Total</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className="wishlist-product-img">
															<img src="assets/images/pro-1.png" alt="product image"/>
														</div>
													</td>
													<td><h3 className="wishlist-product-name"><a href="#">Structure material</a></h3></td>
													<td>Hempel</td>
													<td>1x50 ML</td>
													<td>Cash on Delivery</td>
													<td><span className="wishlist-status-tag wishlist-in-stock">Completed</span></td>
													<td>
														<div className="wishlist-unitprice">
															<h5>24.00 KD</h5>
														</div>
													</td>
												</tr>
												<tr>
													<td colSpan="6">
														<div className="ovd-subtotal">
															<b>Subtotal:</b>
														</div>
													</td>
													<td>
														<div className="wishlist-unitprice">
															<h5><b>24.00 KD</b></h5>
														</div>
													</td>
												</tr>
												<tr>
													<td colSpan="6">
														<div className="ovd-subtotal">
															<b>Discount:</b>
														</div>
													</td>
													<td>
														<div className="wishlist-unitprice">
															<h5><b>00.00 KD</b></h5>
														</div>
													</td>
												</tr>
												<tr>
													<td colSpan="6">
														<div className="ovd-subtotal">
															<b>Total:</b>
														</div>
													</td>
													<td>
														<div className="wishlist-unitprice">
															<h5><b>24.00 KD</b></h5>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="ovd-box">
								<h5>Billing Address</h5>
								<div className="ovd-tables">
									<div className="table-responsive">
										<table>
											<thead>
												<tr>
													<th>Address</th>
													<th width="200px">Customer Name</th>
													<th width="200px">Mobile Number</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>9, om sai residancy, rayam. Ta - Bardoli, Di - Surat, 394355</td>
													<td>Abu Hlefa</td>
													<td>+91 9664741462</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
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

export default Orderview
