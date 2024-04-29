
import { useSelector,useDispatch } from 'react-redux';
import React, { useEffect} from 'react';
import { fetchCategory } from './CategorySlice';
import { Link } from 'react-router-dom';

function CategoryBox() {

const dispatch = useDispatch();
  const loading = useSelector((state) => state.category.loading);
  const error = useSelector((state) => state.category.error);
  const result = useSelector((state) => state.category.result);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  return (
	<div className="row">
		{result && result.map((category, index) => ( 
    <div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100" key={index}>
		<div className="home-catname"key={category.id}>
	    <Link to="/categorlist">
		 <div className="home-catimg">
		 <img src={category.image} alt="category image" /> 
		<h4>{category.category_name_en}</h4>
		</div>
		</Link>
		</div>
		</div>
		))}
		</div>
  )
}

export default CategoryBox;
