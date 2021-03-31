import React, { useState } from 'react'

const App = () => {
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <div>
      <input
      type='text'
      placeholder='Enter username'
      value={userName}
      onChange={(e) => setUserName(e.target.value)} 
      />
      <input
      type='password'
      placeholder='Enter password'
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      />
      <h2>
        {userName}
      </h2>
      <h2>
        {password}
      </h2>
      <button>Show/Hide password</button>
    </div>
  )
}

export default App