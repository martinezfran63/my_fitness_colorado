import React from "react";
import { Link } from 'react-router-dom';

function HeaderComponent (){
	return (
		<ul>
			<li>
				<Link to="/"> Home </Link>
			</li>
			<li>
				<Link to="/workouts"> Workouts </Link>
			</li>
			<li>
				<Link to="/nutrition"> Nutrition </Link>
			</li>
            <li>
				<Link to="/contact"> Contact </Link>
			</li>
		</ul>
	)
}

export default HeaderComponent;