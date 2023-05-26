import React from 'react'
import Navbar from "./Components/Navbar"
import {Route,Routes} from "react-router-dom"
import Home from './Components/Pages/Home'
// import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'
import PageNotFound from './Components/Pages/PageNotFound'
import Mobiles from './Components/ProductComponents/Mobiles'
import Cloths from './Components/ProductComponents/Cloths'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import CreateProducts from './Components/AdminComponents/CreateProducts'
import { Provider } from 'react-redux'
import store from './Redux/store'
import ProtectedRoute from './Helper/ProtectedRoute'
let Footer = React.lazy(()=>import('./Components/Pages/Footer') )


const App = () => {
 return (
  <>
  
    <div>
      <Provider store={store}>
         <Navbar/>
        <ToastContainer/>
      <Routes>
        {/* <Route path='/login' element={<Login/>}></Route> */}
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/mobiles' element={<Mobiles/>}></Route>
        <Route path='/cloths' element={<Cloths/>}></Route>
        <Route path='/createproduct' element={
        <ProtectedRoute>
          <CreateProducts/>
        </ProtectedRoute>
      
      } 
        ></Route>
        {/* <Route path='/about' element={<About/>}></Route> */}
        <Route path='*' element={<PageNotFound/>}></Route>
       </Routes>
     </Provider>
    </div>
   <Footer/>
    </>
    
  )
}

export default App



     