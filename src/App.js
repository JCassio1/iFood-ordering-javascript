import { useState } from 'react'
import './App.css'
import CartModal from './components/Cart/CartModal'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import { MAIN_BACKGROUND_COLOR } from './Configuration/config'
import CartProvider from './Store/CartProvider'

function App() {
  const [showCartModal, setShowCartModal] = useState(false)

  const hideCartHandler = () => setShowCartModal(false)
  const showCartHandler = () => setShowCartModal(true)

  console.log(process.env.REACT_APP_NAME)
  console.log(process.env.REACT_APP_SPACE)
  console.log(process.env.REACT_APP_ACCESS_TOKEN)
  console.log(console.env.REACT_APP_HOST)

  return (
    <CartProvider>
      <CartModal showStatus={showCartModal} dissmissHandler={hideCartHandler} />
      <Header onShowCart={showCartHandler}></Header>
      <main className={MAIN_BACKGROUND_COLOR}>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
