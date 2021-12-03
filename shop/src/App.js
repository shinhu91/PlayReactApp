import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

// or less ideally
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import './App.css';
import shoesData from './data.js'
import Product from './Product.js'
import Detail from './Detail.js'
import axios from 'axios'

import { Link, Route, Switch } from 'react-router-dom'

function App() {

  const [shoes, setShoes] = useState(shoesData)
  const [loading, setLoading] = useState(false)
  const [stock, setStock] = useState([10,11,5])

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Shoe Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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

      <Switch>
        <Route exact path="/">
          <div className="jumbotron">
            <h1>20% Season Off</h1>
          </div>
          <div className="container">
            <div className="row">
              {
                shoes.map((e, i) => {
                  return (
                    <Product key={e.id} shoes={e} />
                  )
                })
              }
            </div>
          </div>
          {
            loading === true
              ? (
                <div className="loader"></div>
              )
              : null
          }

          <button className="btn btn-primary" onClick={() => {
            setLoading(true)
            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((rsData) => {
                const data = [...shoes, ...rsData.data]
                setShoes(data)
                setLoading(false)
              })
              .catch(() => {
                console.log("fail")
              });
          }}>더보기</button>
        </Route>
        <Route path="/detail/:id">
          <Detail shoe={shoes} stock={stock} setStock={setStock} />
        </Route>

        <Route path="/:id">
          <div>asdasdasdasdasdasd</div>
        </Route>
      </Switch>
    </div>
  );
}



export default App;
