import React from 'react'
import Car from '../../assets/car.svg'
import { MovieCardProps } from './props'

const MovieCard: React.FC<MovieCardProps> = ({ id, title, price, image, onAddToCart, onRemoveFromCart, quantity }) => {
  const handleAddToCart = () => {
    onAddToCart()
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-center w-80 mx-auto">
      <div className="flex justify-center">
        <img src={image} alt={title} className="h-60 object-cover mb-4" />
      </div>
      <h2 className="mb-2 font-bold text-text-main text-xs">{title}</h2>
      <p className="font-bold text-text-main mb-4">R$ {price.toFixed(2)}</p>
      <div className="flex justify-center items-center">
        <button
          onClick={handleAddToCart}
          className={`w-full px-4 py-2 rounded-l text-white font-bold text-xs flex items-center justify-center ${
            quantity > 0 ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          <span className="mr-2 flex items-center ">
            <img src={Car} alt="icone de carrinho de compras" />
            {quantity}
          </span>
          <span>{`ADICIONAR AO CARRINHO`}</span>
        </button>
      </div>
    </div>
  )
}

export default MovieCard
