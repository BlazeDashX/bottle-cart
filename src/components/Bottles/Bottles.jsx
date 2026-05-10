import { use, useState, useEffect } from 'react';
import './Bottles.css';
import Bottle from '../Bottle/Bottle';
import { addToStoreCart, getStoreCart, removeFromCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    // useEffect
    useEffect(() => {
        const storedCartIds = getStoreCart();

        const storedCart = [];

        for (const id of storedCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);

    }, [bottles]);


    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save the bottle id in the local storageq
        addToStoreCart(bottle.id);
    }

    const handleRemoveFromCart = id => {
        const remainingCart =cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromCart(id);
    }


    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p>Added to Cart : {cart.length}</p>
            <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}>
            </Cart>
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