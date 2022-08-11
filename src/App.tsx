import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./App.module.scss";
type user = {
	id: number;
	name: string;
	[key: string]: string | { [key: string]: string } | number;
};

const App: React.FC = () => {
	const [monsters, setMonsters] = useState<user[]>([]),
		[filtered, setFiltered] = useState<user[]>([]),
		[canSearch, setCanSearch] = useState(false),
		filterMonsters: (e: ChangeEvent<HTMLInputElement>) => void = e => {
			const searchStr = e.currentTarget.value.toLocaleLowerCase();
			setFiltered(
				monsters.filter(m => m.name.toLocaleLowerCase().includes(searchStr))
			);
		};
	console.log("render");
	useEffect(() => {
		console.log("mounted");
		const fetchData = async () => {
			const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				),
				data = await response.json();
			setMonsters(data);
			setFiltered(data);
			setCanSearch(true);
		};
		fetchData();
	}, []);
	return (
		<div className={styles.App}>
			<input
				className={styles.Search}
				placeholder="Search monsters"
				type="search"
				onChange={filterMonsters}
				autoFocus
				disabled={!canSearch}
			/>
			{filtered.map((m, i) => (
				<h1 key={m.id}>{m.name}</h1>
			))}
		</div>
	);
};

export default App;
