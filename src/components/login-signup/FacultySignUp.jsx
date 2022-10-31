import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./facultySignUp.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FacultySignUp = () => {
  return (
    <div className="facultySignUp-Container">
      <Form className='faculty-registration'>
        <Form.Group className="mb-1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        {/* <Form.Group className="mb-1">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group> */}

        <Form.Group className="mb-1">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <div className="signup-btn">
        <Button className='mb-3' variant="primary" type="submit">
          Signup
        </Button>
        <p className="already-registerd text-right">
        Already registered <Link to="/login"><a>log in?</a></Link>
        </p>
        </div>
      </Form>
    </div>
  )
}

export default FacultySignUp;