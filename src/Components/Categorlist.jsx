import React from 'react'
import { Link } from 'react-router-dom';
import CategoryListBox from './CategoryList/CategoryListBox';

function Categorlist() {
  return (
   <>
   <section className="middle-content">
		<div className="catg-slider catlist-padding">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="catg-sliderinner catlist-flex">
							<CategoryListBox img="assets/images/catlist-1.png"
							h5="LEVELING MATERIAL"/>
							<CategoryListBox img="assets/images/catlist-2.png"
							h5="STRUCTURE MATERIAL"/>
							<CategoryListBox img="assets/images/catlist-3.png"
							h5="PLUMBING MATERIAL"/>
							<CategoryListBox img="assets/images/catlist-4.png"
							h5="FLOORING MATERIAL"/>
							<CategoryListBox img="assets/images/catlist-5.png"
							h5="WOODEN ELECTRICIAN MATERIAL"/>
							<CategoryListBox img="assets/images/catlist-6.png"
							h5="PAINTING MATERIAL"/>
							<CategoryListBox img="assets/images/catlist-7.png"
							h5="REQUIRED INSTALLATION MATERIAL"/>
							<CategoryListBox img="assets/images/catlist-8.png"
							h5="FINISHING"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</>
  )
}
export default Categorlist
