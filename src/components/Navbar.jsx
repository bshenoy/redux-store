import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar =() =>{
    return(
        
  <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="#">  Redux toolkit </Navbar.Brand>
        <Nav className=''>
                <Nav.Link to="/" as={Link}> Products</Nav.Link>
            </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Nav.Link to="/cart" as={Link}> My bag 0</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
    </Container>
    </Navbar>


    

    )
  }
  export default NavBar;
