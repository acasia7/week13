import React from 'react';
import TopBar from './top-bar';
import LoginForm from './login-form';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                <TopBar />
                <LoginForm />
            </div>
        )
    }
}