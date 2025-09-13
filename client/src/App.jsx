import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-zinc-900 py-4 pl-5'>
        <p className='text-emerald-400 text-2xl font-bold'>Alumigo</p>
      </div>
    </>
  )
}

export default App
