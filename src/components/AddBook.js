import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            author: null,
            year: null,
            price: null,
            cover: null
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    fileHandler = (e) => {
        let file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ cover: reader.result });
        }
        reader.readAsDataURL(file);
    }
    submitHandler = (e) => {
        e.preventDefault();
        let state = this.state
        this.props.addNew(state.title, state.author, state.year, state.price, state.cover)
    }
    render() {
        return (
            <div className='container'>
                <div className='title-cont'>
                    <p className='title'>Admin</p>
                    <p className='info'>Add new book to the store</p>
                </div>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} id='title' type='text' placeholder='Title' />
                    <input onChange={this.changeHandler} id='author' type='text' placeholder='Author' />
                    <input onChange={this.changeHandler} id='year' type='number' placeholder='Year' />
                    <input onChange={this.changeHandler} id='price' type='number' placeholder='Price $' />
                    <label htmlFor='cover' className="custom-file-upload">
                        <p>Upload book cover (jpg/png)</p>
                        <p><svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.72 11.507C27.9314 10.9637 28.05 10.3695 28.05 9.75C28.05 7.05859 25.8328 4.875 23.1 4.875C22.0842 4.875 21.1355 5.17969 20.3517 5.69766C18.9234 3.26016 16.2577 1.625 13.2 1.625C8.64188 1.625 4.95 5.26094 4.95 9.75C4.95 9.88711 4.95516 10.0242 4.96031 10.1613C2.07281 11.1617 0 13.8734 0 17.0625C0 21.0996 3.32578 24.375 7.425 24.375H26.4C30.0455 24.375 33 21.4652 33 17.875C33 14.7316 30.7312 12.1063 27.72 11.507ZM20.2847 14.625H16.9125V20.3125C16.9125 20.7594 16.5413 21.125 16.0875 21.125H13.6125C13.1587 21.125 12.7875 20.7594 12.7875 20.3125V14.625H9.41531C8.67797 14.625 8.31188 13.7516 8.83266 13.2387L14.2673 7.88633C14.587 7.57148 15.113 7.57148 15.4327 7.88633L20.8673 13.2387C21.3881 13.7516 21.0169 14.625 20.2847 14.625Z" fill="white" />
                        </svg>
                        </p>
                    </label>
                    <input onChange={this.fileHandler} id='cover' type='file' accept="image/*" placeholder='Cover image' />
                    <button type='submit'>Submit</button>
                </form>
                <img src={this.state.cover} alt="" />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNew: (t, a, y, p, i) => { dispatch({ type: "UPLOAD", title: t, author: a, year: y, price: p, cover: i }) }
    }
}
export default connect(null, mapDispatchToProps)(AddBooks)
