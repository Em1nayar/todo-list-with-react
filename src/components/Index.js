import { useState,useEffect } from "react";
import Form from "./form/Form";
import List from "./list/List";
import Footer from "./Footer/Footer";
import "./styles.css"

function Index() {
    const [todos,setTodos] = useState([]);
    const [status,setStatus] = useState("");
    const [filteredTodos,setFilteredTodos] = useState([]);

    useEffect(() => {
      const filterHandler = () => {
        switch(status){
          case "completed":
            setFilteredTodos(todos.filter(todo => todo.completed === true))
            break;
          case "active":
            setFilteredTodos(todos.filter(todo => todo.completed === false))
            break;
          default:
            setFilteredTodos(todos)
            break;
        }
      }
      filterHandler();
    },[todos,status]);

  return (
    <div className="container">
        <Form todos = {todos} setTodos = {setTodos}/>


        <ul>
          {filteredTodos.map(todo =>(
            <List
            key={todo.id}
            todos={todos}
            setTodos = {setTodos}
            todo = {todo}
          />
          ))}
        </ul>

        <Footer 
        status = {status}
        setStatus = {setStatus}
        setTodos = {setTodos}
        todos = {todos}/>
    </div>
  )
}

export default Index