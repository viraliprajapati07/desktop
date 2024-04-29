import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { fetchProduct } from "./productSlice";

const Card = ({ product, onAddToCart }) => {
  // const handleAddToCart = () => {
  //   onAddToCart(product); // Ensure onAddToCart is invoked with the correct arguments
  // };
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
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitemcol-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem swiper-slide-active" role="group" aria-label='1 / 5' style={{ width: "255px", marginRight: "30px" }}>
      {result && result.map((product, index) => ( // Use index provided by map
        <div key={index}>
          <div className="product-box" key={product.id}>
            {product.product_images.length > 0 && (
              <div className="product-img text-center">
                {product.product_images.filter(image => image.main_image === 1).map(mainImage => (
                  <img src={mainImage.image}/>
                ))}
              </div>
            )}

            <div className="product-data">
              <h4><Link to="/productview">{product.name}</Link></h4>
              <div className="product-varient">
                <div className="product-varient-inner">
                  <label></label> 
                  <div className="pvi-flex">
                    <p></p> 
                  </div>
                </div>
                <div className="product-varient-inner pvi-weight">
                  <label></label>
                  <div className="pvi-flex">
                    <span>1x50 ML</span>
                    <span>1x50 ML</span> 
                    <span>1x50 ML</span> 
                  </div>
                </div>
                <div className="product-varient-inner">
                  <label>{product.unit_type}</label> 
                  <div className="pvi-flex">
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="product-pricedata">
                <div className="ppd-flex">
                   <button type="button" className="btn add-cartBtn" >
                     <img src="assets/images/add-cart.png" alt="add cart icon"  />
                     </button>
                      <button type="button" className="btn add-favBtn" id="add_favBtn">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </button>
              
              
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
