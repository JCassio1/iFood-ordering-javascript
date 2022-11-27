import React, { Fragment } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import UIButton from '../UI/UIButton'

const CartModal = (props) => {
  return (
    <Fragment>
      <Offcanvas show={props.showStatus} placement='end' onHide={props.dissmissHandler}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Orders</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
          etc.
        </Offcanvas.Body>
        <div className='.offcanvas-bottom p-3 d-grid gap-3'>
          <span>
            <strong>Total Amount: £50.70</strong>
          </span>
          <UIButton colorVariant='dark' size='lg' classAtributes='mt-auto' buttonText='Proceed to checkout' />
        </div>
      </Offcanvas>
    </Fragment>
  )
}

export default CartModal
