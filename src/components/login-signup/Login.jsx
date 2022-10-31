import React from 'react'
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const facultyRegister = () => {
        navigate("/faculty-signup");
    };
    const studentRegister = () => {
        navigate("/student-signup");
    }
  return (
    <div className="container">
        <div className="left-side">
            <Form className='login-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 remember-login" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                    <a href="">Forgot Password</a>
                </Form.Group>
                <Button className='login-btn' variant="primary" type="submit">Login</Button>
            </Form>
        </div>
        
        <div className="right-side">
            <div className="devidor"></div>
            <div className="register">
                <Button onClick={() => facultyRegister()} className='register-btn' variant="primary" type="submit">Register as a Faculty</Button>
                <Button onClick={() => studentRegister()} className='register-btn' variant="primary" type="submit">Register as a Student</Button>
            </div>
        </div>
    </div>
  );
}

export default Login;