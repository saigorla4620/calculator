import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Caluclator from './calculator/calculator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Caluclator/>
    </>
  )
}

export default App
