import React, {useState} from 'react'

import Button from 'react-bootstrap/Button'

// or less ideally
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import './App.css';
import shoesData from './data.js'
import Product from './Product.js'

import {Link, Route, Switch} from 'react-router-dom'

function App() {

  let [shoes, setShoes] = useState(shoesData);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
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
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </Route>

      
    </div>
  );
}

export default App;
