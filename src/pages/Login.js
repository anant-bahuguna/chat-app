import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from "react-router-dom";
import LoginButton from '../components/LoginButton'
import M from 'materialize-css'

class Login extends Component {

    state = {
        isLoggedIn: false,
        user: null
    }

    myCallback = (loggedIn,USER) => {
        this.setState({
            isLoggedIn: loggedIn,
            user: USER
        })
    }

    


    render() {
        return (
            <div>
                <Header myText = 'Login Page'/>
                <div className='container'>
                    <LoginButton showProfile={true} callbackFromParent={this.myCallback}></LoginButton>
                    {
                        this.state.isLoggedIn?
                            <div>Welcome {this.state.user.displayName}
                            <br/>
                            <Link to={`/chat/${this.state.user.displayName}`}>Go to chat</Link>
                            </div>
                            
                            :<h3>Login to continue</h3>
                    }
                </div>
                
                
                
            </div>
        )
    }
}

export default Login
