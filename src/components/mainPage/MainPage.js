import { useEffect } from 'react'
import axios from 'axios'
import classes from './MainPage.module.scss'
import { connect } from 'react-redux'
import { load } from '../../redux/actionCreator'
import { URL } from '../../config/config'
import Partition from './partition/Partition'
import Cart from './cart/Cart'


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


    function renderTable() {
        return (
            <div className={classes.table}>
                {props.products.map((partition, index) => {
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
                {renderTable()}
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
