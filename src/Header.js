import React from "react";
import { Button, Image, Link, Navbar, Form, Nav, FormControl, Details, Container, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./Header.css";

export default class Header extends React.Component {
	render() {
		return (

			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#">
						{" "}
						<Image
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReE2MkWSIE-J58MSZmaUbccXv8dvFHVd9gRg&usqp=CAU"
							rounded
							width="70x"
							height="60px"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#" disabled style={{ color: "white" }} classname="web">
								Bombayboook.com
							</Nav.Link>
							{/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

						</Nav>
						<Form className="d-flex">
							{/* <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" /> */}
							<input type="text" list="data" value={this.props.value} onChange={this.props.onChangeValue} />
							<datalist id="data">
								{this.props.searchDate.map(home => <option value={home.title} />)}
							</datalist>
							<Button variant="outline-success" onClick={this.props.onClick}>Search</Button>

						</Form>

						{/* <Nav>
            <Nav.Link href="#deets"><Image
                 src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png"
                className="new"
                rounded
                width="60x"
                height="30px"
              />           
              {this.props.totalCart.length > 0
                ? this.props.totalCart.length
                : ""}</Nav.Link>           
          </Nav> */}
						<Navbar.Brand href="/details/" style={{ color: "white" }}>
							<Image
								src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png"
								className="new"
								rounded
								width="60px"
								height="30px"
							/>

							{this.props.totalCart.length > 0
								? this.props.totalCart.length
								: ""}
						</Navbar.Brand>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
