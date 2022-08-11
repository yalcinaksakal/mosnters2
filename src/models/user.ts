type user = {
	id: number;
	name: string;
	email: string;
	[key: string]: string | { [key: string]: string } | number;
};
export default user;
