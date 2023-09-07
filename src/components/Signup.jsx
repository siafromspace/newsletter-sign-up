import React, { useState } from 'react'
import Icon from '../assets/images/icon-list.svg'

export default function Signup({email, setEmail, setShowSuccess}) {
    const [error, setError] = useState()
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    function isEmailValid(email) {
        // Regular expression pattern for basic email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      }
    const handleClick = (e) => {
        e.preventDefault()
        if (!isEmailValid(email)) {
            setError('Valid email required');
          } else {
            setError('');
            setShowSuccess(true)
          }
    }

  return (
    <div className='left'>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
            <li>
                <img src={Icon} alt="list icon" /> Product discovery and building what matters
            </li>
            <li>
                <img src={Icon} alt="list icon" /> Measuring to ensure updates are a success
            </li>
            <li>
                <img src={Icon} alt="list icon" />And much more!
            </li>
        </ul>
        <form noValidate>
            <div className='form-field'>
                <div>
                    <label htmlFor="email">Email address</label>
                    <p className="error">{error}</p>
                </div>
                <input 
                type="email" 
                name="email" id="email" placeholder='email@company.com' value={email}
                onChange={handleEmailChange} className={error ? `error` : ``} />
            </div>
            <button onClick={handleClick}>Subscribe to monthly newsletter</button>
        </form>
    </div>
  )
}
