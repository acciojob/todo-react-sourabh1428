import React, { useState } from 'react'
import Child from './child';

export default function Hero() {
    let[alltask,setAllTask]=useState([]);
    let[task,setTask]=useState("");
   
    function handleChange(event){
        setTask(event.target.value);
    }
    function handleClick(){
        setAllTask([...alltask,task]);
        setTask("");
    }
    function handleUpdate(event){
      const updt=[...alltask];
      updt.splice(event.target.name,1);
      console.log(updt,'✅');
      setAllTask(updt);
    }
   

  return (
    <div>
        <input value={task} type="text" name="task" id="" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        <Child handleDelete={handleUpdate} data={alltask}/>
    </div>
  )
}
