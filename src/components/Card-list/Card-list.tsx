import user from "../../models/user";
import styles from "./Card-list.module.scss";

const CardList: React.FC<{ filteredMonsters: user[] }> = ({
	filteredMonsters,
}) => {
	return (
		<div className={styles.list}>
			{filteredMonsters.map(m => (
				<div key={m.id} className={styles.item}>
					<img
						alt={"monster" + m.name}
						src={`https://robohash.org/${m.id}?set=set2&size=100x100`}
					/>
					<h4>{m.name}</h4>
					<p>{m.email}</p>
				</div>
			))}
		</div>
	);
};

export default CardList;
