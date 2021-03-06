import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items,
                        click "Add to basket" next to the item. </p>
                </div>
            ):(
                    <div>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                            {basket.map(item => (
                            <CheckoutProduct
                            item={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            
                            />
                            ))}
                        </h2>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
