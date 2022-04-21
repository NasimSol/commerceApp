import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Skeleton from 'react-loading-skeleton'
import { Link ,useNavigate } from 'react-router-dom';

function Products() {
  const [results, setResults] = useState([]);
   
  const [filterdata, setFilterdata] = useState([]);
  const [loading, setLoading] = useState(false);

{/*receive information and set them to the result and filterdata*/}
  useEffect(() => {
    const search = async () => {
      setLoading(true);
     const {data}= await axios.get('https://fakestoreapi.com/products')
      console.log(data);
      setResults(data);
      setFilterdata(data)
      setLoading(false);
      //setFilterdata(data);{/*i do it disable because it is extra}
       
    }
    if (!results.length) {
      search();
    }
    
  }, [])
  {/*use this function for maping in result and show all of them*/ }
 
  const renderProduct = results.map((result) => (
  
       
    <div className="card p-4  text-center" key={result.id} style={{ width: '18rem' }}>
      <img src={result.image} className="card-img-top mh-100" style={{ height: '250px' }} />
      <div className="card-body ">
        <h5 className="card-title fw-bolder">{result.title.substring(0, 12)}...
        </h5>
        <p className="card-text lead fw-bolder">${result.price}</p>
        <Link to={`/products/${result.id}`} className="btn btn-outline-dark">Buy Now</Link>
      </div>
    </div>
      

  )
  );
  {/*this code is for show load in page*/}
  const showLoading = () => {
    return (
      <>
        ...loading
      </>
      
    );
  }

  {/*all buttons in page for direct category*/}
  const showButton = () => {
    return (
      
      <div className='buttons mb-4 d-flex justify-content-center '>
        {/*we can renderproduct(results) instead of setResults*/}
        <button className='btn btn-outline-dark btn-lg ' onClick={() => { setResults(filterdata) }}>ALL </button>
        <button className='btn btn-outline-dark ms-2 btn-lg' onClick={() => showproduct("men's clothing")}>men's clothing</button>
        <button className='btn btn-outline-dark ms-2 btn-lg' onClick={() => showproduct("women's clothing")}>women's clothing</button>
        <button className='btn btn-outline-dark ms-2 btn-lg' onClick={() => showproduct('jewelery')}>jewelery</button>
        <button className='btn btn-outline-dark ms-2 btn-lg' onClick={() => showproduct('electronics')}>electronics</button>
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
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
          
        <div className='row-justify-content-center'>
       
     
          {showButton()}
        
          {loading ? <div>{showLoading()}</div> : <div className=' d-flex flex-row flex-wrap gap-3'>{renderProduct}</div>}
   
    
        </div>
      </div>
    </div>
    
  );
}

export default Products;