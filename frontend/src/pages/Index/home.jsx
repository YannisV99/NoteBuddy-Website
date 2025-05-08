import React from 'react';
import noteBuddyLogo from '../../assets/NoteBuddy-Logo1.png';
import noteBuddy3D from '../../assets/NoteBuddy-3D.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.background_area}>
            <Link to="/">
                <img src={noteBuddyLogo} className={styles.logo} />
            </Link>
            <div className={styles.content_area}>
                <div className={styles.login_link}>
                    <Link to="/login">Login</Link>
                </div>
                <h1>Welcome to NoteBuddy!</h1>
                <div className={styles.mergeTextN3D}>
                    <div className={styles.mergeH4NP}>
                        <p className={styles.des}>Your Friendly Note-Taking Companion!</p>
                        <div className={styles.alignPara}>
                            <p>Takes notes in seconds</p>
                            <p>Track your tasks with to-do-lists</p>
                            <p>Organize everything with categories and tags</p>
                            <p>Custom themes to match your style</p>
                        </div>
                        <div className={styles.startNow}>
                            <button className={styles.start_Btn} onClick={() => navigate('/login')}>
                                <span className={styles.start_text}>Start Now!</span>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#5544a7" }} />
                            </button>
                        </div>
                    </div>
                    <img src={noteBuddy3D} className={styles.threeD_image} />
                </div>
                <p style={{ marginTop: '-15px'  }}>@2025 NoteBuddy</p>
            </div>
        </div>
        
    );
};

export default Home;