import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./ContextApi/AuthContext";


let root=ReactDOM.createRoot(document.querySelector("#root"))


root.render(
    <BrowserRouter>
    <AuthContext>
<App/>
</AuthContext> 
    </BrowserRouter>


)