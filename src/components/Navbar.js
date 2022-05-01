import React from 'react';
import { Link } from 'react-router-dom';
//import { useSelector } from 'react-redux';//I use connect instead of useSelector
import { connect } from 'react-redux';
import handleCart from '../redux/reducers/handleCart';
import Login from './Login';
import Register from './Register';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const Navbar = ({ handleCart }) => {
  const { t, i18n } = useTranslation();
  //const state=useSelector(state=>state.handleCart)
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    const styles='background-color:red'
    console.log('languageValue', styles  )
    i18n.changeLanguage(languageValue);
    document.body.dir = i18n.dir(languageValue);//
  };
  return (
    <div>
      <nav className="navbar navbar-expand-xxl navbar-light bg-white shadow-sm py-3">
        <div className="container"  >
          <div>
            <Link className="navbar-brand fw-bold fs-4" to="/">{t('collection')}</Link>
          
          
            {/*we use this for when shrink our screen our menu becom change to 3 lines*/}
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle mt-2"
                type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                {t('Language')}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li  ><button value='en' onClick={(e) => changeLanguageHandler(e)} className="dropdown-item" type="button">English</button></li>
                <li ><button value='fa' onClick={(e) => changeLanguageHandler(e)} className="dropdown-item" type="button">فارسی</button></li>
    
              </ul>
            </div>
          </div>
            
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/*The active class is applied to the navigation element the user is currently viewing.*/}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <motion.li whileHover={{ scale: 1.2, originX: 0 }} className="nav-item mx-4">
                <Link className="nav-link active" aria-current="page" to="/" exact>{t('Home')}</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2, originX: 0 }} className="nav-item mx-4">
                <Link className="nav-link" to="/products">{t('Products')}</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2, originX: 0 }} className="nav-item mx-4">
                <Link className="nav-link" to="/about">{t('About')}</Link>
              </motion.li>
        
              <motion.li whileHover={{ scale: 1.2, originX: 0 }} className="nav-item mx-4">
                <Link className="nav-link" to="/contact">{t('Contact')}</Link>
              </motion.li>
            </ul>
            <div className='buttons '>
              
              
              {/* <Link to='/Register' className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1" ></i>
                Register</Link> */}
              
              <Link to='/cart' className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1" ></i>
                {t('Cart')}({handleCart.length})</Link>
              <Login />
              <Register />
            </div>
     
       
        
      
          </div>
        </div>
      </nav>
    </div>
  );
}
//use handleCart for getting length of cart or numbers of product in cart
const mapStateToProps = (state) => {
  
  
  return { handleCart: state.handleCart };
 
  
}

export default connect(handleCart, {})(Navbar);