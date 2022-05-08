import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

function Register() {
  const { t } = useTranslation();
  const [butt, setButt] = useState(true);


//use formik in this component
   const formik = useFormik({
     initialValues: {
       username : '',
       password: '',
       email: '',
     },

 validationSchema: Yup.object({
       username: Yup.string()
         .min(8,t('error write'))
         .required(t('required')),
       password: Yup.string()
       .required(t('required'))
        
       .matches(
      /^(?=.*[0-9])(?=.{8,}).*$/,t('errorregister')),
   email: Yup.string().email(t('invalid email address')).required(t('required'))
   
     }),

     onSubmit: (values) => {
      
    return toast.success(t('Success register!'), {
        backgroundColor: 'red',
        position: "top-right",
        autoClose: 2000
     
      });
    }
     
   });
  console.log(formik.errors)
  const err = Object.keys(formik.errors).length;

  
 const onCheckValue = (e) => setButt(!butt);

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
              
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">{t('username')}</label>
                  <input name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoFocus type="text"
                    className="form-control"
                    id="exampleInput" />
                  
                  {formik.touched.username&&formik.errors.username? <div className="alert alert-danger" role="alert">{formik.errors.username}</div>:null}
                </div>
                  <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">{t('Email address')}</label>
                  <input name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email" className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" />
                   {formik.touched.email&& formik.errors.email ? <div className="alert alert-danger" role="alert">{formik.errors.email}</div>:null}
                  <div id="emailHelp" className="form-text">{t('warning')}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{t('password')}</label>
                  <input name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1" />
                  {formik.touched.password && formik.errors.password ? <div className="alert alert-danger" role="alert">{formik.errors.password}</div> : null}
                   <div id="emailHelp" className="form-text">{t("message's password")}</div> 
                </div>
                <div className="mb-3 form-check">
                  <input onClick={(e)=>onCheckValue(e)} type="checkbox" className="form-check-input" id="exampleCheck1" disabled={!err? false:true} />
                  <label className="form-check-label" htmlFor="exampleCheck1">{t('check me out')}</label>
                </div>
                <button disabled={butt}  type="submit" className="btn btn-outline-primary w-100" onClick={formik.handleSubmit}>{t('register')}</button>
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
};

export default Register;