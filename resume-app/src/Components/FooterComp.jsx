import { SocialIcon } from "react-social-icons";
import "./Components.css";

function FooterComp() {
	return (
		<div className="footerComp">
			<p>npm run deploy (from master)</p>

			<small>© 2023 Raj Gohire. All Rights Reserved.</small>

			<br />

			<section>
				<SocialIcon
					url="https://github.com/RajGohire"
					bgColor="var(--font-color)"
				/>
				<SocialIcon
					url="https://linkedin.com/in/raj-gohire"
					bgColor="var(--font-color)"
				/>
				<SocialIcon
					url="https://twitter.com/raj_o15"
					bgColor="var(--font-color)"
				/>
			</section>
		</div>
	);
}

export default FooterComp;
