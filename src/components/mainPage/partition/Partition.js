import Product from './product/Product'

const Partition = props => {

    function renderProductItem() {
        return (
            <tbody>
                {props.item.goods.map((product, index) => {
                    return (
                        <Product
                            product={product}
                            key={index}
                        />
                    )
                })}
            </tbody>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan='5'>
                        <h1>{props.item.rname}</h1>
                    </th>
                </tr>
            </thead>
                {renderProductItem()}
        </table>
    )
}

export default Partition