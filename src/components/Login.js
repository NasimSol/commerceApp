import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/js/bootstrap.min.js"; {/*i dont know why i add this to my project it works*/ }



function Login() {
   const { t } = useTranslation();
  //use for reach on email node;
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
  const [errors, setErrors] = useState({});
  const [isvalid, setIsvalid] = useState(true);

  //regex for validate
   const emailRegex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const passwordRegex = /^(?=.*[0-9])(?=.{8,}).*$/;
 
  {/*<!--function complete email, password and active checkbox if we have input  -->*/ }
  const handleChange = (e) => {
     setValue({
       ...value,
       [e.target.name]: e.target.value
       
     });
    //with this condition can able checkbox and button
     if (value.email.trim() !== '' && value.password !== ''&&value.password.length===6) {
       setAccuracy(!accuracy);
     }
     return value;
  }
   {/*<!--function for active button-->*/ }
  const onCheckValue = (e) => setButt(!butt);

  //function for simple validate 
  const validate = () => {
    const errs = {};
    if (!emailRegex.test(value.email)) {
      setIsvalid(false);
    
      errs.email = t('erroremail');
    }
    
    if (!passwordRegex.test(value.password)) {
      setIsvalid(false);
    
      errs.password = t('errorpassword');
    }
    
    return Object.keys(errs) === 0 ? null : errs;
    
  

  }
  //function for submit form
  const onHandleSubmit = (e) => {
    
    e.preventDefault();
    let existerr = validate();
    setErrors(existerr);
    let ex = Object.keys(existerr).length;
    
    if (ex) {return;
  }if(!ex) {
    return toast.success(t('Success Loggin !'), {
        backgroundColor: 'red',
        position: "top-right",
        autoClose: 2000
     
      });
    };
    }
     

   
  
  return (
    <>
      { /* <!-- Button trigger modal -->*/}
      <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="fa fa-sign-in mx-2" ></i>{t('Login')}
      </button>

      {/*<!-- Modal use bootstrap for it -->*/}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{t('Login')}</h5>
              <button type="button" className="btn-close mx-1 " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button onClick={renderFocus} className='btn btn-primary mb-2 w-100'><i className="fa fa-google me-1" ></i> {t("sign in with google")}</button>
              <button className='btn btn-primary mb-4 w-100'><i className="fa fa-twitter me-1" ></i>{t("sign in with facebook")}</button>
              
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">{t('Email address')}</label>
                  <input value={value.email} onChange={(e) => handleChange(e)} name='email' ref={refEmailInput} placeholder={t("Enter your Email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">{t("warning")}</div>
                {/*<!--for warning-->*/}
                    {errors.email && <div class="alert alert-danger" role="alert">{errors.email}</div>}              
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{t("Password")}</label>
                  <input value={value.password} onChange={(e) => handleChange(e)} name='password' type="password" className="form-control" id="exampleInputPassword1" />
                  <div id="passwordHelp" className="form-text">
                   {t("message's password")}
                  </div>
                  {errors.password && <div class="alert alert-danger" role="alert">{errors.password}</div>}              

                </div>
                <div className="mb-3 form-check">
                  <input onChange={(e) => onCheckValue(e)} name='accuracy' type="checkbox" className="form-check-input " id="exampleCheck1" disabled={accuracy} />
                  <label className="form-check-label" htmlFor="exampleCheck1">{t("Check me out")}</label>
                </div>
                <button onClick={(e) => onHandleSubmit(e)} type="submit" className="btn btn-outline-primary w-100" disabled={butt}>{t("Login")}</button>
                
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