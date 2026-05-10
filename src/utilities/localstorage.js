const  getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];
    saveCartToLocalStorage(newCart);
}

const removeFromLocalStorage = id => {
        const storedCart = getCartFromLocalStorage();
        const RemainingCart = storedCart.filter(storedId => storedId !== id);
        saveCartToLocalStorage(RemainingCart);
    }

export { 
    getCartFromLocalStorage as getStoreCart, 
    addItemToCartLocalStorage as addToStoreCart,
    removeFromLocalStorage as removeFromCart
};