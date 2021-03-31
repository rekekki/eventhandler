import React, { useState } from 'react'

const App = () => {
  const [ userName, setUserName ] = useState('')
  return (
    <div>
      <input
      type='text'
      placeholder='Enter username'
      value=''
      onChange={() => {}} />
      test
    </div>
  )
}

export default App