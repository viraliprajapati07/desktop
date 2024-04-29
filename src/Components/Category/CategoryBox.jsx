import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from './CategorySlice';
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
            {result && Array.isArray(result) && result.map((category) => {
                return (
                    <div key={category.id} className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
                        <div className="home-catname">
                            <Link to="/categorlist">
                                <div className="home-catimg">
                                    <img src={category.image} alt="category image" />
                                    <h4>{category.category_name_en}</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
} export default CategoryBox;
