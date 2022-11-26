import { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import { CartFill } from 'react-bootstrap-icons'
import Badge from 'react-bootstrap/Badge'
import styles from './CartButton.module.css'

const CartButton = (props) => {
  return (
    <Fragment>
      <Button className={styles.alignElements} variant={props.buttonVariant} onClick={props.onClick}>
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
