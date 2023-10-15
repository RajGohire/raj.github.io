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
				reflection reports to track our progress. Also later ported in
				Python.
			</p>

			<h3>Sokoban Intelligent Agent</h3>
			<h5></h5>
			<p>
				Agent in Python for finding the optimal solution to the Sokoban
				game within OpenAI Gym environment, using A-Star Search, Depth
				First Search and Reinforcement Learning.
			</p>

			<h3>NLP Chatbot using NLTK & scikit-learn</h3>
			<h5></h5>
			<p>
				A general-purpose chatbot capable of Intent Matching, Identity
				Management, Small Talk, Transactions, Information Retrieval and
				Game Playing.
			</p>

			<h3>AR Experience</h3>
			<h5></h5>
			<p>
				Created enhanced AR panels for information about museum pieces.
			</p>
		</section>
	);
});

export default ProjectsComp;
