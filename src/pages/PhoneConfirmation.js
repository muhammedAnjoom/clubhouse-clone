import React,{useState} from 'react'
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom'
import style from '../style/phoenConfi.module.css'

function PhoneConfirmation() {
    const [value, setValue] = useState();
    return (
        <div className={style.PhoneConfirmContanier}>
            <Link exact to='/'className={style.backBtn} >
                <img src="/images/arrow.png"></img>
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput
            international
            defaultCountry="IN"
            value={value}
            onChange={setValue}

             />
           <p>By entering your number, you're agreeing to our {""}
           <span>Terms of service and privacy policy.</span>
           Thanks!
           </p>
            <Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center ">
                Next <img src="/images/nextArrowIcon.svg" className="ml-1" alt="" />
            </Link>
        </div>
    )
}

export default PhoneConfirmation
