import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Slices/UserSlice';
const NavbarTodo = () => {
  const dispatch=useDispatch()
  const {isAuth}=useSelector(state=>state.user)
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {isAuth? <>
            <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link onClick={()=>{dispatch(logout())}}>Logout</Nav.Link>

          </>
          :
          <>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          </>}
          
         
        </Nav>
      </Container>
    </Navbar>
   
  </>
  )
}

export default NavbarTodo