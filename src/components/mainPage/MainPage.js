import { useEffect } from 'react'
import axios from 'axios'
import classes from './MainPage.module.scss'
import { connect } from 'react-redux'
import { load } from '../../redux/actionCreator'
import { URL } from '../../config/config'
import Partition from './partition/Partition'
import Cart from './cart/Cart'
import SideBar from '../sidebar/SideBar'
import { Switch, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const MainPage = props => {

    useEffect(() => {
        async function loadDataFromApi() {
            await axios.get(URL)
                .then(res => {
                    const file = res.data
                        props.onLoad(file)     
                })
        }
        loadDataFromApi()
    }, [URL])

    const {id} = useParams()
    let filterProducts = []
    if (id !== undefined) {
        filterProducts = props.products.filter(item => item.rid === id)
    } else {
        filterProducts = props.products
    }
    function renderTable() {
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
    return (
        <section className={classes.mainPage}>
            <div className={classes.mainPage_inner}>
                <SideBar/>
                    <Switch>
                        <Route path="/" exact>
                            {renderTable()}
                        </Route>
                        <Route path="/:id" exact>
                            {renderTable()} 
                        </Route>
                    </Switch>
                <Cart/>
            </div>
               
        </section>
    )
}



// redux methods:


function mapStateToProps(state) {
    return {
        products: state.products,
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoad: ((data) => dispatch(load(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage) 
