import { useState } from 'preact/hooks'
import './app.css'
import Main from './Components/Main/Main'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
    </>
  )
}
