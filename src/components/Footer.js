import React from 'react'

import twitter from '../assets/twitter.png'
import face from '../assets/face.png'

const Footer = () => {
	return (
		<div className="container" height="40">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<span className="text-muted">&copy; 2021 Company, Inc</span>
				</div>

				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li className="ms-3"><a className="text-muted" href="https://www.facebook.com"><img src={face} className="bi" width="30" height="30" /></a></li>
					{/* <li className="ms-3"><a className="text-muted" href="https://www.twitter.com"><img src={twitter} classNameName="bi" width="40" height="40" /></a></li> */}
				</ul>
			</footer>
		</div>
	);
}

export default Footer;