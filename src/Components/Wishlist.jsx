import React from 'react'
import { Link } from 'react-router-dom'
import LinkFile from './LinkFile/LinkFile'
import InStock from './Wishlist/InStock'
import OutOfStock from './Wishlist/OutOfStock'


function Wishlist() {
	return (
		<>
			<section class="middle-content">
				<LinkFile li="Profile" />
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
										    <InStock CloseIcon="assets/images/close-icon.png" Image="assets/images/pro-1.png" Name="Structure material"DelPrice="30.00" Price="24.00"/>
											<OutOfStock  CloseIcon="assets/images/close-icon.png" Image="assets/images/pro-1.png"Name="Structure material"DelPrice="30.00" Price="24.00"/>
											<InStock  CloseIcon="assets/images/close-icon.png" Image="assets/images/pro-1.png"Name="Structure material" DelPrice="30.00" Price="24.00"/>
											<OutOfStock  CloseIcon="assets/images/close-icon.png" Image="assets/images/pro-1.png"Name="Structure material"DelPrice="30.00" Price="24.00"/>
											<InStock  CloseIcon="assets/images/close-icon.png" Image="assets/images/pro-1.png"Name="Structure material" DelPrice="30.00" Price="24.00"/>
											<OutOfStock Name="Structure material"DelPrice="30.00" Price="24.00"/>
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
											    <InStock/>
											</tr>
											<tr>
												<OutOfStock/>
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
