import React from 'react'
import { connect } from 'react-redux'
const Product = ({ item, isInCart, toProps }) => {
    return (
        <div className='card'>
            <div className='cover'>
                <img src={item.icon} alt='' />
            </div>
            <div className='details'>
                <p className='title'>{item.title}</p>
                <p className='author'>by {item.author}</p>
                <p className='year'>{item.year}</p>
                <p className='price'>${item.price}</p>
                {isInCart ? (<button onClick={() => { toProps(item.ID); }} className='btn'>In Cart </button>) :
                    (<button onClick={() => { toProps(item.ID); }} className='btn'> <span>&#43;</span>Add to Cart</button>)
                }

            </div>
        </div>
    )
}
const mapDispatchtoProps = (dispatch) => {
    return {
        toProps: (itemId) => { dispatch({ type: "ADD_TO_CART", id: itemId, isInCart: true }) }
    }
}
export default connect(null, mapDispatchtoProps)(Product)