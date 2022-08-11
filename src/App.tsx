import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
type user = {
	id: number;
	name: string;
	[key: string]: string | { [key: string]: string } | number;
};

const App: React.FC = () => {
	const [monsters, setMonsters] = useState<user[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				),
				data = await response.json();
			setMonsters(data);
		};
		fetchData();
	}, []);
	return (
		<div className={styles.App}>
			{monsters.map((m, i) => (
				<h1 key={m.id}>{m.name}</h1>
			))}
		</div>
	);
};

export default App;
