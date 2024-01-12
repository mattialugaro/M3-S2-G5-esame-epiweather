import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const TopBar = () => {

    return(

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='fw-bold fs-5'>Epiweather</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-white">Home</NavLink>
          </Nav>
        </Container>
      </Navbar>

    )
}

export default TopBar