import React, { useState } from "react";
import styles from "./App.module.scss";

const App: React.FC = () => {
	const [monsters, setMonsters] = useState([1, 2, 3]);
	return (
		<div className={styles.App}>
			{monsters.map((m, i) => (
				<h1 key={i}>{m}</h1>
			))}
		</div>
	);
};

export default App;
