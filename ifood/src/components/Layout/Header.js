import { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartButton from '../Cart/CartButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './Hero'

const stockImages = [
  {
    key: 1,
    title: 'Tasty and healthy',
    subtitle: 'Every little bit is an experience'
  },
  {
    key: 2,
    title: 'Tasty and soft',
    subtitle: 'A combination of spices'
  },
  {
    key: 3,
    title: 'Just for you',
    subtitle: 'Designed from the ground up to ensure that you will love it'
  }
]

const Header = (props) => {
  return (
    <Fragment>
      <Fragment>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>iFood</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
            </Nav>
            <Navbar.Collapse className='justify-content-end'>
              <CartButton buttonVariant='light' buttonText='Cart' numOfItems='1' />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
      <Hero ourStockImages={stockImages} />
    </Fragment>
  )
}

export default Header
