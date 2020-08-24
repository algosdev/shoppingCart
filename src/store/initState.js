import sherlock from '../img/sherlock.png'
import thegreat from '../img/thegreat.png'
import alice from '../img/alice.png'
import thinkgrow from '../img/thinkgrow.png'
import insearch from '../img/insearch.png'
import richdad from '../img/richdad.png'
import all from '../img/all.png'
import things from '../img/things.png'


const initState = {
    items: [
        {
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            price: 45,
            quantity: 1,
            ID: 1,
            year: 2014,
            icon: richdad,
            isInCart: false
        },
        {
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            price: 54,
            quantity: 1,
            ID: 2,
            year: 2014,
            icon: thinkgrow,
            isInCart: false
        },
        {
            title: "Sherlock Holmes",
            author: "Arthur Conan Doyle",
            price: 39,
            quantity: 1,
            ID: 3,
            icon: sherlock,
            year: 2014,
            isInCart: true
        },
        {
            title: "In Search of Lost Time",
            author: "Marcel Proust",
            price: 25,
            quantity: 1,
            ID: 4,
            year: 2014,
            icon: insearch,
            isInCart: false
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 32,
            quantity: 1,
            ID: 5,
            icon: thegreat,
            year: 2014,
            isInCart: true
        },
        {
            title: "Alice's Adventures in Wonderland",
            author: "Lewis Carroll",
            price: 28,
            quantity: 1,
            ID: 6,
            year: 2014,
            icon: alice,
            isInCart: false
        },
        {
            title: "Things Fall Apart",
            author: "Chinua Achebe",
            price: 15,
            quantity: 1,
            year: 2014,
            ID: 7,
            icon: things,
            isInCart: false
        },
        {
            title: "All About Love",
            author: "Bell Hooks",
            price: 18,
            quantity: 1,
            year: 2014,
            ID: 8,
            icon: all,
            isInCart: false
        }
    ]
}
export default initState