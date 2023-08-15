import React from "react";

const PillComp = ({ icon, title }) => {
	console.log(`../assets/${title.toLowerCase()}-icon.svg`);
	return (
		<div className="pillComp">
			<img
				width="40"
				src={require(`../assets/${title
					.toLowerCase()
					.replaceAll(" ", "")}-icon.svg`)}
			/>
			<h3>{title}</h3>
		</div>
	);
};

export default PillComp;
