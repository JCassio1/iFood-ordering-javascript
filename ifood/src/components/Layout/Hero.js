import { Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { CAROUSEL_SLIDER_TIME } from '../../Configuration/config'

import meal1 from '../../assets/hero-image-size.png'
import meal2 from '../../assets/hero-image-size-2.png'
import meal3 from '../../assets/hero-image-size-3.png'

function Hero(props) {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item interval={CAROUSEL_SLIDER_TIME}>
          <img className='d-block w-100' src={meal1} alt='Second slide' />

          <Carousel.Caption>
            <h3>{props.ourStockImages[0].title}</h3>
            <p>{props.ourStockImages[0].subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={CAROUSEL_SLIDER_TIME}>
          <img className='d-block w-100' src={meal2} alt='Second slide' />

          <Carousel.Caption>
            <h3>{props.ourStockImages[1].title}</h3>
            <p>{props.ourStockImages[1].subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={CAROUSEL_SLIDER_TIME}>
          <img className='d-block w-100' src={meal3} alt='Third slide' />

          <Carousel.Caption>
            <h3>{props.ourStockImages[2].title}</h3>
            <p>{props.ourStockImages[2].subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
}

export default Hero
