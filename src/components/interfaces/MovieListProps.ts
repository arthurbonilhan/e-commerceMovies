import { Movie } from './Movie'

export interface MovieListProps {
  onAddToCart: (movie: Movie) => void
  onRemoveFromCart: (movie: Movie) => void
  cartItems: Movie[]
}
