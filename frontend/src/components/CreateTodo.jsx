import { useState } from 'react'
export default function CreateTodo(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div>
            <input style={{
                width: '300px',
                height: '30px'
            }} id="title" type="text" placeholder="Title" onChange={(e) => {
                setTitle(e.target.value);
            }}></input>    <br></br><br></br>
            <input style={{
                width: '300px',
                height: '30px'
            }}  type="text" placeholder="Description" onChange={(e) => {
                setDescription(e.target.value);
            }}></input><br></br><br></br>
            <button style={{width: '300px', height: '30px'}} onClick={() => {
                fetch('https://my-todo-2l3f.onrender.com/todo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description
                    })
                }).then(() => {
                    window.location.reload();
                })
            }}>Add a todo</button>
        </div>
    )
}