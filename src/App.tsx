import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import CardList from "./components/Card-list/Card-list";
import SearchBox from "./components/Search-box/Search-box";
import user from "./models/user";
const App: React.FC = () => {
	const [monsters, setMonsters] = useState<user[]>([]),
		[filtered, setFiltered] = useState<user[]>([]),
		[canSearch, setCanSearch] = useState(false),
		[title, setTitle] = useState("MONSTERS"),
		hasFetchedData = useRef(false),
		filterMonsters: (e: ChangeEvent<HTMLInputElement>) => void = e => {
			const searchStr = e.currentTarget.value.toLocaleLowerCase();
			setFiltered(
				monsters.filter(m => m.name.toLocaleLowerCase().includes(searchStr))
			);
		},
		changeTitle: (e: ChangeEvent<HTMLInputElement>) => void = e => {
			setTitle(e.currentTarget.value);
		};

	console.log("render");
	useEffect(() => {
		console.log("mounted");

		const fetchData = async () => {
			console.log("fetching");
			const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				),
				data = await response.json();
			console.log(data);
			setMonsters(data);
			setFiltered(data);
			setCanSearch(true);
		};
		if (!hasFetchedData.current) {
			hasFetchedData.current = true;
			fetchData();
		}
	}, []);
	return (
		<div className={styles.App}>
			<h1 style={{ fontFamily: "Barlow Semi Condensed" }}>{title}</h1>
			<SearchBox
				changeHandler={changeTitle}
				isDisabled={false}
				placeHolder="Change Title"
			/>
			<SearchBox
				changeHandler={filterMonsters}
				isDisabled={!canSearch}
				placeHolder="Search Monsters"
			/>
			<CardList filteredMonsters={filtered} />
		</div>
	);
};

export default App;
