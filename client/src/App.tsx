import { useState } from 'react'
import './assets/index.css'
import Cart from './components/Cart'

function App() {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
    </div>
  )
}

export default App
