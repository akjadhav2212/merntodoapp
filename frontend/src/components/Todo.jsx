import { useEffect } from 'react';
import './../Todo.css'
export default function Todo({todos}) {
  return (
    <>
      {todos.map((todo) => (
        <div  className="todo">
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button id={todo._id} onClick={(event)=>{
            fetch("http://localhost:3000/todo/",{
              method:'DELETE',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                'id':todo._id
              })
            }).then(()=>{
              window.location.reload();
            })
          }}>Delete</button>
        </div>
      ))}
    </>
  );
}
