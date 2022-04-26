import React from 'react';
import { Link } from 'react-router-dom';
//import { useSelector } from 'react-redux';//I use connect instead of useSelector
import { connect } from 'react-redux';
import handleCart from '../redux/reducers/handleCart';
import Login from './Login';
import Register from './Register';
import { motion } from "framer-motion";


const Navbar = ({handleCart}) => {
  //const state=useSelector(state=>state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container"  >
          <Link className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</Link>
          {/*we use this for when shrink our screen our menu becom change to 3 lines*/}
          <button className="navbar-toggler" style={{background:'red'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/*The active class is applied to the navigation element the user is currently viewing.*/}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <motion.li whileHover={{scale:1.2, originX:0}} className="nav-item mx-4">
                <Link  className="nav-link active" aria-current="page" to="/" exact>Home</Link>
              </motion.li>
              <motion.li whileHover={{scale:1.2, originX:0}}  className="nav-item mx-4">
                <Link className="nav-link" to="/products">Products</Link>
              </motion.li>
              <motion.li whileHover={{scale:1.2, originX:0}}  className="nav-item mx-4">
                <Link className="nav-link" to="/about">About</Link>
              </motion.li>
        
              <motion.li whileHover={{scale:1.2, originX:0}}  className="nav-item mx-4">
                <Link className="nav-link" to="/contact">Contact</Link>
              </motion.li>
            </ul>
            <div className='buttons '>
              
              
              {/* <Link to='/Register' className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1" ></i>
                Register</Link> */}
              
              <Link to='/cart' className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1" ></i>
                Cart({handleCart.length})</Link>
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