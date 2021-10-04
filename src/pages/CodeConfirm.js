import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/phoenConfi.module.css'


function CodeConfirm() {
    return (
        <div className={style.PhoneConfirmContanier}>
            <div className="text-center">
                <Link exact to="/get_username" className={style.backBtn}> 
                    <img src="/images/arrow.png" alt="" />
                </Link>
                <h1 style={{width:"100%", maxWidth:"330px",marginBottom:"1em"}}>Enter the code we just texted you</h1>
                <input type="text"
                style={
                    {
                        width:"100%",
                        border:"none",
                        textAlign:"center",
                        outline:"none",
                        height:"40px"
                    }
                        } />
                <p>
                    Didn't receive it? <span>Tap to resend.</span>
                </p>
                <Link exact to="/allow_notification" className="primaryBtn d-flex text-center" >
                Next <img src="/images/nextArrowIcon.svg" alt="" className="ml-1" />
                </Link>
            </div>
        </div>
    )
}

export default CodeConfirm
