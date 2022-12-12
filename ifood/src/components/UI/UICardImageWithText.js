import { Fragment } from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import styles from './UICardImageWithText.module.css'

const UICardImageWithText = (props) => {
  return (
    <Fragment>
      <div className={styles.cardContainer}>
        <Image
          src='https://www.allaboutsushiguide.com/images/nigiri-sushi-250.jpg'
          className={`overlay-image ${styles.cardImage}`}
        />
        <text className={styles.overlayText}>{<h4 style={{ color: 'white' }}>{props.description}</h4>}</text>
      </div>
    </Fragment>
  )
}

export default UICardImageWithText
