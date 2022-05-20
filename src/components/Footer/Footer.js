import React from 'react'

function Footer({todos,setTodos,status,setStatus}) {
    const unCompleted = todos.filter( item => item.completed == false)
    const completed = todos.filter( item => item.completed == true)

    const clickStyle = (e) => {
        setStatus(e.target.id);
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => todo.completed == false));
    }

  return (
    <div>

        <span>
            {unCompleted.length} <small> items left </small>
        </span>

        <ul>

            <li>
                <a className={ status === "all" ? "selected" : ""} id="all" onClick={clickStyle}>All</a> 
            </li>
            <li>
                <a className={ status === "active" ? "selected" : ""} id="active" onClick={clickStyle}>Active</a>
            </li>
            <li>
                <a className={ status === "completed" ? "selected" : ""} id="completed" onClick={clickStyle}>Completed</a>
            </li>

        </ul>
        
        <button className={completed == 0 ? "hidden" : "clear-Completed"} onClick={clearCompleted}>
            Clear Completed
        </button>

    </div>
  )
}

export default Footer