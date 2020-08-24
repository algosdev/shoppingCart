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
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0.666656C21.3733 0.666656 27.3333 6.62666 27.3333 14C27.3333 21.3733 21.3733 27.3333 14 27.3333C6.62663 27.3333 0.666626 21.3733 0.666626 14C0.666626 6.62666 6.62663 0.666656 14 0.666656ZM20.6666 7.33332H17.3333L16 5.99999H12L10.6666 7.33332H7.33329V9.99999H20.6666V7.33332ZM9.99996 22H18C18.3536 22 18.6927 21.8595 18.9428 21.6095C19.1928 21.3594 19.3333 21.0203 19.3333 20.6667V11.3333H8.66663V20.6667C8.66663 21.0203 8.8071 21.3594 9.05715 21.6095C9.3072 21.8595 9.64634 22 9.99996 22Z" fill="#9B0D9E" />
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
