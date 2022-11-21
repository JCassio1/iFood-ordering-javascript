import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './UICard.module.css'

const UICard = (props) => {
  return (
    <Card className={styles.card}>
      <Card.Img variant='top' src={props.imagePath} />
      <Card.Body>
        <Card.Title className='text-center'>{props.title}</Card.Title>
        <Card.Text className='text-center'>{props.description}</Card.Text>
        <div className='text-center'>
          <Button variant='dark'>£ {props.buttonText}</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default UICard
