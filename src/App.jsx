import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import ChooseBooksCategory from "./components/ChooseBooksCategory";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <ChooseBooksCategory />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
