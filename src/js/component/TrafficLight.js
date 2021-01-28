import React, { useState } from "react";

export function TrafficLight() {
	const [luces, setLuces] = useState("");

	const redON = e => {
		if (luces != "red") {
			setLuces("red");
		} else setLuces("");
	};
	const yellowON = e => {
		if (luces != "yellow") {
			setLuces("yellow");
		} else setLuces("");
	};

	const greenON = e => {
		if (luces != "green") {
			setLuces("green");
		} else setLuces("");
	};
	return (
		<div className="principalDiv text-center mt-5 d-flex flex-column aling-items-center">
			<div className="headerBox">
				<div className="postDirection">
					{<i className="fas fa-directions" />}
				</div>
			</div>
			<div className="extension" />

			<div className="lights">
				<div
					className={luces == "red" ? "red lightON" : "red"}
					onClick={redON}
				/>
				<div
					className={luces == "yellow" ? "yellow lightON" : "yellow"}
					onClick={yellowON}
				/>
				<div
					className={luces == "green" ? "green lightON" : "green"}
					onClick={greenON}
				/>
			</div>
		</div>
	);
}
export default TrafficLight;
