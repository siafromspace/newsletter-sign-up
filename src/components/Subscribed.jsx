import React from 'react'
import Icon from '../assets/images/icon-success.svg'

export default function Subscribed({email, setEmail, setShowSuccess}) {
  const handleClick = () => {
    setShowSuccess(false)
    setEmail('')
  }
  return (
    <div className='subscribed'>
      <img src={Icon} alt="success icon" />
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <span className='email'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
      <button onClick={handleClick}>Dismiss message</button>
    </div>
  )
}
