import { Cart } from './components/Cart.jsx'
import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { CartProvider } from './context/cart.jsx'
import { useFilters } from './hooks/useFilters.js'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
