import React from 'react'
import logo from '../around-logo.webp'
import '../styles/Home.scss'
import { Col, NavLink, Row } from 'react-bootstrap'

const HomePage = () => (
  <div className="App">
    <header className="App-header">
      <img alt="logo" className="breathing-animation" src={logo} />
    </header>
    <Row className='justify-content-center'>
      <Col className='d-flex justify-content-center' sm={8}>
        <NavLink className='me-3 home-link' href='/products' >
          View products
        </NavLink>
        <NavLink className='home-link' href='/reviews'>
          View reviews
        </NavLink>
      </Col>
    </Row>
  </div>
)

export default HomePage
