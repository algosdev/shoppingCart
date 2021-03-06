
import initState from './initState'

const rootReducer = (state = initState, action) => {
    let updated = { ...state }
    console.log(updated);
    let len = updated.items.length + 1
    // let isInCartChanged = updatedState.items.map(item => {
    //     if (item.ID === action.id) {
    //         item.isInCart = action.isInCart
    //         item.quantity = 1
    //     }
    //     return item;
    // });
    // let quantityChanged = updatedState.items.map(item => {
    //     if (item.ID === action.id) {
    //         item.isInCart = true;
    //         item.quantity += action.addOrRemove;
    //     }
    //     return item;
    // });
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART");
            updated = updated.items.map(item => {
                if (item.ID === action.id) {
                    item.isInCart = true;
                    item.quantity = 1;
                }
                return item
            });
            return { items: updated }
        case "DELETE_FROM_CART":
            console.log("DELETE_FROM_CART");
            updated = updated.items.map(item => {
                if (item.ID === action.id) {
                    item.isInCart = false
                    item.quantity = 1;
                }
                return item
            });
            return { items: updated }
        case "PLUS":
            console.log("PLUS");
            updated = updated.items.map(item => {
                if (item.ID === action.id) {
                    item.quantity++
                }
                return item
            });
            return { items: updated }
        case "MINUS":
            console.log("MINUS");
            updated = updated.items.map(item => {
                if (item.ID === action.id) {
                    item.quantity--
                }
                return item
            });
            return { items: updated }
        case "UPLOAD":
            console.log("UPLOAD");
            let newItems = [...updated.items, {
                title: action.title,
                author: action.author,
                year: action.year,
                price: action.price,
                ID: len,
                icon: action.cover,
                isInCart: false
            }]
            return { items: newItems }
        default:
            console.log("default");
            return updated
    }
}
export default rootReducer