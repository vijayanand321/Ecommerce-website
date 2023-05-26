import React,{useEffect} from "react";
import { Link,Outlet } from "react-router-dom";
import '../ProductComponents/Components.css'
import {database} from "../../Firebase/firebase"
import { ref, onValue} from "firebase/database";
import {useDispatch,useSelector} from "react-redux"
import { Actiondata } from "../../Redux/Action/Action";

function Home(){
let dispatch=useDispatch()
let state=useSelector(state=>state.ProductReducer[0])
console.log(state)

    useEffect(()=>{
        const Alldata= ref(database, 'products/');
        onValue(Alldata, (data) => {
            let dataArr=[];
        data.forEach(value=>{
            let obj=value.val();
            let key=value.key;
            obj.id=key;
            dataArr.push(obj);
          })
          dispatch(Actiondata(dataArr))
        });

    },[])

    return (
        <div id="card_container">
            {
                state !== undefined && state != null ?(
                    state.map((a)=>{
                     return <div id="card-items">
                        <img src={a.imgurl} alt="imges" />
                       <div id="card_details">
                       <h3>{a.productname}</h3>
                        <h3>{a.price}</h3>
                        <p>{a.description}</p>
                        <button>AddToCart</button>
                       </div>
                     </div>
                    })
                ):<h1>loadding...🚚</h1>
            }
        </div>
    )
           
}

export default Home