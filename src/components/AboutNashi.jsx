import React from 'react'
import "../style/aboutnashi.css"
function AboutNashi() {
  return (
    <section className='aboutnashi'>
        <div className="container">
            <h2>Подпишись на наши новости!</h2>
            <p>Введи свой электронный адрес и будь в курсе всех обновлений</p>
            <div className='aboutnashi_div'>
                <input type="text" />
                <button>отправить</button>
            </div>
        </div>
    </section>
  )
}

export default AboutNashi
