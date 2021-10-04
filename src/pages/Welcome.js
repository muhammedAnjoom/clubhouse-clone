import React from 'react'
import style from '../style/Welcome.module.css'
import { Link } from'react-router-dom'

function Welcome() {
    return (
        <div className={style.welcomeContainer}>
            <h1>welcome!</h1>
            <div className={style.welcomeInfo}>
                <p>
                    We're working hard to get clubhouse ready for everyone! While we wrap
                    up the finishing touches, we're adding people gradually to 
                    make sure nothing breaks
                </p>
                <p>
                    Anyone can join with an invite from an existing user -or reserve 
                    your username and we'll text you if you have a friend on the app 
                    who can let you in. We are so grateful you're here and can't wait 
                    to have you join!
                </p>
                <p>
                    Paul,Rohan & the Clunehouse team
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link exact to='/get_username' className='primaryBtn d-flex align-items-center mb-3'>
                 Get your username {" "}
                 
                </Link>
                <Link exact to="/invite">
                    Have an invite text? Sign in
                </Link>
            </div>
        </div>
    )
}

export default Welcome
