import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {
    const { image, name , price_usd, stock} = bottle;

    return (
        <div className='bottle card'>
            <img
                src={image}
                alt={name}
            />
            <h4>{name}</h4>
            <p>${price_usd.toFixed(2)}</p>
            <p>{stock} remaining</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;