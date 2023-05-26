import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from '../../Firebase/firebase';
import { toast } from "react-toastify"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  let navigate = useNavigate();
  let [email, setemail] = useState();
  let [password, setpassword] = useState();
  let [loadding, setloadding] = useState(false)

  let handledata = (e) => {
    e.preventDefault();
    let signin = async () => {
      try {
        setloadding(true)
        let userdata = await signInWithEmailAndPassword(auth, email, password);
        console.log(userdata)
        toast.success("user login seccessfully")
        navigate("/home")

      } catch (error) {
        toast.error(error.message.slice(9))
        // console.log(error.message.slice(9))
        
         setloadding(false)
         setemail("");
         setpassword("")
      }
       
    }
    signin()
    
  
  }

  return (
    <form onSubmit={handledata}>
      <fieldset>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter Your Email' value={email}
          onChange={e => setemail(e.target.value)} required />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter password' value={password}
          onChange={e => setpassword(e.target.value)} required />
        <p onClick={() => navigate('/signup')}> <strong>New user signUp</strong></p>
        <button type='submit' style={{ backgroundColor: loadding ? "green" : "gold" }}>{loadding ? "loadding.." : "submit"}</button>
      </fieldset>
    </form>
  )
}

export default Login
