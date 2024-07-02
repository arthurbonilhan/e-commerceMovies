import React from 'react'

const ErrorMessage: React.FC<{ onReload: () => void }> = ({ onReload }) => {
  const handleReload = () => {
    window.location.reload()
    onReload()
  }

  return (
    <div className="flex flex-col items-center text-black w-5/6 mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full">
        <div className="gap-4">
          <h1 className="text-xl font-bold">Parece que não há nada por aqui :(</h1>
          <img src="/imagens/reload-image.svg" alt="Reload" className="w-44 h-64 mx-auto mt-8" />
          <img src="/imagens/divider.svg" alt="Reload" className="h-34 mx-auto mb-4" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-60 mt-6" onClick={handleReload}>
            Recarregar página
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
