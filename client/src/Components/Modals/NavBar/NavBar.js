import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import {Link} from 'react-router-dom';

import "./NavBar.css";

import LinkedinImg from "./../../../Assets/Images/linkedin.png";
import GithubImg from "./../../../Assets/Images/github.png";
import MailImg from "./../../../Assets/Images/apple.png";

function NavBar(props){
    return (
        <div className='nav-wrapper'>
            <div className='nav-inner'>
                <div className='name'>
                    <h1>Jimmy Zhang</h1>
                </div>
                <div className='socials'>
                    <a className='icon' href="https://www.linkedin.com/in/jimmyzhang1127/">
                        <img src={LinkedinImg}/>
                    </a>
                    
                    <a className='icon' href="https://www.linkedin.com/in/jimmyzhang1127/">
                        <img src={GithubImg}/>
                    </a>

                    <a className='icon' href="https://www.linkedin.com/in/jimmyzhang1127/">
                        <img src={MailImg}/>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar;