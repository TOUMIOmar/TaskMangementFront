import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UserRegister } from '../redux/Slices/UserSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {isAuth}=useSelector(state=>state.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(isAuth) navigate('/')
  },[isAuth])
  const {error}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    dispatch(UserRegister(data))
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="name" {...register("name",{})} />
    <input type="number" placeholder="age" {...register("age",{})} />
    <input type="email" placeholder="email" {...register("email", {})} />
    <input type="password" placeholder="password" {...register("password", {})} />
    {error  &&  <p>{error[0].msg}</p>}
    <input type="submit" />
  </form>
  )
}

export default Register