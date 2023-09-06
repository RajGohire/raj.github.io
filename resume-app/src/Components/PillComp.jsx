import React, { useState } from "react";

const PillComp = ({ title }) => {
	// console.log(`../assets/${title.toLowerCase()}-icon.svg`);
	return (
		<div className="pillInfo">
			<button className="pillComp">
				<img
					width="35"
					src={require(`../assets/${title
						.toLowerCase()
						.replaceAll(" ", "")}-icon.svg`)}
					loading="lazy"
				/>
				<p>{title}</p>
			</button>
			<div className="info">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptas adipisci quae dolorum odit sapiente in. Provident
					adipisci et laborum quas quidem nam iusto. Ipsum, totam?
					Dignissimos eius eum labore officia beatae nesciunt dicta
					deserunt blanditiis, aperiam suscipit consequatur eaque
					consequuntur!
				</p>
			</div>
		</div>
	);
};

export default PillComp;
