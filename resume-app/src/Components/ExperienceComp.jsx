import "./Components.css";

const ExperienceComp = ({ exp }) => {
	return (
		<div className="experienceComp">
			<h3>
				{exp.title} | {exp.employer}
			</h3>
			<h5>{exp.duration}</h5>
			<p>{exp.description}</p>
			<ul>
				{exp.achievements?.map((task, index) => (
					<li key={index}>{task}</li>
				))}
			</ul>
			{exp.skills.length > 0 && (
				<small>Skills: {exp.skills.join(", ")}</small>
			)}
		</div>
	);
};

export default ExperienceComp;
