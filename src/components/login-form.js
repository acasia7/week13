import React from 'react';


export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="loginform">
                <div>
                    <h3>Login</h3>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type="email" name="email" placeholder="username..."/>
                        <input type="password" name="pwd" placeholder="password..."/>
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}
