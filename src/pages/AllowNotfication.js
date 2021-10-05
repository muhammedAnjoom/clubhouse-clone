import React from 'react'
import style from '../style/phoenConfi.module.css'
import { Link } from 'react-router-dom'

function AllowNotfication() {
    return (
        <div className={style.PhoneConfirmContanier }>
            <div className="text-center">
                <h1 className="mb-4">Last, important step!</h1>
                <h2 className="mb-3">Enable notfications to know when people are talking</h2>
                <div className={style.notficationContainer}>
                    <div className="p-3">
                        <h3>"Clubehouse" Would Like to Send You Notifcations</h3>
                        <p>Notifcations may include alerts, sounds, and icon badegs.</p>
                    </div>
                    <div className={style.action_btn}>
                        <Link exact to="/home">
                            Don't Allow
                        </Link>
                        <Link exact to="/home">
                            Allow
                        </Link>
                        <img src="/images/handIcon.svg" alt="" className={style.hand_icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllowNotfication
