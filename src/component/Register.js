import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Register = () => {
    var [name,setName]=useState("")
    var [email,setEmail]=useState("")
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    var [cpasswod,setCPassword]=useState("")
    const subData=()=>{
        const data={"name":name,"email":email,"username":username,"password":password ,"cpasswod":cpasswod}
        console.log(data)
    }
  return (
    <div><div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Confirm password</label>
                    <input onChange={(e)=>{setCPassword(e.target.value)}} type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">Register</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Register