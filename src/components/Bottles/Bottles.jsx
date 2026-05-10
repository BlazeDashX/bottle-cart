import { use, useState } from 'react';
import './Bottles.css';
import Bottle from '../Bottle/Bottle';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p>Cart Items : {cart.length}</p>
            <div className='bottle-container'>
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddToCart={handleAddToCart}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;