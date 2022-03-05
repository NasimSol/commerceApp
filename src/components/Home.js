import React from 'react';
import  back  from '../assets/1022-6000x3376.jpg';
import Products from './Products';

function Home() {
  return (
    <div className='hero'>
      <div className="card border-0 text-white">
        <img src={back} className="card-img" alt="back" height={'550px'} />
      <div className="card-img-overlay d-flex 
        align-items-center">
           <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-3">CHECK OUT ALL TRENDS</p>
          <div />
        </div>
      </div>
      
    </div>
      <Products />
      </div>
  );
}

export default Home