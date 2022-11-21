import { Fragment } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import { MAIN_BACKGROUND_COLOR } from './Configuration/config'

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main className={MAIN_BACKGROUND_COLOR}>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
