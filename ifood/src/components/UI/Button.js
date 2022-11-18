import { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

const ReactButton = (props) => {
  return (
    <Fragment>
      <Button>{props.buttonText}</Button>
    </Fragment>
  )
}

export default ReactButton
