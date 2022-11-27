import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">GiftIt</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*       <Nav.Link href="#home">Buscar Usuarios</Nav.Link>
            <Nav.Link href="#home">Buscar Regalos</Nav.Link> */}
            <Link className="nav-link" to="/">
              Buscar regalos
            </Link>
            <Link className="nav-link" to="/buscar_usuarios">
              Buscar usuarios
            </Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#link">Favoritos</Nav.Link>

            <NavDropdown title="Antonella" alignRight>
              <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.4">
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
