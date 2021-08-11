import classes from './Cart.module.scss'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import axios from 'axios';
import { URL_CART } from '../../../config/config'
import { object } from 'prop-types';
import { serialize } from 'object-to-formdata';


const Cart = props => {

    const [price, setPrice] = useState(0);
    
    useEffect(() => {
        let buf = 0;
        props.cart.forEach(item => {
            buf += item.commonSum
        });
        setPrice(buf)
    },[props.cart, setPrice])


    useEffect(() => {
        renderProductToCart()
    },[price, props.cart])

    function renderProductToCart() {
        return price === 0 ? 
                reactDom.render((<div></div>), document.getElementById('panel')) : 
                reactDom.render(
                    (
                        <div className={classes.products}>
                            {props.cart.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <span>{item.name} : {item.qty}</span>
                                    </div>
                                )
                            })}
                        </div>
                    ), document.getElementById('panel'))
    }

    function postDataToCart() {
        let product = { product: {} }
        Object.keys(props.cart).forEach(item => {
        product.product[item] = props.cart[item].qty
        })

        const formData = serialize(product)
        
        axios({
            method: 'POST',
            url: URL_CART,
            data: formData
        }).then(response => {
            if(response.status === 200) {
                console.log(response.data)
            }
        })
    }


    return (
        <div className={classes.cart}>
            <div className={classes.cart_inner}>
                <h2 className={classes.cart_title}>Корзина</h2>
                <div className={classes.cart_content}>
                    <div id='panel'>

                    </div>
                    <div className={classes.commonPrice}>
                        <span>Общая сумма: {price}</span>
                    </div>
                    <button onClick={postDataToCart.bind(this)} className={classes.btn}>send</button>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        commonPrice: state.commonPrice,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)
