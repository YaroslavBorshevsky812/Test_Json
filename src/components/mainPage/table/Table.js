import { useParams } from 'react-router-dom'
import Partition from '../partition/Partition'
import classes from '../MainPage.module.scss'
import { connect } from 'react-redux'

const Table = props => {
    const {id} = useParams()
    let filterProducts = []
    if (id !== undefined) {
        filterProducts = props.products.filter(item => item.rid === id)
    } else {
        filterProducts = props.products
    } 
    return (
            <div className={classes.table_wrapper}>
                {props.products && 
                    filterProducts.map((partition, index) => {
                    return (
                        <Partition 
                        item={partition}
                        key={index}
                        />
                    )
                })}
            </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Table) 