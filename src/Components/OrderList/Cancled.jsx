import React from 'react'
import KD from '../Price/KD'
import { Link } from 'react-router-dom'


function Cancled(props) {
  return (
    <>
      <tr>
                <td>
                    <button type="button" className="delete-wishlistBtn btn" id="delete_wishlistBtn">
                        <img src="assets/images/close-icon.png" alt="delete icon" />
                    </button>
                </td>
                <td>
                    <div className="wishlist-product-img">
                        <img src="assets/images/pro-1.png" alt="product image" />
                    </div>
                </td>
                <td><h3 className="wishlist-product-name">{props.Name}</h3></td>
                <td>
                    <div className="wishlist-unitprice">
                        <del>{props.DelPrice}<KD /></del> <h5>{props.Price} <KD /></h5>
                    </div>
                </td>
                <td><span className="wishlist-status-tag wishlist-out-stock">Cancelled</span></td>
                <td>

                    <div className="wishlist-addcartbtn">
                        <Link to="/orderview" className="orderdetail-viewLink" id="orderdetail_viewLink">View</Link>
                    </div>

                </td>
            </tr>
 
    
    </>
  )
}

export default Cancled
