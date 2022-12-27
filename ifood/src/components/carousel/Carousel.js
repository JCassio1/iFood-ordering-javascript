import styles from './Carousel.module.css'

const marketingTerms = [
  'Delicious',
  'Munchies',
  'Hungry',
  'Tasty',
  'Fantastic',
  'I deserve it',
  'Soft',
  'Exotic',
  'Snack',
  'Lunch',
  'Today',
  'Want now',
  'Spicy',
  'Crisps',
  'Burger'
]

const termsArray = marketingTerms.map((term) => (
  <div className={styles.slide}>
    <h1>{term}</h1>
  </div>
))

const Carousel = () => {
  return (
    <div className={`${styles.mainContainer} pt-5`}>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>{termsArray}</div>
      </div>
    </div>
  )
}

export default Carousel
