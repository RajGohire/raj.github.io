import React, { forwardRef } from "react";
import "./Components.css";
import PillComp from "./PillComp";

const SkillsComp = forwardRef(({ skills }, ref) => {
	// console.log(skills);
	const skillsList = skills.map((title, index) => (
		<PillComp key={index} title={title} />
	));

	return (
		<section className="skillsDiv" ref={ref}>
			<h2>My Skills</h2>
			<div className="pillsContainer">{skillsList}</div>
		</section>
	);
});

export default SkillsComp;
