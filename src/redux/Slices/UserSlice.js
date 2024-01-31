import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const  UserLogin=createAsyncThunk("/login",async(data,{rejectWithValue})=>{
   try {
    const res=await axios.post("/login",data)
    return res.data
   } catch (error) {
    return rejectWithValue(error.response.data.msg)
   }
   
})

export const  UserRegister=createAsyncThunk("/register",async(data,{rejectWithValue})=>{
    try {
     const res=await axios.post("/register",data)
     return res.data
    } catch (error) {
    return rejectWithValue(error.response.data.msg)
    }
    
 })
const UserSlice=createSlice({
    name:"UserSlice",
    initialState:{
        userData:{},
        token:localStorage.getItem('token')||null,
        isLoading:false,
        error:null,
        isAuth:localStorage.getItem('isAuth')||false
    },
    reducers:{
        logout:(state)=>{
            state.token=null
            state.isAuth=false
            localStorage.removeItem('token')
            localStorage.removeItem('isAuth')
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(UserLogin.fulfilled,(state,action)=>{
            state.token = action.payload.token
            state.isLoading =false
            state.isAuth =true
            localStorage.setItem("token",state.token)
            localStorage.setItem('isAuth',state.isAuth)

        })
        .addCase(UserLogin.rejected,(state,action)=>{
            state.token = null
            state.isLoading =false
            state.isAuth =false  
            state.error=action.payload
        })
        .addCase(UserLogin.pending,(state,action)=>{
            state.isLoading =true
        })
      .addCase(UserRegister.fulfilled,(state,action)=>{
            state.token = action.payload.token
            state.isLoading =false
            state.isAuth =true
            localStorage.setItem("token",state.token)
            localStorage.setItem('isAuth',state.isAuth)

        })
        .addCase(UserRegister.rejected,(state,action)=>{
            state.token = null
            state.isLoading =false
            state.isAuth =false  
            state.error=action.payload
        })
        .addCase(UserRegister.pending,(state,action)=>{
            state.isLoading =true
        })
    }

})
export default UserSlice.reducer
export const {logout}=UserSlice.actions
