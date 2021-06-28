import React, { useEffect } from "react";
import Listing from "./app/components/listing/PLP";
import Details from "./app/components/details/CartPage";
import { getAllProduct } from "./app/utils/fetchapi";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
	//create state variable for cart (eg. [cart, setCart] = useState([]))

	const [data, setDate] = React.useState([]);

	const [cart, setCart] = React.useState([]);

	const [value, setvalue] = React.useState([]);

	const itemAddedToCart = (productId) => {
		setCart([...cart, productId]);
	};

	const apiGet = () => {
		fetch('https://quiet-harbor-27002.herokuapp.com/api/products/10')
			.then(reponse => reponse.json())
			.then((json) => {
				setDate(json)
			})
	}

	// const handleChangeValue = (e) => {
	//   setvalue(e.target.value);
	// }

	// const submitValue = (e) => {
	//   console.log(value);
	// } 
// its triger automatic page load 
	useEffect(() => {
		apiGet();
	}, []);

	return (
		<div className="App">
			<Header totalCart={cart} searchDate={data} />

			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return <Redirect to="/listing" />;
						}}
					/>
					<Route path="/listing">
						<Listing onAddingItem={itemAddedToCart} searchValue={value} />
					</Route>

					<Route path="/details">
						<Details carts={cart} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
