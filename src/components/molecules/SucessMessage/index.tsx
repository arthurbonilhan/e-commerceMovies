import React from 'react'

const SucessMessage: React.FC = () => {
  const handleGoToHome = () => {
    window.location.href = '/'
  }

  return (
    <div className="flex flex-col items-center text-black w-5/6 mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full">
        <div className="gap-4 ">
          <h1 className="text-xl font-bold">Compra realizada com sucesso!</h1>
          <img src="/imagens/sucess.svg" alt="Reload" className="h-72 mx-auto mt-8" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-32 mt-6" onClick={handleGoToHome}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  )
}

export default SucessMessage
