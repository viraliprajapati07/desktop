import React,{useState} from 'react'

function QuantityButton() {
    const [quantity1, setQuantity1] = useState(1);
    const [quantity2, setQuantity2] = useState(1);
    const [quantity3, setQuantity3] = useState(1);

    const handleIncrement1 = () => {
        setQuantity1(quantity1 + 1);
    };

    const handleDecrement1 = () => {
        if (quantity1 > 0) {
            setQuantity1(quantity1 - 1);
        }
    };

    const handleIncrement2 = () => {
        setQuantity2(quantity2 + 1);
    };

    const handleDecrement2 = () => {
        if (quantity2 > 0) {
            setQuantity2(quantity2 - 1);
        }
    };

    const handleIncrement3 = () => {
        setQuantity3(quantity3 + 1);
    };

    const handleDecrement3 = () => {
        if (quantity3 > 0) {
            setQuantity3(quantity3 - 1);
        }
    };
  return (
   <>
    <div className="pro-quantity">
                                        <div className="quantity">
                                            <button type="button" className="quantity-minus" onClick={handleDecrement1}>-</button>
                                            <input type="number" className="input-text qty" value={quantity1} readOnly />
                                            <button type="button" className="quantity-plus" onClick={handleIncrement1}>+</button>
                                        </div>
                                    </div>
   </>
  )
}

export default QuantityButton
