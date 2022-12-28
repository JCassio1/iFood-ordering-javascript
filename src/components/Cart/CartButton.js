import { Fragment, useEffect, useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { CartFill } from 'react-bootstrap-icons'
import Badge from 'react-bootstrap/Badge'
import styles from './CartButton.module.css'
import CartContext from '../../Store/CartContext'

const CartButton = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const buttonClasses = `${styles.alignElements} ${isHighlighted ? styles.bump : ' '}`

  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  useEffect(() => {
    if (items.length === 0) {
      return
    }

    setIsHighlighted(true)

    const timer = setTimeout(() => {
      setIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <Fragment>
      <Button className={buttonClasses} variant={props.buttonVariant} onClick={props.onClick}>
        <span className={styles.addSpace}>
          <CartFill color='black' width={16} height={17} />
        </span>
        <span className={styles.addSpace}>{props.buttonText}</span>
        <span className={styles.addSpace}>
          <Badge bg='secondary'>{props.numOfItems}</Badge>
        </span>
      </Button>
    </Fragment>
  )
}

export default CartButton
