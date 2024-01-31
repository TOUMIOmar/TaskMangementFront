import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './Slices/UserSlice'
import TaskSlice from './Slices/TaskSlice'

export default configureStore({reducer:{user:UserSlice,task:TaskSlice}})