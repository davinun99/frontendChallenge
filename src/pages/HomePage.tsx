import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import logo from '../around-logo.webp'
import '../styles/Home.scss'

const HomePage = () => (
  <div className="App">
    <header className="App-header">
      <img alt="logo" className="breathing-animation" src={logo} />
    </header>
    <Row className='justify-content-center'>
      <Col className='d-flex justify-content-center' sm={8}>
        <NavLink className='me-3 home-link' to='/products' >
          View products
        </NavLink>
        <NavLink className='home-link' to='/reviews'>
          View reviews
        </NavLink>
      </Col>
    </Row>
  </div>
)

export default HomePage
