import React from 'react'
import AddCar from '../../assets/addCar.svg'
import RemoveCar from '../../assets/removeCar.svg'
import Delete from '../../assets/delete.svg'
import { CartProps } from '../../interfaces/CartProps'

const Cart: React.FC<CartProps> = ({ items, onRemoveAll, onFinalizePurchase, onAddToCart, onRemoveFromCart }) => {
  const totalPrice = items.reduce((total, item) => total + item.price * (item.quantity || 1), 0)

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <svg className="w-12 h-12 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <p className="text-gray-600 mb-4">Seu carrinho está vazio.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onRemoveAll}>
          Voltar para Home
        </button>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center h-full p-4 w-5/6">
      <div className="bg-white w-full p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-4 mb-4 text-gray-600 font-bold">
          <span className="col-span-1">PRODUTO</span>
          <span className="col-span-1 text-center">QTD</span>
          <span className="col-span-1 text-right">SUBTOTAL</span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="p-4 rounded-lg flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 col-span-1">
              <img src={item.image} alt={item.title} className="h-24 object-cover" />
              <div>
                <p className="text-lg font-bold text-text-main">{item.title}</p>
                <p className="text-text-main font-bold">R$ {item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 col-span-1 justify-center">
              <button className=" px-3 py-1 rounded-full text-gray-600" onClick={() => onRemoveFromCart(item)}>
                <img src={RemoveCar} alt="remove 1 item" className="h-5 w-5" />
              </button>
              <span className="px-3 border-2 rounded-md border-gray-border text-text-main">{item.quantity || 1}</span>
              <button className=" px-3 py-1 rounded-full text-gray-600" onClick={() => onAddToCart(item)}>
                <img src={AddCar} alt="adicionando 1 item" className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center space-x-4 col-span-1 justify-end">
              <p className="font-bold text-text-main">R$ {item.price}</p>
              <button className=" text-white px-4 py-2 rounded" onClick={() => onRemoveFromCart(item)}>
                <img src={Delete} alt="apaga todos os itens" />
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold text-xs" onClick={onFinalizePurchase}>
            FINALIZAR PEDIDO
          </button>
          <p className="text-xl text-text-main font-bold">TOTAL R$ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart
