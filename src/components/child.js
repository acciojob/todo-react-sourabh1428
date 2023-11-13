import React, { useState } from 'react'
import '../styles/App.css'
export default function Child({data,handleDelete}) {
 

    
  
    return (
   
        <ul className='uls'>
            {data.map((e,i)=><li key={i}>{e}<button name={i} onClick={handleDelete}>Delete</button></li>)}
        </ul>
       
  )
}
