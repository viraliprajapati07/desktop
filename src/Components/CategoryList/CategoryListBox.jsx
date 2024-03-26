import React from 'react'
import { Link } from 'react-router-dom'


function CategoryListBox( props) {
  return (
    <div className="catg-sliderbox">
    <Link to ="/category" className="catg-boxlink">
            <div className="catg-img">
                <img src={props.img} alt="category"/>
            </div>
            <h5>{props.h5}</h5>
        </Link>
    </div>
  )
}

export default CategoryListBox
