import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <div className='title-cont'>
                    <p className='title'>Shopping Cart</p>
                    <p className='info'>Admin blog is for only admins!</p>
                </div>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} id='email' type='email' placeholder='Email' />
                    <input onChange={this.changeHandler} id='password' type='password' placeholder='Password' />
                    <button type='submit'><Link to='/add'>Submit</Link></button>
                </form>
            </div>
        )
    }
}

export default Login
