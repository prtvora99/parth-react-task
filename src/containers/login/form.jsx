import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import "../../styles/form.css";
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { AuthCreds } from '../../fixtures/login';
import { paths } from '../../routes';
import { Header } from '../header/header';

const LoginForm = () => {

    const history = useHistory();
    const [formData, handleFormData] = useState({});
    const { username, password } = formData;
    const handleInputChange = (e) => {
        handleFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleLogin = () => {
        const { username: un, password: pwd } = AuthCreds;
        if (username === un && password === pwd) {
            history.push(paths['employeeList']);
            return;
        };
        alert("Invalid User, Please your check username or password.");
    }

    return (
        <div className="form">
            <Header title={'Login'} />

            <form>
                <div className="field">
                    <label htmlFor="username">Username: </label>
                    <Input id="username" onChange={handleInputChange} placeholder={'Enter Username'} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password: </label>
                    <Input id="password" type="password" onChange={handleInputChange} placeholder={'Enter Password'} />
                </div>
                <div className="field">
                    <Button type="button" disabled={!formData.username || !formData.password} onClick={handleLogin}>
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
}

export { LoginForm };
