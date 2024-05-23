import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
const Header = () => {
    const listUsers = useSelector((state) => state.user.listUsers);
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ background: 'linear-gradient(135deg, #153677, #4e085f)' }}>
            <div className="container-fluid">
                <Navbar.Brand href="/">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Link href="/">Todo</Nav.Link>
                        <Nav.Link href="/link">User</Nav.Link>
                        <NavDropdown title={`Users (${listUsers.length})`} id="navbarDropdown">
                            {listUsers && listUsers.length > 0 &&
                                listUsers.map((item, index) => {
                                    return (
                                        <NavDropdown.Item
                                            key={`user-${index}`}
                                            href="#">
                                            {item.email}
                                        </NavDropdown.Item>
                                    )
                                })

                            }
                            <NavDropdown.Item href="/something-else">
                                <button style={{ marginLeft: "200px" }} type="button" class="btn-close" aria-label="Close"></button>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/" tabIndex="-1" aria-disabled="true">Tutorial</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </Navbar >
    );
};

export default Header;
