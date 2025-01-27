import React from 'react'
import rasm1 from "../image/karta.png"
import rasm2 from "../image/phonee.png"
import rasm3 from "../image/locationn.png"
import rasm4 from "../image/maill.png"
import "../style/kontaktt.css"
function Kontaktt() {
  return (
  <section className='kontaktt'>
    <div className="container">
<h1>Наши контакты</h1>
<div className="kontaktt_wrapper">
    <div className="kontaktt_kontent">
        <p>Мы всегда рады ответить на ваши вопросы и развивать эффективное сотрудничество по всем вопросам, связанным с электронным документооборотом.</p>
        <div className="kontaktt_kontent_phone">
            <img src={rasm2} alt="" />
            <span>0 800 750 643</span>
        </div>
        <span>+3 044 334 56 43</span>
        <span>+3 044 338 86 43</span>
        <div className="kontaktt_kontent_email">
            <img src={rasm4} alt="" />
            <span>infosmartsign@smarttender.biz</span>
        </div>
        <div className="kontaktt_kontent_location">
            <img src={rasm3} alt="" />
            <span>пр-т Бажана, 14 АКиев, 02072</span>
        </div>
    </div>
    <div className="kontaktt_img"> 
        <img src={rasm1} alt="" />
    </div>
</div>
<h1>...или напишите нам:</h1>
<h6>Имя*:</h6>
<input type="text" placeholder='Иван' />
<h6>Электронная почта*:</h6>
<input type="text" placeholder='ivan@mail.com' />
<h6>Телефон*:</h6>
<input type="number" placeholder='+38 000 000 00 00' />
<h6>Сообщение:</h6>
<input className='kontact_innput' type="text" placeholder='введите тут' />
<button>Отправить</button>
    </div>
  </section>
  )
}

export default Kontaktt
