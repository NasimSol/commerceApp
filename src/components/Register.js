import React from 'react'

function Register() {
  return (
    <>
      { /* <!-- Button trigger modal -->*/}
      <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
        <i className="fa fa-user-plus me-1" ></i>Register</button>

      {/*<!-- Modal -->*/}
      <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="signupModal" >Register</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <button className='btn btn-primary mb-4 w-100'><i className="fa fa-google me-1" ></i>sign in with google</button>
              <button className='btn btn-primary mb-4 w-100'><i className="fa fa-twitter me-1" ></i>sign in with facebook</button>
              
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Username</label>
                  <input type="text" class="form-control" id="exampleInput" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input  type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-outline-primary w-100">Register</button>
              </form>




            </div>
      
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;