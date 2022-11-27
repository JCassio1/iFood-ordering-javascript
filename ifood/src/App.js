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
