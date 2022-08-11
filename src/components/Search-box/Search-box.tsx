import React, { ChangeEvent } from "react";
import styles from "./Search-box.module.scss";

const SearchBox: React.FC<{
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	isDisabled: boolean;
	placeHolder: string;
}> = ({ changeHandler, isDisabled, placeHolder }) => {
	return (
		<input
			className={styles.Search}
			placeholder={placeHolder}
			type="search"
			onChange={changeHandler}
			autoFocus
			disabled={isDisabled}
		/>
	);
};

export default SearchBox;
