import React from 'react'
import { HeaderProps } from '../../interfaces/HeaderProps'
import CarClick from '../../assets/carClick.svg'

const Header: React.FC<HeaderProps> = ({ onToggleCart, cartItemCount }) => {
  return (
    <header className="flex justify-between items-center p-4 text-white w-5/6 mx-auto">
      <h1 className="text-xl font-bold ml-4">WeMovies</h1>
      <div className="flex items-center cursor-pointer">
        <div className="flex flex-col items-end mr-4">
          <span>Meu Carrinho</span>
          <span className="text-gray-600">{cartItemCount} itens</span>
        </div>
        <div onClick={onToggleCart}>
          <img src={CarClick} alt="icone de carrinho de compras" />
        </div>
      </div>
    </header>
  )
}

export default Header
