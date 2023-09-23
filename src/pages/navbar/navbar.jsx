import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Info</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/questions-one">Pregunta 1</Nav.Link>
            <Nav.Link href="/questions-two">Pregunta 2</Nav.Link>
            <Nav.Link href="/questions-three">Pregunta 3</Nav.Link>
            <Nav.Link href="/questions-four">Pregunta 4</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
