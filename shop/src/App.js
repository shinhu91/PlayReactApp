import React, {useState} from 'react'

import Button from 'react-bootstrap/Button'

// or less ideally
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import './App.css';
import shoesData from './data.js'
import Product from './Product.js'
import Detail from './Detail.js'

import {Link, Route, Switch} from 'react-router-dom'

function App() {

  let [shoes, setShoes] = useState(shoesData);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to="/">Shoe Shop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/">
        <div className="jumbotron">
          <h1>20% Season Off</h1>
        </div>
        <div className="container">
          <div className="row">
            {
              shoes.map((e, i) => {
                console.log(e, i)
                return (
                  <Product shoes={e} />
                )
              })
            }
          </div>
        </div>
      </Route>
      <Route exact path="/detail">
        <Detail />
      </Route>

      <Route exact path="/:id">
        <div>ddd</div>
      </Route>
    </div>
  );
}



export default App;
