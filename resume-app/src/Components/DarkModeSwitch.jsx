import React, { useState } from "react";

const DarkModeSwitch = () => {
	let [val, setVal] = useState(false);

	return (
		<button
			onClick={() => {
				setVal(!val);
			}}
		>
			Dark Mode Toggle {val.toString()}
		</button>
	);
};

export default DarkModeSwitch;
