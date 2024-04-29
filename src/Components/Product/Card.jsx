import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProduct } from "./ProductSlice";
const  Card = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const result = useSelector((state) => state.product.result);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active" role="group" aria-label="2 / 5" style={{ width: "255px", marginRight: "30px", padding:"15px"}}>
      {result && Array.isArray(result) && result.map((product) => {
        const mainImage = product.product_images.find(image => image.main_image === 1);
        if (! mainImage) return null;
        return (
          <div className="product-box" key={product.id} style={{marginBottom:"50px", marginTop:"30px"}}>
            <div className="product-img text-center" key={mainImage.id}>
              <img src={mainImage.image} alt="" />
            </div>
            <div className="product-data">
              <h4><Link to="/viewproduct">{product.name}</Link></h4>
              <div className="product-varient">
                <div className="product-varient-inner">
                  <label>{product.weight}</label>
                  <div className="pvi-flex">
                    <p>{product.unit_type}</p>
                  </div>
                </div>
                <div className="product-varient-inner pvi-weight">
                  <label>{product.weight}</label>
                  <div className="pvi-flex">
                    <span>15 X 1 ML</span>
                    <span>15 X 1 ML</span>
                    <span>15 X 1 ML</span>
                  </div>
                </div>
                <div className="product-varient-inner">
                  <label>{product.weight}</label>
                  <div className="pvi-flex">
                    <p>{product.para}</p>
                  </div>
                </div>
              </div>
              <div className="product-pricedata">
                <div className="ppd-flex">
                  <Link to="/Cart">
                    <button type="button" className="btn add-cartBtn" id="add_cartBtn">
                      <img src="assets/images/add-cart.png " />
                    </button>
                  </Link>
                  <button type="button" className="btn add-favBtn" id="add_favBtn">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </button>
                  <div>
                    <div className="price-amountinner">
                      <span className="price-discount" style={{fontSize:"15px"}}><del>19.00</del>
                       <br/>
                      </span><span> 12.00   {product.currency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
