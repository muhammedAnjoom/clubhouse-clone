import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/header.module.css'

function Header() {
    return (
        <div className={style.Header}>
            <Link exact to="/explore">
                <img src="/images/search.png"/>
            </Link>
            <div className={style.nav_items}>
                <Link exact to="/friends_invite">
                    <img src="/images/invite.png"/>
                </Link>
            </div>
            <div className={style.nav_items}>
                <Link exact to="/upcoming">
                    <img src="/images/calendar.png"/>
                </Link>
            </div>
           
            <div className={style.nav_items}>
                <Link exact to="/activity">
                    <img src="/images/noti.png"/>
                </Link>
            </div>
            <div className={style.nav_items}>
                <Link exact to="/profile">
                    <img style={{width:'35px', height:'35px', borderRadius:'50%', cursor:'pointer'}} src="/images/myimage.png"/>
                </Link>
            </div>
        </div>
    )
}

export default Header
