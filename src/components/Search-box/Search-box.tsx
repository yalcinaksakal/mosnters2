import React, { ChangeEvent } from "react";
import styles from "./Search-box.module.scss";

const SearchBox: React.FC<{
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	isDisabled: boolean;
}> = ({ changeHandler, isDisabled }) => {
	return (
		<input
			className={styles.Search}
			placeholder="Search monsters"
			type="search"
			onChange={changeHandler}
			autoFocus
			disabled={isDisabled}
		/>
	);
};

export default SearchBox;
