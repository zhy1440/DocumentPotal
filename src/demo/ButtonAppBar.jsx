import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link,NavLink, withRouter } from "react-router-dom";

const ButtonAppBar = (props) => {
    console.log('ButtonAppBar',props);
    return (
        <Navbar bg="dark" variant="dark">
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
                    <NavLink to="/">
                        <Nav>Home</Nav>
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/home">
                        <Nav>Home2</Nav>
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/users">Users</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/todos">Todos</Link>
                </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default withRouter(ButtonAppBar);
