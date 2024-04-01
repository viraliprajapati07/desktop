import React from 'react'
import { Link  } from 'react-router-dom';
import KD from '../Price/KD';

function Card({ Name, Image, InnerLabel, P, L, Span, UnitLabel, PriceP, CartImage, Icon, Del, Price, addToCart }) {
    const handleClick = () => {
      addToCart({ Name, Image, InnerLabel, P, L, Span, UnitLabel, PriceP, Icon, Del, Price, quantity: 1 });
    };
  return (
  
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active " role="group" aria-label='1 / 5 ' style={{ width: "255px", marginRight: "30px" }}>
    <div className="product-box">
        <div className="product-img text-center">
            <img src={Image}/>
        </div>
        <div className="product-data">
            <h4><Link to ="/productview">{Name}</Link></h4>
            <div className="product-varient">
                <div className="product-varient-inner">
                    <label>{InnerLabel}</label>
                    <div className="pvi-flex">
                        <p>{P}</p>
                    </div>
                </div>
                <div className="product-varient-inner pvi-weight">
                    <label>{L}</label>
                    <div className="pvi-flex">
                        <span>{Span}</span>
                        <span>{Span}</span>
                        <span>{Span}</span>
                    </div>
                </div>
                <div className="product-varient-inner">
                    <label>{UnitLabel}</label>
                    <div className="pvi-flex">
                        <p>{PriceP}</p>
                    </div>
                </div>
            </div>
            <div className="product-pricedata">
                <div className="ppd-flex">

                    <button type="button" className="btn add-cartBtn" onClick={handleClick}>
        {/* <Link to="/cart"> */}
          <img src={CartImage} alt="add cart icon" />
        {/* </Link> */}
      </button>

                    <button type="button" className="btn add-favBtn" id="add_favBtn">
                        <i className={Icon} aria-hidden="true"></i>
                    </button>
                    <div className="price-amount">
                        <div className="price-amountinner">
                            <span className="price-discount">
                                <del>{Del}</del> <KD/></span>
                            <span>{Price}<KD/></span>
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
