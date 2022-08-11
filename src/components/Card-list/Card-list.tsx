import user from "../../models/user";
import styles from "./Card-list.module.scss";

const CardList: React.FC<{ filteredMonsters: user[] }> = ({
	filteredMonsters,
}) => {
	return (
		<>
			{filteredMonsters.map(m => (
				<h1 key={m.id}>{m.name}</h1>
			))}
		</>
	);
};

export default CardList;
