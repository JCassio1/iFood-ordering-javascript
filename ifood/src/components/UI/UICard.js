import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './UICard.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PlusSquareFill, DashSquareFill } from 'react-bootstrap-icons'
import { useEffect, useState } from 'react'
import { MAX_ORDERS_PER_PRODUCT } from '../../Configuration/config'

const UICard = (props) => {
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(props.buttonText)
  const increaseQty = () => {
    if (quantity < MAX_ORDERS_PER_PRODUCT) {
      setQuantity(quantity + 1)
    }
  }
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  useEffect(() => {
    const newQuantity = (parseFloat(props.buttonText) * quantity).toFixed(2)
    setPrice(newQuantity)
  }, [quantity])

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
        <Button variant='dark' className='mt-auto'>
          £ {price} • Add
        </Button>
      </Card.Body>
    </Card>
  )
}

export default UICard
