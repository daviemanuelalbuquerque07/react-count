import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const somar = () => {
    setCount( count + 1)   
  }

  const subtrair = () => {
    if ( count > 0 ){
      setCount ( count - 1)
    }else{
      return false
    }
  }

  return (
    <>
      <h1>Adicionar e remover Produto</h1>
      <div className="card">
        <h2>{count}</h2>

        <button onClick={ somar } > + </button>
        <button onClick={ subtrair } > - </button>

      </div>
    </>
  )
}

export default App
