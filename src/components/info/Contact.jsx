import React from 'react'
import './Contact.css'
import '../css/Universal.css'
import Map from './Map'

function Contact() {
  return (
<>

<div className="container">
		<main className="row">
		

			<section className="col left">
				


				<div className="contactTitle">
					<h2>Get In Touch</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
				</div>

				<div className="contactInfo">
					
					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-phone"></i>
						</div>
						<div className="details">
							<span>Phone</span>
							<span>+9779866114605</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-envelope"></i>
						</div>
						<div className="details">
							<span>Email</span>
							<span>zaynhere@icloud.com</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-location-dot"></i>
						</div>
						<div className="details">
							<span>Location</span>
							<span>Nepal</span>
						</div>
					</div>

				</div>

				<div className="socialMedia">
					<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
					<a href="#"><i className="fa-brands fa-twitter"></i></a>
					<a href="#"><i className="fa-brands fa-instagram"></i></a>
					<a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
				</div>


			</section>


			<section className="col right">
				

				<form className="messageForm">
					
					<div className="inputGroup halfWidth">
                        <input type="text" name="" required="required" />
						<label>Your Name</label>
					</div>

					<div className="inputGroup halfWidth">
                        <input type="email" name="" required="required" />
						<label>Email</label>
					</div>

					<div className="inputGroup fullWidth">
                        <input type="text" name="" required="required" />
						<label>Subject</label>
					</div>

					<div className="inputGroup fullWidth">
						<textarea required="required"></textarea>
						<label>Say Something</label>
					</div>

					<div className="inputGroup fullWidth">
						<button>Send Message</button>
					</div>

				</form>

			</section>
		</main>
	</div>

	<Map></Map>
</>
  )
}

export default Contact