import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PlusSquareFill, DashSquareFill } from 'react-bootstrap-icons'
import styles from './CartItem.module.css'

const CartItem = (props) => {
  return (
    <Card className='mb-2'>
      <Row>
        <Col sm='3'>
          <Card.Img src={props.imageSource} className={styles.img} />
        </Col>
        <Col>
          <Card.Body>
            <Row className='align-items-center'>
              <Col size='6' className={props.productName}>
                <Row>{props.productName}</Row>
                <Row>
                  {props.productCurrency} {props.productPrice}
                </Row>
              </Col>
              <Col size='6'>
                <Row>
                  <Col>
                    <PlusSquareFill onClick={props.onAdd} />
                  </Col>
                  <Col>{props.selectedQuantity}</Col>
                  <Col>
                    <DashSquareFill onClick={props.onRemove} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default CartItem
