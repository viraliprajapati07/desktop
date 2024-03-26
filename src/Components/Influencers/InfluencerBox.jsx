import React from 'react'
import { Link } from 'react-router-dom'


function InfluencerBox(props) {
  return (
    <>
    <div className="swiper-slide influencers-boxcol">
										<Link to ="/influencers" className="influencers-link">
											<div className="influencers-img">
												<img src= {props.img}alt="influencers image" />
											</div>
											<div className="influencers-name">
												<h4>Influencers</h4>
											</div>
										</Link>
									</div>
    </>
  )
}

export default InfluencerBox
