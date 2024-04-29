import React from 'react';
import { Link } from 'react-router-dom';
import LinkFile from './LinkFile/LinkFile';
import AddressCard from './Address/AddressCard';
function Addresses() {
  return (
    <>
    <section class="middle-content">
	<Link to = "/profile">
		<LinkFile li="Profile" li2='Address' />
		</Link>
		<div class="main-profile-sec">
			<div class="profile-sec-inner">
				<div class="container">
					<div class="row">
					<AddressCard h4="Home"/>
						<AddressCard h4="Office"/>
						<AddressCard h4="Work Shop"/>
						<AddressCard h4="Clinet 1 aziz"/>
					</div>
				</div>
			</div>
		</div>
	</section>
     </>
  )
}
export default Addresses;
