import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function Register() {
  const { t } = useTranslation();
  const [entrance, setEntrance] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [errors, setErrors] = useState({});//variable for errors;
  const [accuracy, setAccuracy] = useState(true);//for able checkbox
  const [butt, setButt] = useState(true);
  
  //simple way for validate check length of entrance each input and then them don't exist retun errros
  //There are no restrictions
 const onCheckValue = (e) => setButt(!butt);


  const validate = () => {
    const err = {}
    if (entrance.username === '') { err.username = t('errorusername') }
    if (entrance.password === '') { err.password = t('errorpassword') }
    if (entrance.email === '') { err.email = t('erroremail') }
    

    return Object.keys(err) === 0 ?null  : err;
    
  }
  
  const handleSubmit = (e) => {
    //e.preventDefault();
    
    
    setErrors(validate());
   
    if (errors) return;//if exist error don't submit it;
    console.log('submitted');
    
    setAccuracy(false);
    
    
  }
   

  const handleChange = (e) => {
    setEntrance({
      ...entrance,
      [e.target.name]: e.target.value
    });
    if (entrance.email !== '' && entrance.username !== '' && entrance.password.length ===8&&entrance.password!=='' ) {
      setAccuracy(!accuracy)
    }
  };

  return (
    <>
      { /* <!-- Button trigger modal -->*/}
      <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
        <i className="fa fa-user-plus mx-2" ></i>{t('register')}</button>

      {/*<!-- Modal -->*/}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModal" >{t('register')}</h5>
              <button type="button" className="btn-close mx-1" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className='btn btn-primary mb-4 w-100'><i className="fa fa-google mx-1" ></i>{t('sign in with google')}</button>
              <button className='btn btn-primary mb-4 w-100'><i className="fa fa-twitter mx-1" ></i>{t('sign in with facebook')}</button>
              
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">{t('username')}</label>
                  <input name='username' value={entrance.username} onChange={(e)=>handleChange(e)} autoFocus type="text" className="form-control" id="exampleInput" />
                  
                  {errors.username && <div class="alert alert-danger" role="alert">{errors.username}</div>}
                </div>
                  <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">{t('Email address')}</label>
                  <input name='email' value={entrance.email} onChange={(e)=>handleChange(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   {errors.email && <div class="alert alert-danger" role="alert">{errors.email}</div>}
                  <div id="emailHelp" className="form-text">{t('warning')}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{t('password')}</label>
                  <input name='password' value={entrance.password} onChange={(e)=>handleChange(e)} type="password" className="form-control" id="exampleInputPassword1" />
                  {errors.email && <div class="alert alert-danger" role="alert">{errors.email}</div>}
                </div>
                <div className="mb-3 form-check">
                  <input onClick={(e)=>onCheckValue(e)} type="checkbox" className="form-check-input" id="exampleCheck1" disabled={accuracy} />
                  <label className="form-check-label" htmlFor="exampleCheck1">{t('check me out')}</label>
                </div>
                <button disabled={butt}  type="submit" className="btn btn-outline-primary w-100" onClick={e=>handleSubmit(e)}>{t('register')}</button>
              </form>




            </div>
      
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;