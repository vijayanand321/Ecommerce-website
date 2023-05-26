import React,{useContext} from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import {UserAuthcontext} from "../ContextApi/AuthContext"
import {signOut} from "firebase/auth"
import { auth } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Navbar = () => {
  let user=useContext(UserAuthcontext);
  let navigate=useNavigate()
console.log(user)

let handlelogout=()=>{
  let logout=async()=>{
    signOut(auth).then(()=>{
         navigate("/")
    }).catch(err=>{
      toast.error(err.message.slice(9));
    })
  }

  logout()
   
}

    let UserLoggedIn=()=>{
      return (
        <nav>
         <div id='logoBlock'>VijayCart</div>
         <div id='menuBlock'>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/contact">Products</Link></li> */}
                {/* <li><Link to="/about">About</Link></li> */}
                <li><Link onClick={handlelogout}>logout</Link></li>
                <li>{user.displayName}</li>
                
            </ul>
         </div>
     </nav>
   )
    }
    
    let UserNotLoggedIn=()=>{
      return (
        <nav>
         <div id='logoBlock'>VijayCart</div>
         <div id='menuBlock'>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/contact">Products</Link></li> */}
                {/* <li><Link to="/about">About</Link></li> */}
                <li><Link to="/login">login</Link></li>
                <li><Link to="/signup">signUp</Link></li>
                
                
            </ul>
         </div>
     </nav>
   )
    }

   return (
    <div>
      {user !==null?<UserLoggedIn/>:<UserNotLoggedIn/>}
    </div>
  )
  
  }

export default Navbar