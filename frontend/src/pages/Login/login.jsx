import React, { useState } from 'react';
import noteBuddyLogo from '../../assets/NoteBuddy-Logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:5000/login',{
                username,
                password
            });
    
            if (response.data.message === 'Login successful') {
                navigate('/');
            } else {
                alert("Login failed: " + response.data.message);
            }
        } catch (error) {
            alert("Login error: " + (error.response?.data || error.message));
        }
    };

    return (
        <div className={styles.background_area}>
            <Link to="/">
                <img src={noteBuddyLogo} className={styles.logo} />
            </Link>
            <div className={styles.content_area}>
                <h1>Welcome to NoteBuddy!</h1>
                <div className={styles.login_con}>
                    <label className={styles.login_title}>Login to your account</label>
                    <form onSubmit={handleLogin}>
                        <div className={styles.username_con}>
                            <label className={styles.label_style}>Username</label>
                            <input 
                            type="name" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className={styles.input_style} 
                            placeholder="Enter your username" 
                            required />
                        </div>
                        <div className={styles.password_con}>
                            <label className={styles.label_style}>Password</label>
                            <div className={styles.input_wrapper}>
                                <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className={styles.input_style} 
                                placeholder="Enter your password" 
                                required />
                                <Link to="/" className={styles.resetP_style}>Clear Password</Link>
                            </div>
                        </div>
                        <div className={styles.othFeatures_style}>
                            <label className={styles.rmb_style}>
                                <input type="checkbox"  name="remember" className={styles.rmb_chckbox}/>Remember Me
                            </label>
                            <Link to="/forgotPassword" className={styles.forgotP_style}>Forgot your password?</Link>
                        </div>
                        <div className={styles.button_wrapper}>
                            <button type="submit" className={styles.login_Btn}>Login</button>
                        </div>
                    </form>
                    <div className={styles.mergeTextNSignUp}>
                        <label className={styles.default_text_style}>Don't have an account?</label> 
                        <Link to="/" className={styles.signup_style}>Sign Up</Link>
                    </div>
                    
                </div>
                <p>@2025 NoteBuddy</p>
            </div>
        </div>
        
    );
};

export default Login;