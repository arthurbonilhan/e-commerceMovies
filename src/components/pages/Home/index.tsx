import { useState } from 'react'
import { Movie } from '../../interfaces/Movie'
import Cart from '../../organisms/Cart'
import Header from '../../organisms/Header'
import MovieList from '../../organisms/MovieList'
import SucessMessage from '../../molecules/SucessMessage'

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<Movie[]>([])
  const [showCart, setShowCart] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleAddToCart = (movie: Movie) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === movie.id)

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: (updatedCartItems[existingItemIndex].quantity || 0) + 1,
      }
      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, { ...movie, quantity: 1 }])
    }
  }

  const handleRemoveFromCart = (movie: Movie) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === movie.id && (item.quantity || 0) > 0 ? { ...item, quantity: (item.quantity || 0) - 1 } : item
    )
    setCartItems(updatedCartItems.filter((item) => (item.quantity || 0) > 0))
  }

  const handleRemoveAllFromCart = () => {
    setCartItems([])
    setShowCart(false)
  }

  const handleFinalizePurchase = () => {
    setShowSuccessMessage(true)
    setShowCart(false)
  }

  const handleToggleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className="bg-custom-color text-white min-h-screen flex flex-col">
      <Header
        onToggleCart={handleToggleCart}
        cartItemCount={cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)}
      />
      <main className="flex flex-col items-center p-4 text-white w-full">
        {!showCart && !showSuccessMessage && (
          <MovieList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} cartItems={cartItems} />
        )}
        {showCart && (
          <Cart
            items={cartItems}
            onRemoveAll={handleRemoveAllFromCart}
            onFinalizePurchase={handleFinalizePurchase}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        )}
        {showSuccessMessage && <SucessMessage />}
      </main>
    </div>
  )
}

export default Home
