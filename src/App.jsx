import './App.css'
import Signup from './components/Signup'
import Background from './components/Background'
import Subscribed from './components/Subscribed'

import "./assets/fonts/Roboto-Regular.ttf"
import "./assets/fonts/Roboto-Bold.ttf"
import { useState } from 'react'

function App() {

  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <div className='container'>
      {!showSuccess && <>
        <Signup email={email} setEmail={setEmail} setShowSuccess={setShowSuccess} />
      <Background /></>}
      {showSuccess && <Subscribed email={email} setEmail={setEmail} setShowSuccess={setShowSuccess} />}
    </div>
  )
}

export default App
