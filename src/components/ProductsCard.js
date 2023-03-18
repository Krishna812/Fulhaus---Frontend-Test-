import React, { useContext, useState } from 'react';
import cartContext from '../context/cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const ProductsCard = (props) => {

    const { img, rating, title, price } = props;

    const { addItem } = useContext(cartContext);

    const [isAdded, setIsAdded] = useState(false);


    const handleAddToCart = () => {

      
        const item = { ...props };
        addItem(item);

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);

    };


    return (
        <>
            <div className="product_card">
                <figure>
                    <img src={img} alt="item-img" />
                </figure>
                <h4 className="title">{title}</h4>
                 <div>
                    <strong className="rating">{rating}</strong>
                   
                 </div>
              <div>
                 <p className="price"> ${price.toLocaleString()}</p>
                 <button
                    type="button"
                    className={`btn ${isAdded ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {isAdded ? 'Added' : <FontAwesomeIcon icon={faShoppingCart} />}
                </button>
              </div>
              
            </div>
        </>
    );
};

export default ProductsCard;
