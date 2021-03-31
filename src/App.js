import React, { useState } from 'react'

const App = () => {
  const [ userName, setUserName ] = useState('')
  return (
    <div>
      <input
      type='text'
      placeholder='Enter username'
      value={userName}
      onChange={(e) => { setUserName(e.target.value)}} />
    </div>
  )
}

export default App