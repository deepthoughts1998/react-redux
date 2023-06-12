import {createSlice} from "@reduxjs/toolkit"

const stateAtStart="Clash of clan attack plan"

const detailSlice=createSlice({
    name:"detail",
    initialState:{value:stateAtStart},
    reducers:{
        change:(state,action)=>{
            state.value=action.payload
            alert("Plan changed")
        }
    }
})

export const {change}=detailSlice.actions

export default detailSlice.reducer;