import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            password: null,
            redirect: false,
            error: null
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.username === 'algo#' && this.state.password === "8252020") {
            this.setState({
                redirect: true,
                error: null
            })
        }
        else {
            this.setState({
                error: 'Incorrect username or password'
            })
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/addnewbook' />
        }
        else {
            return (
                <div className='container'>
                    <div className='title-cont'>
                        <p className='title'>Shopping Cart</p>
                        <p className='info'>Admin blog is for only admins!</p>
                    </div>
                    <form onSubmit={this.submitHandler}>
                        <input onChange={this.changeHandler} id='username' type='text' placeholder='Username' />
                        <input onChange={this.changeHandler} id='password' type='password' placeholder='Password' />
                        <span className='error'>{this.state.error}</span>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            )
        }
    }
}

export default Login
