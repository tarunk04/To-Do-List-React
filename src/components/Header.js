import React from "react"
import {Navbar,Nav} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="sm" className="bg-dark navbar-dark">
                <Navbar.Brand href="#home">To-Do Manager</Navbar.Brand>
                <Navbar.Toggle data-target="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header
