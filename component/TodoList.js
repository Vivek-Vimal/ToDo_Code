import React,{useState} from 'react'

const TodoList = () => {
    const [task, setTask] = useState("")
    const [data, setData] = useState([])
    const display = ()=>{
        if(task !== ""){
            const taskVar = {value: task}
            setData([...data, taskVar])
        }
    }
    return (
        <>
        <h3 className="upper"><div className="red"><h3 className="title">Excellence Technology</h3> Welcomes You</div></h3>
        <div className="todo">
            <div className="item">
            <h1 className="head">ToDo List</h1>
            <div className="sec">
            <input type="search" className="input" placeholder="Add Task" onChange={(e)=> setTask(e.target.value)}></input>
            <button type="button" className="btn" onClick={display}>ADD</button>
            </div>
            </div>
        </div>
        <section className="todocontainer">
                {(data !== [])? (
                <ul className="todolist">
                    {data.map ( e => (
                     <li className="each">{e.value}</li>
                    ))} 
                </ul>):( null)}
        </section>
        </>
    )
}

export default TodoList
