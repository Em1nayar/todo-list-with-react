import React from 'react'

function List({todos,todo,setTodos}) {
    
    const isCompleted = () => {
        setTodos(todos.map(item => (
            item.id === todo.id ? {...item,completed : !item.completed} : item
        )))
    }

    const deleteItem = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    }

  return (
    
    <div>
        <li>
            <div className='list-view'>
                <input type="checkbox" className='toggle' onClick={isCompleted}></input>
                <label>{todo.text}</label>
                <button className='delete' onClick={deleteItem}>Delete</button>
            </div>
        </li>
        
    </div>
  )
}

export default List