import React, { useState } from 'react'

const App = () => {
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ showPassword, setShowPassword ] = useState(true)
  return (
    <div>
      <input
      type='text'
      placeholder='Enter username'
      value={userName}
      onChange={(e) => setUserName(e.target.value)} 
      />
      <input
      type={showPassword ? 'text' : 'password'}
      placeholder='Enter password'
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      />
      <h2>
        {userName}
      </h2>
      {/* if the showPassword is true then we display SHOW else we display NOT SHOW */}
      <h2>
        {showPassword ? password : '*'.repeat(password.length)}
      </h2>
      <button onClick={() => setShowPassword(!showPassword)}>Show/Hide password</button>
    </div>
  )
}

export default App