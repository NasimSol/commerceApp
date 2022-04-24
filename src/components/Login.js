import React, { useRef, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Joi from "joi-browser";//for validation

import "bootstrap/dist/js/bootstrap.min.js";{/*i dont know why i add this to my project it works*/}

function Login() {
  const refEmailInput = useRef(null);
  //when we click on sign it with google focus on email;
  const renderFocus = () => {
    
      refEmailInput.current.focus();
  };
  {/*<!--variable for validation we use name in input for update them-->*/ }
  const [value, setValue] = useState({
    email: '',
    password: '',
  })
  {/*<!--variable for active checkbox and button when we complete form-->*/ }
  const [accuracy, setAccuracy] = useState(true);
  const [butt, setButt] = useState(true);
  {/*<!--variable for error validation in form-->*/ }
  //const [errors, setErrors] = useState({});

  /* const schema ={
    email: Joi.string().email().required(),
    password: Joi.number().min(100000).max(999999).required(),
    
   };*/
  
 
  /*const validate = () => {
    const result = Joi.validate(value, schema, { abortEarly: false });
    const { error } = result;
    if (!error) { return null; } else {

      const errorData = {};
      for (let item of error.details) {
        errorData[item.path[0]] = item.message;
      }
      console.log(errors);
      setErrors(errorData);
      return errorData;
     
    }
  };*/

  
  
  {/*<!--function complete email, password and active checkbox if we have input  -->*/ }
  const onValidForm = (e) => {
     
     setValue({
       ...value,
       [e.target.name]: e.target.value
       
     });
     if (value.email.trim() !== '' && value.password !== ''&&value.password.length===6) {
       setAccuracy(!accuracy);
     }
     return value;
  }
   {/*<!--function for active button-->*/ }
  const onCheckValue = (e) => setButt(!butt);
  const onHandleSubmit = (e) => {
    
    e.preventDefault();
    
    /*const result = Joi.validate(value, 
      schema, { abortEarly: false });
    console.log(result);*/
    toast.success("Success Loggin !", {
    color: 'red',
      position:"top-right",
      autoClose: 2000
    });
    
  }
     

   
  
  return (
    <>
      { /* <!-- Button trigger modal -->*/}
      <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="fa fa-sign-in me-1" ></i>Login
      </button>

      {/*<!-- Modal use bootstrap for it -->*/}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button onClick={renderFocus} className='btn btn-primary mb-2 w-100'><i className="fa fa-google me-1" ></i>sign in with google</button>
              <button className='btn btn-primary mb-4 w-100'><i className="fa fa-twitter me-1" ></i>sign in with facwbook</button>
              
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input value={value.email} onChange={(e) => onValidForm(e)} name='email' ref={refEmailInput} placeholder='Enter your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input value={value.password} onChange={(e) => onValidForm(e)} name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input onChange={(e) => onCheckValue(e)} name='accuracy' type="checkbox" className="form-check-input" id="exampleCheck1" disabled={accuracy} />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={(e) => onHandleSubmit(e) } type="submit" className="btn btn-outline-primary w-100" disabled={butt}>Loggin</button>
                
              </form>
              <ToastContainer
                 style={{ width: "500px" }}
                 />
            </div>
      
          </div>
        </div>
      </div>
       
    </>
  );
}

export default Login;