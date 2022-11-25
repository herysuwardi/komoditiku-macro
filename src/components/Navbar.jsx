import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
import { HOME, ABOUT, CONTACT, LOGIN, REGISTER, TRAINING, COURSES, DIGITAL, EXPLORE } from "../router";

const Navs = () => {
  return (
    <Navbar className="wrapper-nav fixed-top">
      <Container>
        <img src="/assets/logo.png" height="40" width="40" alt="logo"></img>
        <Navbar.Brand href="#home">OMODITIKU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="wrapper-navbar ms-auto">
            <NavLink className="navbar-link" to={HOME}>Beranda</NavLink>
            <NavDropdown title={<span className="nav-layanan">Layanan</span>} id="basic-nav-dropdown">
              <NavLink to={TRAINING} className="nav-dropdown container">Pelatihan & Konsultasi</NavLink>
              <NavDropdown.Divider />
              <NavLink to={COURSES} className="nav-dropdown container">Kursus Online</NavLink>
              <NavDropdown.Divider />
              <NavLink to={DIGITAL} className="nav-dropdown container">Digital Pemasaran</NavLink>
              <NavDropdown.Divider />
              <NavLink to={EXPLORE} className="nav-dropdown container">Explore Produk</NavLink>    
            </NavDropdown>
            <NavLink className="navbar-link" to={ABOUT}>Tentang Kami</NavLink>
            <NavLink className="navbar-link" to={CONTACT}>Kontak</NavLink>
          </Nav>  
          <Link to={LOGIN} className="btn1-nav me-2">Masuk</Link>
          <Link to={REGISTER} className="btn2-nav">Daftar</Link>  
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navs;