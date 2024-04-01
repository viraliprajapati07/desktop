import React, { useState } from 'react';

function QuantityButton({ initialQuantity }) {
    const [quantity, setQuantity] = useState(Number(initialQuantity) || 0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="pro-quantity">
            <div className="quantity">
                <button type="button" className="quantity-minus" onClick={handleDecrement}>-</button>
                <input type="number" className="input-text qty" value={quantity} readOnly />
                <button type="button" className="quantity-plus" onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}

export default QuantityButton;
