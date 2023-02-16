import React, { useState } from 'react'
import './HomeStyle.css'

function HomeScreen() {
  let [count,setCount]=useState(0);

  function handleClick(){
  setCount(count + 1);
  console.log(count)
  }
  return (
    <div class="container">


    <div class="row container1">
    <div class="col-sm-6">
      <div class="card homeCard1" >
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <p>{count}</p>
          <button  onClick={handleClick} class="btn btn-primary">Count</button> 
          <button onClick={()=>setCount(0)} class="btn btn-primary">RESET</button>
        </div>
      </div>
    </div>
    
  </div>
  </div>
  )
}

export default HomeScreen