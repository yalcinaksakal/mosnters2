type user = {
	id: number;
	name: string;
	[key: string]: string | { [key: string]: string } | number;
};
export default user;
