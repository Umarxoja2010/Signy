import React from 'react'
import "../style/nashi.css"
function Nashi() {
  return (
    <section className='nashi'>
        <div className="container">
            <h2>Подпишись на наши новости!</h2>
            <p>Введи свой электронный адрес и будь в курсе всех обновлений</p>
            <div className='nashi_div'>
                <input type="text" />
                <button>отправить</button>
            </div>
        </div>
    </section>
  )
}

export default Nashi
