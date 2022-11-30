import { React, Fragment, useContext } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import UIButton from '../UI/UIButton'
import CartContext from '../../Store/CartContext'

const CartModal = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `£ ${cartCtx.totalAmount.toFixed(2)}`

  const hasItems = cartCtx.items.length > 0

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Fragment>
      <Offcanvas show={props.showStatus} placement='end' onHide={props.dissmissHandler}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Orders</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
          etc.
          {cartItems}
        </Offcanvas.Body>
        <div className='.offcanvas-bottom p-3 d-grid gap-3'>
          <span>
            <strong>Total Amount: {totalAmount}</strong>
          </span>
          {hasItems && (
            <UIButton colorVariant='dark' size='lg' classAtributes='mt-auto' buttonText='Proceed to checkout' />
          )}
        </div>
      </Offcanvas>
    </Fragment>
  )
}

export default CartModal
