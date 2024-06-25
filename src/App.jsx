import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import ChooseBooksCategory from "./components/ChooseBooksCategory";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import CardsForBooks from "./components/CardsForBooks";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <ChooseBooksCategory />
        <CardsForBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
