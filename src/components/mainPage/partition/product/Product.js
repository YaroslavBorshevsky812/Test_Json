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
        <tr>
            <td>
                <h4>{props.product.gid}</h4>
            </td>
            <td>
                <h4>{props.product.gname}</h4>
            </td>
            <td>
                <h4>{props.product.gprice} р.</h4>
            </td>
            <td>
                <input onChange={handleInput.bind(this)} type='number' min='0'></input>
            </td>
            <td>
                <h4>{sum} р.</h4>
            </td>
        </tr>
    )
}



// Добавлять в корневой редюсер по id объекты с полями колличества, названия и общей суммы


function mapDispatchToProps(dispatch) {
    return {
        onAdd: ((data) => dispatch(add(data)))
    }
}

export default connect(null, mapDispatchToProps)(Product)