import UICard from '../UI/UICard'
import styles from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    imagePath:
      'https://peasandcrayons.com/wp-content/uploads/2014/05/southwest-fusion-yellow-rice-sushi-with-roasted-veggies-and-shrimp-450.jpg',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    imagePath: 'https://bestellen.clubleen.nl/391-medium_default/schnitzel.jpg',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    imagePath:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2013/06/03/tennessee-burger-bourbon-bbq-sauce-ck-x.jpg',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    imagePath: 'https://i.pinimg.com/736x/2f/76/5b/2f765b02113f2e9d92548f8ee589f468.jpg',
    price: 18.99
  }
]

const AvailableMeals = () => {
  const generateCard = (meal) => {
    return (
      <UICard
        key={meal.id}
        title={meal.name}
        description={meal.description}
        buttonText={meal.price}
        imagePath={meal.imagePath}
      />
    )
  }
  const listOfMeals = DUMMY_MEALS.map(generateCard)
  return (
    <section className='bg-light pb-4'>
      <div className={`${styles.spaceItemsEvenly}`}>{listOfMeals}</div>
    </section>
  )
}

export default AvailableMeals
