import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FooterComp from "./Components/FooterComp";
// import Spline from "@splinetool/react-spline";
// import DarkModeSwitch from "./Components/DarkModeSwitch";
import SkillsComp from "./Components/SkillsComp";
import AboutComp from "./Components/AboutComp";
import ProjectsComp from "./Components/ProjectsComp";
import ExperienceComp from "./Components/ExperienceComp";

const App = () => {
	// Scroll References
	const topRef = useRef(null); // Top of page
	const aboutRef = useRef(null); // About
	const projectsRef = useRef(null); // Projects
	const contactRef = useRef(null); // Contact
	const experienceRef = useRef(null); // Experience

	// Constants
	const root = document.documentElement;

	const words = ["您好!", "नमस्ते!", "Hola!", "Bonjour!", "Hello!"];

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

	const navList = [
		["About", aboutRef],
		["Experience", experienceRef],
		["Projects", projectsRef],
		["Contact", contactRef],
	].map((item, index) => (
		<li key={index}>
			<label
				onClick={() => {
					scrollToSection(item[1]);
				}}
			>
				{item[0]}
			</label>
		</li>
	));

	// Dark Mode
	const [theme, setTheme] = useState("light");

	// Mousemove
	document.addEventListener("mousemove", (evt) => {
		let x = evt.clientX / window.innerWidth;
		let y = evt.clientY / window.innerHeight;
		// console.log(evt, window.innerHeight, window.innerWidth, x, y);

		root.style.setProperty("--mouse-x", x);
		root.style.setProperty("--mouse-y", y);
	});

	// Scroll
	const [scrolled, setScrolled] = useState(false);
	const scrollToSection = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const selectedTheme = localStorage.getItem("theme");
		if (selectedTheme) {
			setTheme(selectedTheme);
		}

		let navSticky = document.querySelector(".navSticky");
		let scrollTopButton = document.querySelector(".scrollTopButton");
		document.addEventListener("scroll", () => {
			if (window.scrollY > window.innerHeight * 0.1) {
				if (!scrolled) {
					navSticky.style.top = "0px";
					scrollTopButton.style.opacity = "1";
					setScrolled(true);
				}
			} else {
				navSticky.style.top = "-100px";
				scrollTopButton.style.opacity = "0";
				setScrolled(false);
			}
		});

		let currentIndex = 0;

		setInterval(() => {
			const greetMessage = document.querySelector("#greetMessage");
			greetMessage.textContent = words[currentIndex];
			currentIndex =
				currentIndex === words.length - 1
					? currentIndex
					: currentIndex + 1;
		}, 1000 / words.length);

		setTimeout(() => {
			let greetContainer = document.querySelector(".greetContainer");
			let greetCurve = document.querySelector(".greetCurve");
			greetContainer.style.transform = `translateY(-105vh)`;
			greetCurve.setAttribute("height", "3vh");
		}, 1700);

		setInterval(() => {
			const greetContainer = document.querySelector(".greetContainer");
			greetContainer.style.display = "none";
		}, 5000);
	}, []);

	return (
		<div className="App" ref={topRef} theme={theme}>
			<h4
				style={{
					alignSelf: "center",
					position: "fixed",
					top: "5vh",
					// right: "3vw",
					backgroundColor: "red",
					color: "yellow",
				}}
			>
				-- Work in Progress --
			</h4>

			<div className="greetContainer">
				<div className="greetDiv">
					<h2>&lt;&gt;</h2>
					<h1
						style={{
							textAlign: "center",
							margin: "2vw",
						}}
						id="greetMessage"
					>
						Olá!
					</h1>
					<h2>&lt; /&gt;</h2>
				</div>
				<svg
					className="greetCurve"
					width="100%"
					height="20vh"
					viewBox="0 0 500 20"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0 L0,0 Q250,40 500,0 L500,0 Z"
						fill="var(--greeting-bg-color)"
					/>
					{/* m=starting point, l=draw line, q=draw curve, z=close path */}
				</svg>
			</div>

			<div className="homeDiv">
				<ul className="navBar">{navList}</ul>
				<ul className="navSticky">{navList}</ul>
				<h1>Raj Gohire</h1>
			</div>
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

			<AboutComp ref={aboutRef} />
			<ExperienceComp ref={experienceRef} />
			<ProjectsComp ref={projectsRef} />
			{/* <SkillsComp ref={contactRef} /> */}
			<SkillsComp skills={skillsList} />

			<div
				className="scrollTopButton"
				onClick={() => {
					scrollToSection(topRef);
				}}
			>
				<svg
					className="arrow"
					width="100%"
					height="100%"
					viewBox="-8.4 -8.4 40.80 40.80"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0">
						<path
							transform="translate(-8.4, -8.4), scale(1.275)"
							d="M16,29.981779307127C20.036651046328274,29.78605912004725,23.31361802183267,26.994688208857717,25.6672703022602,23.709390809185663C27.85154346886468,20.660517781469068,28.599067521924432,16.965059644368747,27.974945246776215,13.266796891243986C27.294248142531934,9.233297612294722,25.820218747308356,5.030712943417237,22.195205277384826,3.1355236853525543C18.46155871528264,1.1835400812597767,13.980678135752871,2.097589679026822,10.211406001998974,3.9798607070806593C6.518136504152325,5.824178105216707,3.5633747387539683,8.92779688514521,2.571542438650546,12.935042190496919C1.5573202405364115,17.03274816513857,2.468903477332334,21.391469662128316,5.081106393379779,24.70752708731784C7.712624991542823,28.04810477879623,11.752420079604637,30.187726545844146,16,29.981779307127"
							fill="var(--nav-bg-color)"
							strokeWidth="0"
						></path>
					</g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M19 15L12 9L5 15"
							stroke="var(--nav-font-color)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</g>
				</svg>
			</div>
			<footer>
				<p>npm run deploy (from master)</p>
				<FooterComp />
			</footer>
		</div>
	);
};

export default App;
