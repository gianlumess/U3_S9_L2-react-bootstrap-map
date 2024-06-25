import { Component } from "react";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import { Badge, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

class AllTheBooks extends Component {
  state = {};
  render() {
    return (
      <>
        <ToggleButtonGroup className="mt-3 mb-4" type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-1" value={1}>
            Fantasy
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2}>
            History
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3}>
            Horror
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3}>
            Romance
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3}>
            Scifi
          </ToggleButton>
        </ToggleButtonGroup>
        <Row>
          {fantasy.map((book) => {
            return (
              <Col xs={12} md={3} key={book.asin}>
                <Card className="book-cover">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text className="text-end">
                      <u>Price:</u> <Badge>{book.price}€</Badge>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default AllTheBooks;
