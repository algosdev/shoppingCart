import React from 'react';
import { connect } from 'react-redux'

const CartItem = ({ item, remove, addOrSubstract, index, num }) => {
    console.log(num)
    return (
        <div className='item'>
            <div className='grid'>
                <div className='num'>{index + 1}.</div>
                <div>
                    <p className='title'>{item.title}</p>
                    <p className='author'>by {item.author}</p>
                </div>
                <div className='num'>${item.price}</div>
                <div className='btns'>
                    <div className='quantity'>
                        <button onClick={() => { addOrSubstract(item.ID, "PLUS", 1); }}><span>&#43;</span></button>
                        <div className='num'>{num}</div>
                        <button onClick={() => { num--; if (num < 1) { remove(item.ID); } addOrSubstract(item.ID, "MINUS", -1); }}><span>&#8722;</span></button>

                    </div>
                    <div>
                        <button className='delete' onClick={() => { remove(item.ID); }}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 0C27.954 0 36 8.046 36 18C36 27.954 27.954 36 18 36C8.046 36 0 27.954 0 18C0 8.046 8.046 0 18 0ZM27 9H22.5L20.7 7.2H15.3L13.5 9H9V12.6H27V9ZM12.6 28.8H23.4C23.8774 28.8 24.3352 28.6104 24.6728 28.2728C25.0104 27.9352 25.2 27.4774 25.2 27V14.4H10.8V27C10.8 27.4774 10.9896 27.9352 11.3272 28.2728C11.6648 28.6104 12.1226 28.8 12.6 28.8Z" fill="#9B0D9E" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchtoProps = (dispatch) => {
    return {
        remove: (itemId) => { dispatch({ type: "DELETE_FROM_CART", id: itemId, isInCart: false }) },
        addOrSubstract: (itemId, typeOfAction, mp) => { dispatch({ id: itemId, type: typeOfAction, addOrRemove: mp }) }
    }
}
export default connect(null, mapDispatchtoProps)(CartItem)
