import './assets/index.css'
import Cart from './components/Cart'
import ProductListing from './components/ProductListing'

function App() {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductListing />
      </main>
    </div>
  )
}

export default App
