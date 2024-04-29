import React from 'react'
import { Link } from 'react-router-dom'
function LinkFile(props) {
  return (
    <>
    <div class="cs-breadcrumb comm-mob-sec">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<ul>
							<li><Link to='/home'>Home</Link></li>
							<li>{props.li}</li>
                            <li>{props.li2}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}
export default LinkFile
