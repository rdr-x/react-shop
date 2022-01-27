import { useState, useEffect } from "react";
import axios from "axios";

function useGetProducts(API) {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		try {
			const res = await axios(API);
			setProducts(res.data);
		} catch (error) {
			alert("wrong!");
		}
	}, []);

	return products;
}

export { useGetProducts };
