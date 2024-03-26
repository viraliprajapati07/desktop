import React from 'react';
import { Link } from 'react-router-dom';
import LinkFile from './LinkFile/LinkFile';
import Address from './Address/Address';
function Addresses() {
  return (
    <>
    <section class="middle-content">
	<Link to = "/profile">
		<LinkFile li="Profile" li2='Addresses' />
		</Link>
		<div class="main-profile-sec">
			<div class="profile-sec-inner">
				<div class="container">
					<div class="row">
					<Address h4="Home"/>
						<Address h4="Office"/>
						<Address h4="Work Shop"/>
						<Address h4="Clinet 1 aziz"/>
					</div>
				</div>
			</div>
		</div>
	</section>
     </>
  )
}
export default Addresses
