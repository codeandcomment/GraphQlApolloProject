import React,{useEffect, useRef, useState} from 'react'
import { useQuery ,useMutation} from '@apollo/client';
import { Create_Todo, GET_TODOS ,Toggle_Todo } from './queries/todoQuery.js';
import { Todo, TodoType } from './types.js';

export default function App() {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todos,setTodos] = useState <Array<Todo>>([]);
  const {data,loading,error} = useQuery <TodoType>(GET_TODOS);
  const [createtodo, {data:newTodo,loading:cLoading,error:cError}] = useMutation(Create_Todo)
  const [toggleComplete] = useMutation(Toggle_Todo)


  useEffect(()=>{
    if(data?.todos){
    setTodos(data.todos)
    }
  },[data])

  useEffect(()=>{
      console.log(newTodo);
      if(newTodo && newTodo?.createTodo){
       setTodos([newTodo?.createTodo, ...todos])
      }
  },[newTodo])

  const handleSubmit = (event:React.FormEvent) =>{
    event.preventDefault()
    if(inputRef.current){
      createtodo({variables:{todo:inputRef.current.value}})
      if(cError) alert(cError.message);
      // setTodos([newTodo?.createtodo,...todos])
      inputRef.current.value='';
    }
  }

  const handleToggle = (data:boolean, id:number) =>{
    console.log(data,id);
    const updateTodos = todos.map((item)=>{
        if(item.id===id){
          return{...item, completed:data}
        }else{
          return item
        } 
    })
    toggleComplete({variables:{id:id,data:data}})
    setTodos(updateTodos);
  } 

  return (
    <div className="h-screen flex justify-center items-center">
      <div className='w-full px-2 md:w-[600px] rounded-md bg-blue-100 h-[60vh]'>
      <h1 className='text-xl font-bold my-2'> Todo App</h1>

      <form onSubmit={handleSubmit}>
          <input className='w-full h-10 p-2 outline-none rounded-md bg-white'
          placeholder="Enter Todo here" ref={inputRef} disabled={cLoading}></input>
      </form>
      <div className='h-[50vh] mt-4'> 

        {loading && <p>Loading...</p>}
        {error && <p className='text-red-400'>{error.message}</p>}
        
        <div>{todos && todos.map((todo)=>
            <div key={todo.id} className='flex justify-between items-center
                       bg-blue-400 rounded-md p-1 px-4 mb-2'> 
              <p className={`${todo.completed ? 'line-through' : ''}`}>{todo.todo}</p>
              <input type='checkbox' checked={todo.completed} onChange={(e)=>handleToggle(e.target.checked,todo.id)}></input>
            </div>
        )}</div>  

      </div>
      </div>
    </div>
  )
}
