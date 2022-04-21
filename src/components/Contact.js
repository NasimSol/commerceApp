import React from 'react';
import con from "../assets/graphic-cartoon-character-contact-us-vector-34969776.webp";
{/*use form for mail and name*/}

//material ui //styled component

//semantic html

function Contact() {
  return (
    <div className='container mt-4'>
      <div className='row ' >
        <h1 style={{ textAlign: 'center' }}>Have Some Questions?</h1>
        <hr />
      </div>
      <div className=' d-flex flex-row justify-content-between mt-5 '>
        <div className='me-5'>
          <img src={con} className="mx-4 my-2" alt='about us' width={'100%'} height={'90%'} />
        </div>
        <div className='ms-5 my-4' style={{ width: '80%', height: '200%' }} >
          <div className=" my-4">
            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nasim sol" />
          </div>
          <div className="my-4">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
          </div>
          <div className="my-4">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>
          <div class="col-auto">
            <button type="submit" className="btn btn-primary my-4">Send Massage</button>
          </div>
        </div>
        
      </div>
         
    </div>
  );
}

export default Contact;