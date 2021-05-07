// External
import { Container, Row, Col } from "react-bootstrap";

// internal
import { ComingSoon } from "./pages/ComingSoon";
import { HomePage } from "./pages/HomePage";

function App() {
    return <ComingSoon />;
    // return <HomePage />;
}

export default App;

//TODO: to be removed. these exist for reference
// import "bootstrap/dist/css/bootstrap.min.css";

// <Container>
// <Row lg={4}>
//     <Col>1 of 3</Col>
//     <Col>2 of 3</Col>
//     <Col>3 of 3</Col>
// </Row>
// </Container>
