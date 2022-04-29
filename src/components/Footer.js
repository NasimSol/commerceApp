import React from 'react'

const footer = () => {
  return (
    
      <footer className="footer-area bg-f bg-secondary">
        <hr/>
		<div className="container ">
			<div className="row">
				<div className="col-lg-3 col-md-6">
            <h3>La COLLECTION</h3>Name
            <p><span className="text-color">Monday: </span>Closed</p>
					<p><span className="text-color">Tue-Wed :</span> 9:Am - 10PM</p>
					<p><span className="text-color">Thu-Fri :</span> 9:Am - 10PM</p>
					<p>about us</p>
					
				</div>
				<div className="col-lg-3 col-md-6">
					<h3>Opening hours</h3>
					<p><span className="text-color">Monday: </span>Closed</p>
					<p><span className="text-color">Tue-Wed :</span> 9:Am - 10PM</p>
					<p><span className="text-color">Thu-Fri :</span> 9:Am - 10PM</p>
					<p><span className="text-color">Sat-Sun :</span> 5:PM - 10PM</p>
				</div>
				<div className="col-lg-3 col-md-6">
					<h3>Contact</h3>
					<p className="lead"><i className="fa fa-home" aria-hidden="true"></i>Iran,Tehran</p>
					<p className="lead"><i className="fa fa-phone" aria-hidden="true"></i>+01234567 </p>
					<p><i className="fa fa-envelope" aria-hidden="true"></i><a className='text-dark' href="#">info@admin.com</a></p>
				</div>
				<div className="col-lg-3 col-md-6">
					<h3>Latest discounts</h3>
					<div className="subscribe_form">
						<form className="subscribe_form">
							<input name="EMAIL" id="subs-email" className="form_input" placeholder="Email Address..." type="email"/>
							<button type="submit" className="submit">SUBSCRIBE</button>
							<div className="clearfix"></div>
						</form>
					</div>
					<ul className="list-inline f-social my-5">
						<li className="list-inline-item"><a href="#"><i className="fa fa-facebook text-white fa-2x mx-2" aria-hidden="true"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-white fa-2x mx-2" aria-hidden="true"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-linkedin  text-white fa-2x mx-2" aria-hidden="true"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-google-plus text-white fa-2x mx-2" aria-hidden="true"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-instagram  text-white fa-2x mx-2" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
		
		<div className="copyright ">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<p className="company-name">All Rights Reserved. &copy; 2018 <a href="#" className='text-white'>LA COLLECTION</a> Design By : nasim</p>
					</div>
				</div>
			</div>
		</div>
		
	</footer>
  )
}

export default footer;