import { useEffect } from 'react'
import axios from 'axios'
import classes from './MainPage.module.scss'
import { connect } from 'react-redux'
import { load } from '../../redux/actionCreator'
import { URL } from '../../config/config'
import Cart from './cart/Cart'
import SideBar from '../sidebar/SideBar'
import { Switch, Route } from 'react-router-dom'
import Table from './table/Table'

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

    return (
        <section className={classes.mainPage}>
            <div className={classes.mainPage_inner}>
                <SideBar/>
                    <Switch>
                        <Route path="/Test_Json" exact>
                            <Table/>
                        </Route>
                        <Route path="/:id" exact>
                            <Table/>
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
