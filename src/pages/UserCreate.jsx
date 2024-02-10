import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserCreate() {

   let navigate =  useNavigate()

  let [name,setname] = useState()
  let [age,setage] = useState()
  let [city,setcity] = useState()
  let [email,setemail] = useState()

  let createUser = () => {
    let data = axios.post("http://localhost:3000/users", { name, age, city, email })
    data.then((i) => {
       navigate("/read")
    })
  }

  return (
    <div className='container shadow-lg mt-3 p-4 w-50'>

      <form onSubmit={createUser}>
        <div class="mb-3 ">
          <label  class="form-label">Name :</label>
          <input type="text" class="form-control"  placeholder="Enter Name" onChange={(e)=>{setname(e.target.value)}}/>
        </div>
        <div class="mb-3">
          <label  class="form-label">Age :</label>
          <input type="number" class="form-control"  placeholder="Enter Age" onChange={(e)=>{setage(e.target.value)}}/>
        </div>
        <div class="mb-3">
          <label  class="form-label" >City :</label>
          <input type="text" class="form-control"  placeholder="Enter City" onChange={(e)=>{setcity(e.target.value)}}/>
        </div>
        <div class="mb-3">
          <label  class="form-label" >Email address</label>
          <input type="email" class="form-control"  placeholder="name@example.com" onChange={(e)=>{setemail(e.target.value)}}/>
        </div>
        <button className='btn btn-warning container' >SUBMIT</button>
        
      </form>

    </div>
  )
}
