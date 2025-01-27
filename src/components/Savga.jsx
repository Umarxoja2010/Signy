import React from 'react'
import rasm1 from "../image/spidametr.png"
import rasm2 from "../image/like.png"
import rasm3 from "../image/cho'chqatanga.png"
import "../style/sovga.css"
function Savga() {
  return (
<section className='savga'>
    <div className="container">
        <div className="savga_wrapper">
<div className="sovga_card">
    <img src={rasm1} alt="" />
    <div>
        <h4>Моментально</h4>
        <p>Никаких задержек.
        1 секунда на подписание</p>
    </div>
</div>
<div className="sovga_card">
    <img src={rasm2} alt="" />
    <div>
        <h4>Глобально</h4>
        <p>Сервис доступен 24\7 со всех устройств.</p>
    </div>
</div>
<div className="sovga_card">
    <img src={rasm3} alt="" />
    <div>
        <h4>Экономно</h4>
        <p>В 30 раз дешевле чем почта и курьеры</p>
    </div>
</div>
        </div>
    </div>
</section>
  )
}

export default Savga
