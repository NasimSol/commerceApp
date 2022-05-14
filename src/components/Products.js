import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
//import Skeleton from 'react-loading-skeleton';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Products() {
  const { t } = useTranslation();
  const [results, setResults] = useState([]);
  const navigate = useNavigate (); 
  const [filterdata, setFilterdata] = useState([]);
  const [loading, setLoading] = useState(false);
  //variable for scale when mouse over on it
  const [hover, setHover] = useState(false);
  console.log(hover);
{/*receive information and set them to the result and filterdata*/}
  useEffect(() => {
    const search = async () => {
      setLoading(true);
     const response= await axios.get('https://fakestoreapi.com/products')
      console.log(response);
      setResults(response.data);
      setFilterdata(response.data)
      setLoading(false);
      console.log(response.status);
      //setFilterdata(data);{/*i do it disable because it is extra}
       
    }
    if (!results.length) {
      search();
    }
    
  }, [])
  {/*use this function for maping in result and show all of them*/ }
  
 
  const renderProduct = results.map((result) => (
   <motion.div className="card p-5 text-center" key={result.id}
      onClick={(e) => navigate(`/products/${result.id}`)}//use for navigation  when click on it 
      style={{ width: '18rem',  cursor:'pointer'}}
      whileHover={{
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
       
      }}
      >
      <img  src={result.image} className="card-img-top mh-100" style={{ height: '250px' }} />
      <div className="card-body ">
        <h5 className="card-title fw-bolder">{result.title.substring(0, 12)}...
        </h5>
        <p className="card-text lead fw-bolder">${result.price}</p>
        <Link to={`/products/${result.id}`} className="btn btn-outline-dark">{t('buy')}</Link>
      </div>
    </motion.div>
      

  )
  );
  {/*this code is for show load in page*/}
  const showLoading = () => {
    return (
      <div className="d-flex align-items-center primary">
        <strong>{t('Loading...')}</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
      
    );
  }

  {/*all buttons in page for direct category*/}
  const showButton = () => {
    return (
      
      <div className='buttons mb-4 d-flex justify-content-center '>
        {/* comment: we can renderproduct(results) instead of setResults*/}
        <motion.button whileHover={{ scale: 1.2 }} className='btn btn-outline-dark ms-2 btn-lg ' onClick={() => { setResults(filterdata) }}>{t('all')}</motion.button> 
        <motion.button whileHover={{scale:1.2}} className='btn btn-outline-dark ms-2 btn-lg' onClick={() => showproduct("men's clothing")}>{t('men')}</motion.button>
        <motion.button whileHover={{ scale: 1.2 }} className='btn btn-outline-dark ms-2 btn-lg' onClick={() => showproduct("women's clothing")}>{t('women')}</motion.button>
        <motion.button whileHover={{ scale: 1.2 }} className='btn btn-outline-dark ms-2 btn-lg' onClick={() => showproduct('jewelery')}>{t('jewelery')}</motion.button>
        <motion.button whileHover={{ scale: 1.2 }} className='btn btn-outline-dark ms-2 btn-lg' onClick={() => showproduct('electronics')}>{t('electronics')}</motion.button>
      </div>
    );
  };
  {/*use this function for filtering product and isolate them from each others*/}
  const showproduct = (cat) => {
  {/*after change this results we can should have main data*/}
    const updatelist = filterdata.filter((x) => x.category === cat)
    setResults(updatelist);
   
   
  };
      
      
   
  


  return (
    <div className='text-align-center'>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">{t('latest')}</h1>
            <hr />
          </div>
        </div>
          
        <div className='row-justify-content-center'>
       
     
          {showButton()}
        
          {loading ? <div>{showLoading()}</div> : <div className=' d-flex flex-row justify-content-center flex-wrap gap-3'>{renderProduct}</div>}
   
    
        </div>
      </div>
    </div>
    
  );
}

export default Products;