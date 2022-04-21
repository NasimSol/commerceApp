import React, { useEffect, useState } from 'react';
//import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { useParams, Link, NavLink } from "react-router-dom";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import { addCart,deleteProduct } from '../redux/actions';



function Product(props) {

  const { id } = useParams();//this name here shoul be exact with name in Route in App//
  const [sequence, setSquence] = useState([]);
  const [cartBtn, setCartBtn] = useState('Add to cart')
  
  const [load, setLoad] = useState(false);//use this for show loading in screen
 // const dispatch = useDispatch(); 

  const addProduct = (sequence) => {
   
    if (cartBtn === 'Add to cart') {
      props.addCart(sequence);//we want add product to cart with actions in redux
      setCartBtn('Delete from cart');// use this for change writting in button
    } else {
      props.deleteProduct(sequence);
      setCartBtn('Add to cart'); 
    };
  }
  // better way for this is use redux instead of get information again
    useEffect(() => {
      const search = async () => {
        setLoad(true);
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
           
        setSquence(data);
    
        setLoad(false);
     
     
      };
        if (!sequence.length) {
            search();
    
      };
    
    }, []);
     const showLoading = () => {
       return (
         <>
           ...loading
         </>
      
       );
      
      
          
    }
    const rendering = () => {
      return (
        <>
            
             
          <div className="row g-10">
            <div className="col-md-4">
              <img src={sequence.image} className="img-fluid rounded-start m-2" style={{ width: '90%' }} />
            </div>
            <div className="col-md-8" style={{ lineHeight: 2.5 }}>
              <div className="card-body">
                <h4 className="card-text text-uppercase text-black-50 mb-3" style={{ fontSize: '1.2rem' }}>{sequence.category}</h4>
                <h2 className="card-title fw-bold mb-1 " style={{ fontSize: '1.8rem' }}>{sequence.title}</h2>
                    
                <p className="card-text mb-4">Rating {sequence.rating && sequence.rating.rate} <i className='fa fa-star'></i></p>
                <h3 className='fw-bold my-6'>${sequence.price}</h3>
                <p className='lead'>{sequence.description}</p>
                <button className='btn btn-outline-dark ms-2 ' onClick={() => addProduct(sequence)} >{cartBtn}</button>
                 
                <NavLink to={'/cart'} className='btn btn-dark ms-2'>Go to cart</NavLink>
              </div>
            </div>
          </div>
            
        </>
      );
     
   }
    
  return (
    
    <div className='container py-5'>
      <div className='row py-5 '>
        {load ? <div>{showLoading()}</div> : <div>{rendering()}</div>}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { handleCart: state.handleCart };
 };
export default connect(mapStateToProps,{addCart , deleteProduct})(Product);