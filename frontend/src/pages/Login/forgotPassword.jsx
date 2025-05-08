import React from 'react';
import noteBuddyLogo from '../../assets/NoteBuddy-Logo1.png';
import { Link } from 'react-router-dom';
import styles from './forgotPassword.module.css';
import securePic from '../../assets/Secure.png';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ForgotPassword = () => {
    return (
        <div className={styles.background_area}>
            <img src={noteBuddyLogo} className={styles.logo} />
            <div className={styles.content_area}>
                <div className={styles.forgotPassword_con}>
                    <img src={securePic} />
                    <label className={styles.forgotP_title}>Forgot password?</label>
                    <p className={styles.description}>No worries, enter your account's email and we will send you a password rest link.</p>
                    <div className={styles.email_con}>
                        <label className={styles.label_style}>Email</label>
                        <input type="text" className={styles.input_style} placeholder="Enter your email address"/>
                    </div>
                    <button className={styles.reset_Btn}>Reset Password</button>
                    <Link to="/login" className={styles.backToLogin_style}>
                    <FontAwesomeIcon icon={faCircleLeft} style={{ color: "#5544a7", fontSize: "19px" }} />Back to Login</Link>
                </div>
                <p>@2025 NoteBuddy</p>
            </div>
        </div>
        
    );
};

export default ForgotPassword;