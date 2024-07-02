import { Movie } from './Movie'

export interface CartProps {
  items: Movie[]
  onRemoveAll: () => void
  onFinalizePurchase: () => void
  onAddToCart: (movie: Movie) => void
  onRemoveFromCart: (movie: Movie) => void
}
