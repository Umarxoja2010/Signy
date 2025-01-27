import React from 'react'
import rasm1 from "../image/kompkof.png"
import rasm2 from "../image/kitob.png"
import "../style/pishem.css"
function Pishem() {
  return (
<section className='pishem'>
    <div className="container">
        <h2>Интересно пишем про </h2>
        <div className="pishem_wrapper">
            <div className="pishem_card">
<img src={rasm1} alt="" />
<h4>Заголовок короткий в две строки</h4>
            </div>
            <div className="pishem_card">
<img src={rasm2} alt="" />
<h4>Заголовок короткий в две строки</h4>
            </div>
            <div className="pishem_card">
<img src={rasm1} alt="" />
<h4>Заголовок короткий в две строки</h4>
            </div>
        </div>
    </div>
</section>
  )
}

export default Pishem
