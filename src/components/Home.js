import React from 'react';
import picslide1 from '../assets/71YXzeOuslL._AC_UY879_.jpg';
import picslide2 from '../assets/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg';
import picslide3  from '../assets/81QpkIctqPL._AC_SX679_.jpg';
import Products from './Products';
import { useTranslation } from "react-i18next";



function Home() {
  const { t } = useTranslation();
  return (
   <div className='hero'>
     <div className="card border-0 text-white">

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          {/*button in bottom of image for move slides;*/}
         <div className="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          {/*carousel for sliding somthing*/}

      <div className="carousel-inner">
            <div className="carousel-item active">
              {/*by adding this class we can bring this to center in page*/}
          <img src={picslide1} className="rounded mx-auto d-block float-left" alt="back" height={'550px'} style={{backgroundImage:'cover'}}  /> 
        </div>
        <div className="carousel-item">
          <img src={picslide2} className="rounded mx-auto d-block float-left" alt="back" height={'550px'} style={{backgroundImage:'cover'}} /> 
        </div>
        <div className="carousel-item">
          <img src={picslide3} className="rounded mx-auto d-block float-left" alt="back" height={'550px'}  style={{backgroundImage:'cover'}}/> 
        </div>
          </div>
          
          {/*button for move slides  which located in aside*/}
      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'gray'}}></span>
        <span className="visually-hidden" >Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'gray'}}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

      {/*text in site*/}
      <div className="card-img-overlay d-flex align-items-center ">
          <div className="container" style={{color:'black'}}>
            <h5 className="card-title display-3 fw-bolder mb-0" >{t('massageimage')}</h5>
            <p className="card-text lead fs-3 fw-bolder">{t('alltrends')}</p>
          <div />
      </div>
     </div>
      
    </div>
      <Products />
    
   
   
    
     
   </div>
  );
}

export default Home;