import React,{useRef} from 'react'

export default function App() {

  const inputRef = useRef(null);
  const handleSubmit = (event:React.FormEvent) =>{
    event.preventDefault()
    console.log(inputRef.current.value);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className='w-full px-2 md:w-[600px] rounded-md bg-blue-100 h-[60vh]'>
      <h1 className='text-xl font-bold my-2'> Todo App</h1>

      <form onSubmit={handleSubmit}>
          <input className='w-full h-10 p-2 outline-none rounded-md bg-white'
          placeholder="Enter Todo here" ref={inputRef}></input>
      </form>

      </div>
    </div>
  )
}
