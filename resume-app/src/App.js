import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Spline from "@splinetool/react-spline";

function App() {
	return (
		<div className="App">
			<header className="App-header">
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
			</header>
			<body>
				{/* <Spline scene="https://prod.spline.design/JjFHTdgK6W2e2Oap/scene.splinecode" /> */}
			</body>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
