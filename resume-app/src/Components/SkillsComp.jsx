import React from "react";
import "./Components.css";
import PillComp from "./PillComp";

const SkillsComp = ({ skills }) => {
	console.log(skills);
	const skillsList = skills.map((title, index) => (
		<PillComp key={index} title={title} />
	));

	return (
		<section className="skillsContainer">
			<h2>My Skills</h2>
			<div className="pillList">{skillsList}</div>
		</section>
	);
};

export default SkillsComp;
