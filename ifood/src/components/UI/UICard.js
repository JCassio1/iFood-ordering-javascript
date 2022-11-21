import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './UICard.module.css'

const UICard = (props) => {
  return (
    <Card className={styles.card}>
      <Card.Img variant='top' src={props.imagePath} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='text-center'>{props.title}</Card.Title>
        <Card.Text className='text-center'>{props.description}</Card.Text>
        <Button variant='dark' className='mt-auto'>
          £ {props.buttonText} • Add
        </Button>
      </Card.Body>
    </Card>
  )
}

export default UICard
