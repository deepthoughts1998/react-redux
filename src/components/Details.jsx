import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {change} from "../features/Detail"
import {hide} from "../features/Security"

function Details() {
    const showProperty=useSelector((state)=>state.security.value)
    // const details=useSelector((state)=>state.detail.value)
    const [details,setDetails]=useState(useSelector((state)=>state.detail.value))
    const dispatch=useDispatch()
  return (
    <div style={{display:showProperty.showNotClickedDetails}}>
        <h1>Details</h1>
        <input type="text" value={details} onChange={(e)=>{setDetails(e.target.value)}} />
        
        <button onClick={(e)=>{dispatch(change(details))}}>Change</button>
        <button onClick={(e)=>{dispatch(hide())}}>Logout</button>
    </div>
  )
}

export default Details