import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import ChooseBooksCategory from "./components/ChooseBooksCategory";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <ChooseBooksCategory />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
