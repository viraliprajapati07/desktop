import React from 'react'
import { Link  } from 'react-router-dom';
function Card(props) {
  return (
  
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active " role="group" aria-label='1 / 5 ' style={{ width: "255px", marginRight: "30px" }}>
    <div className="product-box">
        <div className="product-img text-center">
            <img src={props.Image}/>
        </div>
        <div className="product-data">
            <h4><Link to ="/productview">{props.Name}</Link></h4>
            <div className="product-varient">
                <div className="product-varient-inner">
                    <label>{props.InnerLabel}</label>
                    <div className="pvi-flex">
                        <p>{props.P}</p>
                    </div>
                </div>
                <div className="product-varient-inner pvi-weight">
                    <label>{props.L}</label>
                    <div className="pvi-flex">
                        <span>{props.Span}</span>
                        <span>{props.Span}</span>
                        <span>{props.Span}</span>
                    </div>
                </div>
                <div className="product-varient-inner">
                    <label>{props.UnitLabel}</label>
                    <div className="pvi-flex">
                        <p>{props.PriceP}</p>
                    </div>
                </div>
            </div>
            <div className="product-pricedata">
                <div className="ppd-flex">

                    <button type="button" className="btn add-cartBtn" id="add_cartBtn">
                        <Link to="/cart">
                            <img src={props.CartImage} alt="add cart icon" />
                        </Link>
                    </button>

                    <button type="button" className="btn add-favBtn" id="add_favBtn">
                        <i className={props.Icon} aria-hidden="true"></i>
                    </button>
                    <div className="price-amount">
                        <div className="price-amountinner">
                            <span className="price-discount">
                                <del>{props.Del}</del> {props.KD}</span>
                            <span>{props.KDSpan}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card;
