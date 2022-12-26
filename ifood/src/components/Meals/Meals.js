import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import { Fragment } from 'react'
import MealsCategories from './MealsCategories'
// import Carousel from '../carousel/Carousel'

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsCategories />
      <AvailableMeals />
      {/* <Carousel /> */}
    </Fragment>
  )
}

export default Meals
