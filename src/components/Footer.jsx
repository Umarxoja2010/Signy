import React from 'react'
import "../style/footer.css"
import rasm1 from "../image/futer_logo.png"
function Footer() {
  return (
<footer className='footer'>
    <div className="container">
        <div className="footer_wrapper">
          <div className="footer_right"> 
            <div className="footer_card1">
            <img src={rasm1} alt="" />
          </div>
          <div className="footer_card2">
            <div className="footer_card2_right">
              <ul className='footer_card_right_ul1'>
                <li>Про нас</li>
                <li>Цены</li>
              </ul>
              <ul className='footer_card_right_ul2'>
                <li>Вход</li>
                <li>Регистрация</li>
              </ul>
            </div>
            <div className="footer_card2left">
<ul className='footer_card_left_ul1'>
  <li>Блог</li>
  <li>Контакты </li>
</ul>
            </div>
          </div>
          </div>
          <div className="footer_left">
          <div className="footer_card3">
            <ul className='footer_card3_ul1'>
              <li>infosmartsign@smarttender.biz</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="footer_card4">
            <ul className='footer_card4_ul1'>
              <li>пр-т Миколи Бажана, 14 А</li>
              <li>Київ, 02072</li>
              <li>0 800 750643</li>
              <li>+380 44 334 56 43</li>
              <li>+380 44 338 86 43</li>
            </ul>
          </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className='footer_bottom_div1'>
          <span>© 2020 Signy</span>
          </div>
          <div className='footer_bottom_div2'>
            <span>Договір оферти</span>
            <span>Безпека сервісу</span>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
