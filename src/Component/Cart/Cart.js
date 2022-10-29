import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    // let population=0;
    // for(var i=0;i<cart.length;i++)
    // {
    //     const country=cart[i];
    //     population+=country.population;
    // }

const population=cart.reduce((sum,country)=>sum+country.population,0)
    return (
        <div>
            <h4>this is cart : {cart.length}</h4>
            <h4> Population : {population}</h4>
        </div>
    );
};

export default Cart;