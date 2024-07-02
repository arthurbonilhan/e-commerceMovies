import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../../services/api'
import MovieCard from '../../molecules/MovieCard'
import { Movie } from '../../interfaces/Movie'
import Loader from '../../atoms/Loader'
import { MovieListProps } from '../../interfaces/MovieListProps'
import ErrorMessage from '../../molecules/ErrorMessage'

const MovieList: React.FC<MovieListProps> = ({ onAddToCart, onRemoveFromCart, cartItems }) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const getMovies = async () => {
    try {
      const data = await fetchMovies()
      setMovies(data.products)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching movies:', error)
      setLoading(false)
      setError('Failed to fetch movies. Please try again later.')
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  const handleReloadMovies = () => {
    setLoading(true)
    getMovies()
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage onReload={handleReloadMovies} />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
      {movies.map((movie) => {
        const cartItem = cartItems.find((item) => item.id === movie.id)
        const quantity = cartItem ? cartItem.quantity ?? 0 : 0
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            price={movie.price}
            image={movie.image}
            onAddToCart={() => onAddToCart(movie)}
            onRemoveFromCart={() => onRemoveFromCart(movie)}
            quantity={quantity}
          />
        )
      })}
    </div>
  )
}

export default MovieList
