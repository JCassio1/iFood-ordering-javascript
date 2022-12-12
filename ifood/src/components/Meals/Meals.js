import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import { Fragment } from 'react'
import MealsCategories from './MealsCategories'

const Meals = () => {
  return (
    <Fragment>
      <MealsCategories />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals
