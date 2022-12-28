import { React, useContext } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import UIButton from '../UI/UIButton'
import CartContext from '../../Store/CartContext'
import CartItem from './CartItem'
import { CART_BACKGROUND_COLOR, SHOP_AVAILABLE_CURRENCIES } from '../../Configuration/config'

const CartModal = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `${SHOP_AVAILABLE_CURRENCIES.GBP} ${cartCtx.totalAmount.toFixed(2)}`

  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = (
    <div>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          imageSource={item.imagePath}
          productName={item.name}
          productCurrency={SHOP_AVAILABLE_CURRENCIES.GBP}
          productPrice={item.price}
          selectedQuantity={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </div>
  )

  return (
    <div className={CART_BACKGROUND_COLOR}>
      <Offcanvas show={props.showStatus} placement='end' onHide={props.dissmissHandler}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Orders</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={CART_BACKGROUND_COLOR}>{cartItems}</Offcanvas.Body>
        <div className='.offcanvas-bottom p-3 d-grid gap-3'>
          <span>
            <strong>Total Amount: {totalAmount}</strong>
          </span>
          {hasItems && <UIButton colorVariant='dark' size='lg' classAtributes='mt-auto' buttonText='STRIPE SOON 😝' />}
        </div>
      </Offcanvas>
    </div>
  )
}

export default CartModal
