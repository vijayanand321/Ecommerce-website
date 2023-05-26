import {legacy_createStore as createstore} from "redux"
import rootreducer from "./Reducer/Reducer"



let store =createstore(
    rootreducer
)

export default store;