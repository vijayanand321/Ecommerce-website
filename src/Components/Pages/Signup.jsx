import React,{useState} from 'react'
import './Form.css'
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import {auth} from '../../Firebase/firebase'
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

function Signup() {
  let navigate=useNavigate();
  let [name , setname]=useState();
  let [email , setemail]=useState();
  let [password , setpassword]=useState();
  let [confirmPassword , setconfirmpassword]=useState();
  let [loadding , setloadding]=useState(false)
  

  let handledata=(e)=>{
     let CreateUser=async()=>{
      e.preventDefault();
      try {
        if(password===confirmPassword){
          setloadding(true);
          let userdata= await createUserWithEmailAndPassword(auth,email,password)
          let user=userdata.user;
          updateProfile(user,{displayName:name})
          // userdata.user.displayName=name;
          console.log(userdata);
         toast.success("user signup successfully");
         setloadding(false);
          navigate('/login');
       }else{
         toast.error("password mismatched")
       }
      } catch (error) {
       console.log(error)
      }
     }
     CreateUser();
    }

  return (
    <form  onSubmit={handledata}>
      <fieldset>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Enter Your name'
         onChange={e=>setname(e.target.value)} required/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter Your Email'
        onChange={e=>setemail(e.target.value)} required/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter password' 
        onChange={e=>setpassword(e.target.value)} required/>
        <label htmlFor="">ConfirmPassword</label>
        <input type="password" placeholder='Re-enter password' 
        onChange={e=>setconfirmpassword(e.target.value)} required/>
        <button type='submit' style={{backgroundColor:loadding?"green":"gold"}}>{loadding?"loadding..":"submit"}</button>
        </fieldset>
    </form>
  )
}

export default Signup