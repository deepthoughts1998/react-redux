import {createSlice} from "@reduxjs/toolkit"

const stateAtStart={showNotClickedDetails:"none",showNotClickedPassword:"block"}
const stateAtEnd={showNotClickedDetails:"block",showNotClickedPassword:"none"}

const securitySlice=createSlice({
    name:"security",
    initialState:{value:stateAtStart},
    reducers:{
        show:(state,action)=>{
            if(action.payload==="123"){
                state.value=stateAtEnd;
            }else{
                alert("Access denied")
            }
        },
        hide:(state)=>{
            state.value=stateAtStart
        }
    }
})

export const {show,hide}=securitySlice.actions;
    
export default securitySlice.reducer;