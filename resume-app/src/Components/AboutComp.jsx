import React, { forwardRef } from "react";
import "./Components.css";

const AboutComp = forwardRef(({}, ref) => {
	return (
		<section className="aboutDiv" ref={ref}>
			<h1>About</h1>
			<p>
				I am passionate about exploring the latest advancements in
				Artificial Intelligence and its versatile applications across
				industries. I am always eager and motivated to seek new
				opportunities to expand my horizons, challenge myself, and
				contribute to the development of AI.
				<br />
				<br />
				A Computer Science with Artificial Intelligence graduate from
				the University of Nottingham with a keen interest in Artificial
				Intelligence and Machine Learning. With a fascination for
				technology and its versatile applications in various fields, I
				am dedicated to staying up-to-date with the latest advancements.
				My patient and persistent nature has helped me achieve many
				successes in the past and allows me to remain driven toward
				finding effective solutions. Fluent in English and Hindi, I was
				born and raised in India and Singapore.
				<br />
				<br />
				As a quick learner, I am passionate about expanding my knowledge
				of Artificial Intelligence, particularly in the areas of
				Self-driving and Deep Neural Networks. In my free time, I enjoy
				pursuing photography as a hobby.
				<br />
				<br />
				In the future, I aspire to pursue a Master's degree and/or MBA
				to further enhance my skills and contribute more effectively to
				the development of Artificial Intelligence.
			</p>
		</section>
	);
});

export default AboutComp;
