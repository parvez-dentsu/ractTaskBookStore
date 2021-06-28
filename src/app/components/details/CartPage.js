import React, { Components, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function CartPage(props) {

	return (
		<>
			<h1>hello</h1>
			{props.carts.map(cart => <div>{cart.name}</div>)}
		</>
	);

}

export default CartPage;