import classes from './Partition.module.scss'
import Product from './product/Product'

const Partition = props => {

    function renderProductItem() {
        return (
            <div className={classes.content}>
                {props.item.goods.map((product, index) => {
                    return (
                        <Product
                            product={product}
                            key={index}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <div className={classes.partition}>
            <div className={classes.partition_title}>
                <h1 className={classes.partition_title_text}>{props.item.rname}</h1>
            </div>
                {renderProductItem()}
        </div>
    )
}

export default Partition