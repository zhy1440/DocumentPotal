import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function ButtonAppBar({ match }) {
    console.log(match);
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Link to="/">
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {" React Bootstrap"}
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/">
                        <Nav>Home</Nav>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/todos">Todos</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/users">Users</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/about">About</Link>
                </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default ButtonAppBar;
