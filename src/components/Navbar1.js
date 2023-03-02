import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <div >
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><b>STOCK ALERTER</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <NavDropdown title="Whats New" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About to Launch this app for Indian Stocks.</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Features like To Sell and To Buy are going to unlock.
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                New Version launch on <b>12th may 2023</b>.
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbar1;