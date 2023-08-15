import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import FooterComp from "./Components/FooterComp";
import Spline from "@splinetool/react-spline";
import DarkModeSwitch from "./Components/DarkModeSwitch";
import SkillsComp from "./Components/SkillsComp";

const App = () => {
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
	const [isDarkMode, setDarkMode] = React.useState(false);

	const toggleDarkMode = (enabled) => {
		setDarkMode(enabled);
	};

	// Mousemove
	const root = document.documentElement;

	document.addEventListener("mousemove", (evt) => {
		let x = evt.clientX / window.innerWidth;
		let y = evt.clientY / window.innerHeight;
		// console.log(evt, window.innerHeight, window.innerWidth, x, y);

		root.style.setProperty("--mouse-x", x);
		root.style.setProperty("--mouse-y", y);
	});

	useEffect(() => {}, []);

	return (
		<div className="App" ref={topRef}>
			<header></header>
			<body>
				<DarkModeSwitch
					style={{ marginBottom: "2rem" }}
					enabled={isDarkMode}
					onChange={toggleDarkMode}
					size={120}
				/>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<SkillsComp skills={skillsList} />
				<img src={logo} className="App-logo" alt="logo" />
				<img src={logo} className="App-logo" alt="logo" />
				<img src={logo} className="App-logo" alt="logo" />
				<img src={logo} className="App-logo" alt="logo" />

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
				<FooterComp />
			</footer>
		</div>
	);
};

export default App;
