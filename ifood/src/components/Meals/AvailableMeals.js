import UICard from '../UI/UICard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useContext, useState, useEffect } from 'react'
import CartContext from '../../Store/CartContext'
import useContentful from '../../Hooks/useContentful'

const AvailableMeals = () => {
  console.log(process.env.NAME)
  const [meals, setMeals] = useState([])
  const { getMeals } = useContentful()

  useEffect(() => {
    getMeals().then((result) => {
      setMeals(result)
    })
  })

  const cartCtx = useContext(CartContext)

  const generateCard = (meal, index) => {
    const price = parseFloat(meal.price.toFixed(2))

    const onAddToCartHandler = (amount) => {
      cartCtx.addItem({
        id: index,
        name: meal.title,
        amount: amount,
        imagePath: meal.mealImage,
        price: price
      })
    }

    return (
      <Col sm={6} md={3} lg={3} key={index}>
        <UICard
          id={index}
          title={meal.title}
          description={meal.description}
          addToCartButtonText={price}
          imagePath={meal.mealImage}
          onAddToCart={onAddToCartHandler}
        />
      </Col>
    )
  }

  const listOfMeals = meals.map(generateCard)
  return (
    <section className='pb-4'>
      <Container>
        <Row className='gy-3 my-3'>{listOfMeals}</Row>
      </Container>
    </section>
  )
}

export default AvailableMeals
