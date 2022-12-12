import React from 'react'
import UICardImageWithText from '../UI/UICardImageWithText'
import styles from './MealsCategories.module.css'

const MealsCategories = () => {
  return (
    <section>
      <div className={`pt-5 px-4 ${styles.horizontalrow}`}>
        <UICardImageWithText
          description='Asian'
          imageUrl='https://www.allaboutsushiguide.com/images/nigiri-sushi-250.jpg'
          imageAlt='Asian'
        />
        <UICardImageWithText
          description='Asian'
          imageUrl='https://www.allaboutsushiguide.com/images/nigiri-sushi-250.jpg'
          imageAlt='Asian'
        />
        <UICardImageWithText
          description='Asian'
          imageUrl='https://www.allaboutsushiguide.com/images/nigiri-sushi-250.jpg'
          imageAlt='Asian'
        />
        <UICardImageWithText
          description='Asian'
          imageUrl='https://www.allaboutsushiguide.com/images/nigiri-sushi-250.jpg'
          imageAlt='Asian'
        />
        <UICardImageWithText
          description='Asian'
          imageUrl='https://www.allaboutsushiguide.com/images/nigiri-sushi-250.jpg'
          imageAlt='Asian'
        />
      </div>
    </section>
  )
}

export default MealsCategories
