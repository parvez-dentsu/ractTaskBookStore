export function getAllProduct(limit) {
	return fetch(`https://quiet-harbor-27002.herokuapp.com/api/products/${limit}`)
		.then((res) => res.json())
		.then(
			(result) => {
				return result;
			},
			(error) => {
				console.error("getAllProduct Error ====>", error);
				throw error;
			}
		);
}
/*
export function getProductDetails(id) {
	return fetch(`http://localhost:8080/api/products/${id}`)
		.then((res) => res.json())
		.then(
			(result) => {
				return result;
			},
			(error) => {
				console.error("getProductDetails Error ====>", error);
				throw error;
			}
		);
}  */