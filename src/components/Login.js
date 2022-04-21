import React,{ useRef,useEffect} from 'react';

import "bootstrap/dist/js/bootstrap.min.js";{/*i dont know why i add this to my project it works*/}

function Login() {
   const refEmailInput = useRef(null);
  const renderFocus = () => {
    
      refEmailInput.current.focus();
  };
 
  return (
    <>
      { /* <!-- Button trigger modal -->*/}
      <button  type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="fa fa-sign-in me-1" ></i>Login
      </button>

      {/*<!-- Modal use bootstrap for it -->*/}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <button onClick={renderFocus} className='btn btn-primary mb-2 w-100'><i className="fa fa-google me-1" ></i>sign in with google</button>
              <button className='btn btn-primary mb-4 w-100'><i className="fa fa-twitter me-1" ></i>sign in with facwbook</button>
              
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input ref={refEmailInput} placeholder='Enter your Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input  autofocus type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input autofocus type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-outline-primary w-100">Submit</button>
              </form>




            </div>
      
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;