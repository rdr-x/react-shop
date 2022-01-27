import React from "react";
import { Header } from "@components/Header";
import { ProductList } from "@containers/ProductList"

function Home() {
	return (
		<div>
			<Header />
			<ProductList />
		</div>
	);
}

export { Home };
