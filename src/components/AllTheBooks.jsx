import { Component } from "react";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class AllTheBooks extends Component {
  render() {
    return (
      <Row>
        {fantasy.map((book) => {
          return (
            <Col xs={12} md={3} key={book.asin}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text className="text-end">
                    <u>Price:</u> <strong>{book.price}€</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default AllTheBooks;
