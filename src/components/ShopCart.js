import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
const ShopCart = ({ items }) => {
    console.log(items)
    const allItems = items.length ? items.filter(item => item.isInCart) : null;
    const products = allItems.length ? allItems.map((item, index) =>
        <CartItem key={item.ID} item={item} num={item.quantity} index={index} />
    ) :
        <div className='none'>There is no item</div>;
    let total = 0;
    allItems.forEach(item => {
        let sum = item.price * item.quantity
        total += sum;
    });
    return (
        <div className='container'>
            <div className='title-cont'>
                <p className='title'>Shopping Cart</p>
                <p className='info'>{products.length ? products.length : '0'} books there are</p>
            </div>
            <div className='item-cont'>
                <div className='item-info grid'>
                    <div>#</div>
                    <div>Book details</div>
                    <div>Price</div>
                    <div>Quantity</div>
                </div>
                {products}
                <div className='total grid'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>Total: ${total}</div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(ShopCart)