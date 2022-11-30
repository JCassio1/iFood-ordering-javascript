import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './UICard.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PlusSquareFill, DashSquareFill } from 'react-bootstrap-icons'
import { useMemo, useState } from 'react'
import { MAX_ORDERS_PER_PRODUCT } from '../../Configuration/config'

const UICard = (props) => {
  const [quantity, setQuantity] = useState(1)

  const increaseQty = () => {
    if (quantity < MAX_ORDERS_PER_PRODUCT) {
      setQuantity((prev) => prev + 1)
    }
  }
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const addToCart = () => {
    props.onAddToCart(quantity)
  }

  const price = useMemo(() => {
    return parseFloat(props.addToCartButtonText * quantity).toFixed(2)
  }, [quantity, props.addToCartButtonText])

  return (
    <Card className={styles.card}>
      <Card.Img variant='top' src={props.imagePath} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='text-center'>{props.title}</Card.Title>
        <Card.Text className='text-center'>{props.description}</Card.Text>
        <Row className='mt-auto pb-3'>
          <Col className='d-flex justify-content-center'>
            <PlusSquareFill onClick={increaseQty} />
          </Col>
          <Col className='d-flex justify-content-center'>{quantity}</Col>
          <Col className='d-flex justify-content-center'>
            <DashSquareFill onClick={decreaseQty} />
          </Col>
        </Row>
        <Button variant='dark' className='mt-auto' onClick={addToCart}>
          £ {price} • Add
        </Button>
      </Card.Body>
    </Card>
  )
}

export default UICard
