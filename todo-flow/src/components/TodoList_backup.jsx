import { useRef, useReducer, useEffect, useState } from "react";


function TodoList(){
    const [todos, setTodos] = useState(['my todos 1', 'my todos 2'])

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        const userInput = document.getElementById('user-input').value.trim()
        console.log(userInput)

        if(userInput == '') return
        // setTodos([...todos, userInput])
        setTodos(t => [...t, userInput])
        inputRef.current.value = ''
    }

    // remove Todos 
    function removeTodo(index){
        setTodos(todos.filter((_, i)=> i !==index))
    }

    // move Todo up
    function moveTodoUp(index){
    setTodos(prev => {
        if(index <= 0) return prev;
        const updated = [...prev];
        [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
        return updated;
    });
    }

    // move Todo Down
    function moveTodoDown(index){
    setTodos(prev => {
        if(index >= prev.length - 1) return prev;
        const updated = [...prev];
        [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
        return updated;
    });
    }

    // using Ref
    const inputRef = useRef(null)
    const handleRefClick = ()=>{
        inputRef.current.focus()
        inputRef.current.style.background = 'rgb(203, 249, 249)'
    }

    // ....... return
    return(
  
        <div>
            <h3>My Todo List</h3>
            <ul>
                {todos.map((todo, index)=> <li key={index} >{todo} 
                    <button id='btnUp' onClick={()=> moveTodoUp(index)} >up</button> 
                    <button id='btnDown' onClick={()=> moveTodoDown(index)} >down</button> 
                    <button id='btnDel' onClick={()=> removeTodo(index)}>delete</button>
                     </li>)}
            </ul>

            <form onSubmit={handleOnSubmit}>
                <input ref={inputRef} type="text" id='user-input' onClick={handleRefClick} placeholder="Enter Activity" />
                <button type="submit" >ADD</button>
            </form>
        </div>
    )
}

export default TodoList