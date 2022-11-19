import { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

const ReactButton = (props) => {
  return (
    <Fragment>
      <Button variant={props.buttonVariant}>{props.buttonText}</Button>
    </Fragment>
  )
}

export default ReactButton
