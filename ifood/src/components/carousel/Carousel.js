import styles from './Carousel.module.css'

const marketingTerms = [
  'Delicious',
  'I deserve',
  'Munchies',
  'Hungry',
  'Tasty',
  'Fantastic',
  'Soft',
  'Exotic',
  'Snack',
  'Lunch'
]

const termsArray = marketingTerms.map((term) => (
  <div className={styles.slide}>
    <h1>{term}</h1>
  </div>
))

const Carousel = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>{termsArray}</div>
      </div>
    </div>
  )
}

export default Carousel
