import React from 'react'
import "../style/demo.css"
function Demo() {
  return (
<section className='demo'>
    <div className="container">
        <h1>Пакеты цифровых подписей </h1>
<div className="demo_wrapper">
    <div className="demo_card">
        <h4>Demo</h4>
        <h5>30 документів</h5>
        <div>
            <h2>0</h2>
            <h5>грн/місяць</h5>
        </div>
        <button>Зарегистрироваться</button>
    </div>
    <div className="demo_card">
        <h4>Business</h4>
        <h5>1000 документів</h5>
        <div>
            <h2>1000</h2>
            <h5>грн/рік</h5>
        </div>
        <button>Закакзать</button>
    </div>
    <div className="demo_card">
        <h4>Pro</h4>
        <h5>10000 документів</h5>
        <div>
            <h2>9000</h2>
            <h5>грн/місяць</h5>
        </div>
        <button>Заказать</button>
    </div>
    <div className="demo_card">
        <h4>Individual</h4>
        <h5>Необмежена кількість документів</h5>
        <button className='demo_btn4'>Связаться с нами</button>
    </div>
</div>
    </div>
</section>
  )
}

export default Demo
