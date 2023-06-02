import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // NO PONER NUNCA UN HOOK EN UN CONDICIONAL O FOR O WHILE O LO QUE SEA

  const [followPoiner, setFollowPoiner] = useState(false)
  const [pointerPosition, setPointerPosition] = useState({x: 0, y: 0})

  useEffect(() => {

    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPointerPosition({x: clientX, y: clientY})
    }

    if (followPoiner) window.addEventListener("pointermove", handleMove)

    return () => {
      window.removeEventListener("pointermove", handleMove)
    }

  }, [followPoiner])

  return (
    <main>
      <div style={{
        position : "absolute",
        backgroundColor : "#89f",
        borderRadius : "50%",
        opacity : .6,
        pointerEvents : "none",
        left: -10,
        top : -10,
        width : 20,
        height : 20,
        transform : `translate(${pointerPosition.x}px, ${pointerPosition.y}px)`,
        boxShadow : "0 0 4px #89f, 0 0 10px #89f"
      }}>

        </div>
      <button onClick={()=>setFollowPoiner(!followPoiner)}>
        {followPoiner ? "Desactivar" : "Activar"} Seguir Cursor
        </button>
    </main>
  )
}

export default App
