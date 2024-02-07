import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Main />
    </>
  )
}

export default App
