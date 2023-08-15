import React from "react";

const PillComp = ({ icon, title }) => {
	console.log(`../assets/${title.toLowerCase()}-icon.svg`);
	return (
		<div className="pillComp">
			<img
				width="35"
				src={require(`../assets/${title
					.toLowerCase()
					.replaceAll(" ", "")}-icon.svg`)}
				loading="lazy"
			/>
			<p>{title}</p>
		</div>
	);
};

export default PillComp;
