import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
const Collection = (props) => {
    const { items } = props
    return (
        <div className='container'>
            <div className='title-cont'>
                <p className='title'>Collection</p>
                <p className='info'>{items.length} books there are</p>
            </div>
            <div className='card-cont'>
                {items ? items.map(item => {
                    return (<Product item={item} isInCart={item.isInCart} key={item.ID} />)
                }) : <div>...Loading</div>}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(Collection)