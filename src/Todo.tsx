import React, { ChangeEvent, useState, MouseEvent } from 'react'
import { MdDelete } from "react-icons/md";
import './todo.css'

interface TodoItems {
    id:number,
    task:string,
    completed:boolean
}

const Todo = () => {
    const [todos, setTodos] = useState<TodoItems[]>([])
    const [input, setInput] = useState<string>("")

const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    if(event.target.name === 'task'){
        setInput(event.target.value)
    }
}


const addTodo = (event: MouseEvent) => {
    event.preventDefault()
        const newTodo : TodoItems = {
            id: todos.length + 1,
            task: input,
            completed : false
        };
        
        setTodos([...todos, newTodo]); 
        setInput('')
    };


const markComplete = (id:number) => {
    setTodos(
        todos.map(todo =>{
            if(todo.id === id){
            return{...todo, completed: !todo.completed}; 
            }
        return todo
})
);
};

const deleteTodo = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id)); 
};

  return (
    <>
        {/* <div className="todo-container">
        <form>
            <input type="text" name="task" placeholder='enter the todo item' value={input}  onChange={handleChange}/> 
            <button type="submit" id="addTodo" onClick={addTodo}> Add</button>
        </form>

        <div className="todo-box">
            
           { todos.length > 0 ? (
            todos.map(item, index) => {
                return <div key={index}> {item.input } </div>
            })
            <ul>
             todos.map(todo) 
             <a onClick = {deleteTodo}> <MdDelete /> </a>
            <li key={todo.id} onClick={markComplete}>  </li>
                
            </ul>
        </div>

        </div> */}
        
        <div className="todo-container">
        <form>
            <input type="text" name="task" placeholder='enter the todo item' value={input}  onChange={handleChange}/> 
            <button type="submit" id="addTodo" onClick={addTodo}> Add</button>
        </form>

        <div className="list-container">
    {todos.length > 0 ? (
    todos.map((item , index) => {
        return <div  key={index}>{item.input}

        <button className="remove-btn" onClick={() =>{deleteTodo(item.id)}}>Remove</button>
        </div>
    })
    ) : (
        <div className="no-task">
          <h3 className="empty">No Task Yet!</h3>
        </div> )}
    </div>
        </div>
    </>
  )
}

export default Todo