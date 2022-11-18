import { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import ReactButton from '../UI/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = (props) => {
  return (
    <Fragment>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>iFood</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
            <ReactButton buttonText='Cart' />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default Header
