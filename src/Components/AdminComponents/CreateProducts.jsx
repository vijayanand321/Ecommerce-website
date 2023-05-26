import React,{useState} from 'react'
import { database } from '../../Firebase/firebase';
import {ref,set} from "firebase/database"
import { toast } from 'react-toastify';

const CreateProducts = () => {
    let [loadding , setloadding]=useState(false)
    let [productname , setproductname]=useState();
    let [imgurl , setimgurl]=useState();
    let [price , setprice]=useState();
    let [description , setdescription]=useState();

let handlesubmit=(e)=>{
    e.preventDefault();
let senddata=async()=>{
  try {
    setloadding(true)
    set(ref(database, 'products/' + Date.now()), {
        productname,
        imgurl,
        price,
        description
      });
      toast.success("Product created successfylly")
  } catch (error) {
    toast.error(error.message)
  }

}
senddata()
setloadding(false)
}

  return (
    <form onSubmit={handlesubmit}>
    <fieldset>
      <label htmlFor="">ProductName</label>
      <input type="text" placeholder='Enter product name' required
      onChange={(e)=>setproductname(e.target.value)}/>
      <label htmlFor="">Images URL</label>
      <input type="url" placeholder='Enter img url' required
       onChange={(e)=>setimgurl(e.target.value)}/>
      <label htmlFor="">Price</label>
      <input type="number" placeholder='Enter price' required
       onChange={(e)=>setprice(e.target.value)}/>
      <label htmlFor="">Description</label>
      <textarea name="" id="" cols="23" rows="4"
       onChange={(e)=>setdescription(e.target.value)}></textarea>
      <button type='submit' style={{backgroundColor:loadding?"green":"gold"}}>{loadding?"loadding..":"submit"}</button>
      </fieldset>
  </form>
  )
}

export default CreateProducts