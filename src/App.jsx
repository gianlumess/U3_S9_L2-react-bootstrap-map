import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import ChooseBooksCategory from "./components/ChooseBooksCategory";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <ChooseBooksCategory />
      </Container>
    </>
  );
}

export default App;
