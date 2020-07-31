export function ccc(id = "", params) {
	console.log(id, params);
}
export const aaa = (id = ":id") => `11111/${id}`;
export const bbb = () => ccc("222", { first: 333 });
