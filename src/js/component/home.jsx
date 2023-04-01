import React from "react";

import Watch from "./watch.jsx";

//include images into your bundle

//create your first component

const Home = ({segundo1, segundo2, minuto1, minuto2, hora}) => {
	return (
		<>
			<Watch 
				segundo1={segundo1} 
				segundo2={segundo2} 
				minuto1={minuto1} 
				minuto2={minuto2} 
				hora={hora}
			/>
		</>
	);
};

export default Home;