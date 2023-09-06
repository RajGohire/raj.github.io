import React, { forwardRef } from "react";
import "./Components.css";

const ProjectsComp = forwardRef(({}, ref) => {
	return (
		<section className="projectsDiv" ref={ref}>
			<h1>Projects</h1>
			<h3>
				Recreating Atari's Asteroids Game | Year 2 Software Engineering
				Group Project
			</h3>
			<h5>Sep 2021 - Jan 2022 | University of Nottingham</h5>
			<p>
				Team leader for Software Engineering Group Project - Recreated
				the Atari's Asteroids game using vector graphics in Linux using
				SDL2 library for C - following Agile/Scrum methodology. Our
				client for the project were the university. Version control for
				the project was carried out via Git with intermediate and final
				reflection reports to track our progress.
			</p>
		</section>
	);
});

export default ProjectsComp;
