import React, { forwardRef } from "react";
import "./Components.css";

const ExperienceComp = forwardRef(({}, ref) => {
	return (
		<section className="experienceDiv" ref={ref}>
			<h1>Experience</h1>
			<h3>Software Development Engineer I | Tesco</h3>
			<h5>(April 2023 – Present)</h5>
			<p>
				Contributed to the backend Sales Tax team to enhance the
				accuracy and efficiency of customer transaction tax calculations
				in the quote lifecycle.
			</p>
			<ul>
				<li>
					Pioneered a Tesco platform as part of an introduction
					project, inspiring customers with innovative ways to
					repurpose packaging materials into crafts through engaging
					tutorials.
				</li>
				<li>
					Collaborated with the team to seamlessly deploy code into
					the customer-facing live environment.
				</li>
				<li>
					Proactively mastered an external codebase, to enhance an
					internal tool, optimizing the efficiency of alert management
					and support processes.
				</li>
				<li>
					Revamped codebase by addressing technical debts, identifying
					areas for improvement, and implementing enhancements.
				</li>
			</ul>
			<small>
				Skills: Java, Micronaut, Kafka, Couchbase, Splunk, Git, Gradle,
				Docker
			</small>
		</section>
	);
});

export default ExperienceComp;
