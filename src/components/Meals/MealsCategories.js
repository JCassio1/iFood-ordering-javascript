import React from 'react'
import UICardImageWithText from '../UI/UICardImageWithText'
import styles from './MealsCategories.module.css'
import useContentful from '../../Hooks/useContentful'
import { useState, useEffect } from 'react'

const MealsCategories = () => {
  const [categories, setCategories] = useState([])
  const { getCategories } = useContentful()

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result)
    })
  }, []) // If you remove empty array. It will create a bug

  const generateCard = (category, index) => {
    return (
      <UICardImageWithText
        key={index}
        description={category.description}
        imageUrl={category.categoryImage}
        imageAlt={category.description}
      />
    )
  }

  const allCategories = categories.map(generateCard)

  return (
    <section>
      <div className={`gy-3 pb-5 ${styles.horizontalrow}`}>{allCategories}</div>
    </section>
  )
}

export default MealsCategories
