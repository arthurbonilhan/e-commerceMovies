export interface MovieCardProps {
  id: number
  title: string
  price: number
  image: string
  onAddToCart: () => void
  onRemoveFromCart: () => void
  quantity: number
}
