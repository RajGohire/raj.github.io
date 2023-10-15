import React, { useEffect, useRef, useState } from "react";
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
	const experienceRef = useRef(null); // Experience
	const projectsRef = useRef(null); // Projects
	const skillsRef = useRef(null); // Skills
	// const contactRef = useRef(null); // Contact

	// Constants
	const root = document.documentElement;

	const words = ["您好!", "नमस्ते!", "Hola!", "Bonjour!", "Hello!"];

	// Dark Mode
	const [theme, setTheme] = useState("light");

	const navList = [
		["About", aboutRef],
		["Experience", experienceRef],
		["Projects", projectsRef],
		["Skills", skillsRef],
		// ["Contact", contactRef],
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

	const experienceList = [
		{
			title: "Software Development Engineer I",
			employer: "Digital Futures / Tesco",
			duration: "(April 2023 – Present)",
			description:
				"Employed by Digital Futures, contractor at Tesco. Contributed to the backend Sales Tax team to enhance the accuracy and efficiency of customer transaction tax calculations in the quote lifecycle.",
			achievements: [
				"Pioneered a Tesco platform as part of an introduction project, inspiring customers with innovative ways to repurpose packaging materials into crafts through engaging tutorials.",
				"Collaborated with the team to seamlessly deploy code into the customer-facing live environment.",
				"Proactively mastered an external codebase, to enhance an internal tool, optimizing the efficiency of alert management and support processes.",
				"Revamped codebase by addressing technical debts, identifying areas for improvement, and implementing enhancements.",
			],
			skills: [
				"Java",
				"Micronaut",
				"Kafka",
				"Couchbase",
				"Splunk",
				"Git",
				"Gradle",
				"Docker",
			],
		},
		{
			title: "Software Engineer Trainee",
			employer: "Digital Futures",
			duration: "(January 2023 – March 2023)",
			description:
				"Led full-stack development projects, creating innovative web solutions. Learnt the MERN stack and Java OOP.",
			achievements: [
				"Successfully undertook the Oracle Certified Foundations Associate, Java (1Z0-811).",
				"Led a group project to construct a full-stack resume website with user authentication.",
				"Engineered a full-stack Twitter clone, enabling users to view and post messages online.",
				"Created a front-end news summary website utilizing the Guardian API, streamlining news consumption.",
			],
			skills: [
				"Java",
				"MongoDB",
				"Express.js",
				"React.js",
				"Node.js",
				"Mongoose",
				"HTML",
				"JavaScript",
				"Bootstrap",
				"CSS",
				"Mocha",
				"Chai.js",
				"Git",
			],
		},
		{
			title: "Software Engineer",
			employer: "Acting Collective",
			duration: "(September 2021 – June 2022)",
			description:
				"Collaborated with a team of five, as a part-time full-stack software engineer, in a student-run start-up to develop, debug, and test a web-based platform.",
			achievements: [],
			skills: ["HTML", "JavaScript", "CSS", "Git", "Trello"],
		},
		{
			title: "Data Scientist",
			employer: "EliteFit.AI",
			duration: "(March 2021 – August 2021)",
			description:
				"Streamlined back-end operations and integrated human pose-estimation software to enhance workout performance and efficiency.",
			achievements: [
				"Streamlined the accuracy and efficiency of the workflow by developing an automated system for generating body key-points using multiple human pose-estimation frameworks.",
				"Slashed review time by 60% by automating and managing the review process for trainers' workouts.",
				"Streamlined testing by 150% by coding dynamic tests for session workouts.",
				"Boosted user experience by integrating real-time prescriptive feedback and rep counter for workouts.",
				"Refined and tuned the pose-detection and scoring model.",
				"Demonstrated adaptability and teamwork skills, integrating smoothly into the workplace culture, and collaborating efficiently with the close agile team to resolve problems.",
			],
			skills: [
				"Python",
				"PostgreSQL",
				"AWS",
				"MediaPipe",
				"BlazePose",
				"OpenPose",
				"PoseNet",
				"Git",
				"NumPy",
				"Pandas",
			],
		},
		{
			title: "Technology Internship Experience",
			employer: "Bright Network",
			duration: "(June 2020 – July 2020)",
			description:
				"The internship entailed a work project to simulate real-life tasks (Project Managing the development of Facial Recognition software in a banking app) and talks by employers such as Accenture, Amazon, Google, and Vodafone.",
			ahievements: ["https://tinyurl.com/4y6zzs55", ""],
			skills: [],
		},
	];

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
		let scrollDownPrompt = document.querySelector(".scrollDownPrompt");
		document.addEventListener("scroll", () => {
			if (window.scrollY > window.innerHeight * 0.8) {
				if (!scrolled) {
					navSticky.style.top = "0px";
					scrollTopButton.style.opacity = "1";
					setScrolled(true);
				}
				scrollDownPrompt.style.visibility = "hidden";
			} else {
				navSticky.style.top = "-100px";
				scrollTopButton.style.opacity = "0";
				setScrolled(false);
				scrollDownPrompt.style.visibility = "visible";
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
					position: "absolute",
					top: "5vh",
					// right: "3vw",
					backgroundColor: "grey",
					color: "white",
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
			{/* <Spline
				id="avatar"
				style={{
					position: "absolute",
				}}
				scene="https://prod.spline.design/dGW-moCpQPrqCRfs/scene.splinecode"
			/> */}
			<div className="hero">
				<ul className="navBar">{navList}</ul>
				<ul className="navSticky">{navList}</ul>
				<div id="navContainer">
					<h2>r g</h2>
					<button
						id="toggleTheme"
						title="Toggle Theme"
						onClick={() => {
							const newTheme =
								theme === "light" ? "dark" : "light";
							localStorage.setItem("theme", newTheme);
							setTheme(newTheme);
						}}
					>
						{/* {theme} */}
						<svg
							class="sun-and-moon"
							aria-hidden="true"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<circle
								class="sun"
								cx="12"
								cy="12"
								r="6"
								mask="url(#moon-mask)"
								fill="var(--greeting-bg-color)"
							/>
							<g
								class="sun-beams"
								stroke="var(--greeting-bg-color)"
							>
								<line x1="12" y1="1" x2="12" y2="3" />
								<line x1="12" y1="21" x2="12" y2="23" />
								<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
								<line
									x1="18.36"
									y1="18.36"
									x2="19.78"
									y2="19.78"
								/>
								<line x1="1" y1="12" x2="3" y2="12" />
								<line x1="21" y1="12" x2="23" y2="12" />
								<line
									x1="4.22"
									y1="19.78"
									x2="5.64"
									y2="18.36"
								/>
								<line
									x1="18.36"
									y1="5.64"
									x2="19.78"
									y2="4.22"
								/>
							</g>
							<mask class="moon" id="moon-mask">
								<rect
									x="0"
									y="0"
									width="100%"
									height="100%"
									fill="white"
								/>
								<circle cx="24" cy="10" r="6" fill="black" />
							</mask>
						</svg>
					</button>
				</div>

				<section className="greetingMarquee">
					<h1>Hi,</h1>
					<h1 style={{ display: "flex" }}>
						I'm&nbsp;
						<p
							style={{
								margin: "0",
								color: "var(--font-color)",
							}}
						>
							Raj Gohire
						</p>
						.
					</h1>
					<h2>Software Engineer</h2>
				</section>

				<div className="scrollDownPrompt">
					<svg
						className="scrollDownSVG"
						width="100%"
						height="100%"
						viewBox="-8 -4 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="SVGRepo_iconCarrier">
							<path
								d="M-7-3 0 3 7-3"
								stroke="var(--nav-font-color)"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</g>
					</svg>
				</div>
			</div>

			<AboutComp ref={aboutRef} />
			<section id="experienceSection" ref={experienceRef}>
				<h1>Experience</h1>
				{experienceList.map((exp, index) => (
					<ExperienceComp key={index} exp={exp} />
				))}
			</section>
			<ProjectsComp ref={projectsRef} />
			<SkillsComp skills={skillsList} ref={skillsRef} />
			{/* <SkillsComp ref={contactRef} /> */}
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

			<button
				className="resumeDownload"
				onClick={() => {
					window.location.href =
						"https://drive.google.com/uc?export=download&id=1VaR5tkaQJB-rYMqCIYWO8ci_cNYH8oyo";
				}}
			>
				Download Resume
			</button>

			<FooterComp />
		</div>
	);
};

export default App;
