import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const  CreateTask=createAsyncThunk("/CreateTask",async(data,{rejectWithValue,dispatch})=>{
   try {
    const res=await axios.post("/createtask",data,{
        headers:{
            token:localStorage.getItem('token')
        }
    })
    dispatch(GetTask())
    return res.data
   } catch (error) {
    return rejectWithValue(error.response.data.msg)
   }
   
})

export const  GetTask=createAsyncThunk("/GetTask",async(data,{rejectWithValue})=>{
    try {
     const res=await axios.get("/getusertasks",{
         headers:{
             token:localStorage.getItem('token')
         }
     })
     return res.data
    } catch (error) {
     return rejectWithValue(error.response.data.msg)
    }
    
 })

 export const  DeleteTask=createAsyncThunk("/DeleteTask",async(info,{rejectWithValue,dispatch})=>{
    try {
     const res=await axios.delete(`deleteusertask/${info}`,{
         headers:{
             token:localStorage.getItem('token')
         }
     })
     dispatch(GetTask())
     return res.data
    } catch (error) {
     return rejectWithValue(error.response.data.msg)
    }
    
 })


const TaskSlice=createSlice({
    name:"TaskSlice",
    initialState:{
        TaskData:{},
        isLoading:false,
        error:null,
    },
    reducers:{
      
    },
    extraReducers:(builder)=>{
        builder.addCase(CreateTask.fulfilled,(state,action)=>{
            state.isLoading =false
        })
        .addCase(CreateTask.rejected,(state,action)=>{
            state.isLoading =false
            state.error=action.payload
        })
        .addCase(CreateTask.pending,(state,action)=>{
            state.isLoading =true
        })
      .addCase(GetTask.fulfilled,(state,action)=>{
            state.isLoading =false
            state.TaskData= action.payload.UserTasks
        })
        .addCase(GetTask.rejected,(state,action)=>{
            state.isLoading =false
            state.error=action.payload
        })
        .addCase(GetTask.pending,(state,action)=>{
            state.isLoading =true
        })
    }}
)
export default TaskSlice.reducer
