import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CreateTask, DeleteTask, GetTask } from '../redux/Slices/TaskSlice';
const Home = () => {
  const dispatch=useDispatch()
  const {isAuth}=useSelector(state=>state.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!isAuth) navigate('/register')
  },[isAuth])
useEffect(()=>{
  dispatch(GetTask())
},[])
const title=useRef()
const description=useRef()
const {TaskData}=useSelector(state=>state.task)
  return (
    <div>
          <Form onSubmit={(event)=>{
event.preventDefault()
dispatch(CreateTask({title:title.current.value,
description:description.current.value
}))


}}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Type your Title" ref={title}/>
   
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Description"  ref={description} />
    </Form.Group>
    {/* {error && <p style={{color:"red"}}>{error}</p>} */}
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>

  <div>
    {Array.isArray(TaskData) && TaskData.map(el=><div>
      <h3>{el.title}</h3>
      <h3>{el.description}</h3>
      <button onClick={()=>{dispatch(DeleteTask(el._id))}}>Delete</button>
    </div>)}
  </div>
    </div>
  )
}

export default Home