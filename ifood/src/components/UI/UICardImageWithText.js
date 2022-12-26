import { Fragment } from 'react'
import React from 'react'
import Image from 'react-bootstrap/Image'
import styles from './UICardImageWithText.module.css'

const UICardImageWithText = (props) => {
  return (
    <Fragment>
      <div className={`${styles.cardContainer} ${styles.animateCard}`}>
        <Image src={props.imageUrl} className={`overlay-image ${styles.cardImage}`} />
        <h4 className={styles.overlayText}>{<p style={{ color: 'white' }}>{props.description}</p>}</h4>
      </div>
    </Fragment>
  )
}

export default UICardImageWithText
