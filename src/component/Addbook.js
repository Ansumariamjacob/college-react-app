import React, { useState } from 'react'
import Header from './Header'

const Addbook = () => { 
    var [title,setTitle]=useState("")
    var [author,setAuthor]=useState("")
    var [price,setPrice]=useState("")
    const subData=()=>{
        const data={"title":title,"author":author,"price":price}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Book title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Author</label>
                    <input onChange={(e)=>{setAuthor(e.target.value)}} type="text" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">price</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} type="text" name="" id="" className="form-control"/>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">Submit</button>
                </div>
                                 
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addbook