import classes from './Product.module.scss'
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { add } from '../../../../redux/actionCreator'

const Product = props => {
    
    const [sum, setSum] = useState(0);

    function handleInput(event) {
        setSum(event.target.value * props.product.gprice)
            props.onAdd({
                id: props.product.gid,
                name: props.product.gname,
                qty: event.target.value,
                commonSum: event.target.value * props.product.gprice,
            })
    }

    return (
        <div className={classes.content_product}>
            <div className={classes.content_product_info}>
                <h4 className={classes.product_info_id}>{props.product.gid}</h4>
            </div>
            <div className={classes.content_product_info}>
                <h4 className={classes.product_info_title}>{props.product.gname}</h4>
            </div>
            <div className={classes.content_product_info}>
                <h4 className={classes.product_info_price}>{props.product.gprice} р.</h4>
            </div>
            <div className={classes.content_product_info}>
                <input className={classes.input} onChange={handleInput.bind(this)} type='number' min='0'></input>
            </div>
            <div className={classes.content_product_info}>
                <h4 className={classes.product_info_price}>{sum} р.</h4>
            </div>
        </div>
    )
}



// Добавлять в корневой редюсер по id объекты с полями колличества, названия и общей суммы


function mapDispatchToProps(dispatch) {
    return {
        onAdd: ((data) => dispatch(add(data)))
    }
}

export default connect(null, mapDispatchToProps)(Product)