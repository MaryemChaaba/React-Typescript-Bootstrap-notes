import React from 'react'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'

type Props = {}

function Header({}: Props) {
  return (
    <Navbar fixed='top' bg='dark' variant='dark' >
        <Container>
            <Navbar.Brand>
                React Typescript Bootstrap
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header