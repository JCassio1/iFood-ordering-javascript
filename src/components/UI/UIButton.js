import { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

const UIButton = (props) => {
  return (
    <Fragment>
      <Button variant={props.colorVariant} size={props.size} className={props.classAtributes}>
        {props.buttonText}
      </Button>
    </Fragment>
  )
}

export default UIButton
