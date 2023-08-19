import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import FooterComp from "./Components/FooterComp";
// import Spline from "@splinetool/react-spline";
// import DarkModeSwitch from "./Components/DarkModeSwitch";
import SkillsComp from "./Components/SkillsComp";

const App = () => {
	const root = document.documentElement;

	const skillsList = [
		"Java",
		"JavaScript",
		"Python",
		"React JS",
		"HTML 5",
		"CSS",
		"MongoDB",
		"Splunk",
		"Node JS",
		"Github",
		"Git",
		"Bootstrap",
		"Express JS",
		// "C",
		// "Micronaut",
	];

	// Scroll to Top
	const topRef = useRef(null);

	// Dark Mode
	const [theme, setTheme] = React.useState("light");

	// Mousemove
	document.addEventListener("mousemove", (evt) => {
		let x = evt.clientX / window.innerWidth;
		let y = evt.clientY / window.innerHeight;
		// console.log(evt, window.innerHeight, window.innerWidth, x, y);

		root.style.setProperty("--mouse-x", x);
		root.style.setProperty("--mouse-y", y);
	});

	useEffect(() => {
		const selectedTheme = localStorage.getItem("theme");
		if (selectedTheme) {
			setTheme(selectedTheme);
		}
	}, []);

	return (
		<div className="App" ref={topRef} theme={theme}>
			<header></header>
			<body>
				<button
					className="toggleTheme"
					onClick={() => {
						const newTheme = theme === "light" ? "dark" : "light";
						localStorage.setItem("theme", newTheme);
						setTheme(newTheme);
					}}
				>
					Toggle Theme
				</button>

				<h1>Raj Gohire</h1>

				<SkillsComp skills={skillsList} />

				<button
					onClick={() => {
						window.scrollTo({
							top: topRef.current.offsetTop,
							behavior: "smooth",
						});
					}}
				>
					Back to top
				</button>
			</body>
			<footer>
				<p>npm run deploy (from master)</p>
				<FooterComp />
			</footer>
		</div>
	);
};

export default App;
