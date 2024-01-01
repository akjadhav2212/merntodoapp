import { useState,useEffect } from 'react'
import './App.css'
import  CreateTodo  from './components/CreateTodo'
import  Todo  from './components/Todo'
function App() {
  const [todos, setTodos] = useState([{
    title:"asch",
    description:" nothing is here"
  }]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos');
      const result = await response.json();
      setTodos(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
   <div style={{
    textAlign:"center",
    

   }}>
    <CreateTodo></CreateTodo>
    <h1>Todos</h1><br></br>
    <Todo todos={todos}></Todo>
   </div>
  )
}

export default App
