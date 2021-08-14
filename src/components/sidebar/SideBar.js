import classes from '../sidebar/SideBar.module.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = props => {
    return (
        <div className={classes.sideBar}>
            <div className={classes.sideBar_inner}>
                <h3 className={classes.sideBar_title}>Разделы</h3>
                <ul>
                    {props.products && props.products.map((item, index) => {
                        return (
                            <li className={classes.sideBar_item} key={index}>
                                <Link className={classes.sideBar_item_text} to={`/${item.rid}`}>{item.rname}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(SideBar)