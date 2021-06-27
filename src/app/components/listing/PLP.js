import { Link } from "react-router-dom";
import { getAllProduct } from "../../utils/fetchapi";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PLP.css";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import AddModal from "../../utils/Modal.js";

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      numb: 10,
    };
  }

  state = {
    modalOpen: false,
  };
  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen,
      };
    });
  };

  moreProduct = async () => {
    await this.setState({ numb: this.state.numb + 10 });
    const res = await getAllProduct(this.state.numb);
    // console.log(res);
    this.setState({ products: res });
  };

  async componentDidMount() {
    try {
      const res = await getAllProduct(this.state.numb);
      this.setState({ products: res });
    } catch (error) {
      this.setState({ products: [] });
    }
  }

  render() {
    return (
      <div className="Listing">
        <h1>“A Room Without Books Is Like A Body Without A Soul.” </h1>

        <div>
          <h2 class="text">BUY-2-GET 50% OFF</h2>
          <div className="cards">
            <AddModal
              modalOpen={this.state.modalOpen}
              handleModalOpen={this.handleModalOpen}
            />
            <Container>
              <Row style={{ margin: "17px" }}>
                {this.state.products.map((pd, idx) => (
                  <Col md={3}>
                    <Card style={{ marginTop: "10px" }}>
                      <Card.Img
                        top
                        height="200px"
                        width="200px"
                        src={pd.image}
                        alt="Card image cap"
                      />
                      <Card.Body>
                        <Card.Title id="title_justify">{pd.title}</Card.Title>
                        <Card.Subtitle>{pd.description}</Card.Subtitle>
                        <Card.Text>${pd.price}</Card.Text>  

                        {/* model button */}
                        {/* <Link onClick={this.handleModalOpen}>
                        <Button>Model</Button>
                        </Link> */}

                        {/* add to cart button */}
                        <Button
                          style={{ backgroundColor: "orange" }}
                          onClick={() => {
                            this.props.onAddingItem(pd.id);
                          }}
                        >
                          add to cart
                        </Button>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                ))}

                {/* <Button onClick={this.moreProduct} size="small">More</Button> */}
              </Row>
              <Row>
                <Button
                  type="button"
                  class="btn btn-primary btn-sm"
                  variant="danger"
                  style={{ width: "22%", margin: "20px auto" }}
                  onClick={this.moreProduct}
                >
                  more
                </Button>
              </Row>
            </Container>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
