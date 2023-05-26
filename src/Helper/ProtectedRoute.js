import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuthcontext } from '../ContextApi/AuthContext'

const ProtectedRoute = ({children}) => {
  let user=useContext(UserAuthcontext)
  let navigate=useNavigate()
  return (
    <div>
      {user !==null && user.email==="basukm143@gmail.com"?children:(navigate("/"))}
    </div>
  )
}

export default ProtectedRoute