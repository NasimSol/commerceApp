import { t } from 'i18next';
import React from 'react'
import { Link } from 'react-router-dom';
import about from '../assets/7d77cca583e747883ce9c1e6871fcd33.webp';
import { useTranslation } from 'react-i18next';
function About() {
  const { t } = useTranslation();
  return (
    <div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>{t('about Us')}</h1>
            <p className='lead' style={{ fontFamily: 'Send Flowers', textAlign: 'justify' }}>{t('text')}</p>
            <Link to='/contact' className="btn btn-outline-dark">{t('contact')}</Link>
           
          </div>
           <div className='col-md-6'>
              <img src={about} className="mx-4 my-4" alt='about us' width={'120%'}/>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default About;