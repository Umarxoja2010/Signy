import React from 'react'
import "../style/interesno.css"
import rasm1 from "../image/ukrabaron.png"
import rasm2 from "../image/navaposhta.png"
import rasm3 from "../image/nx.png"
import rasm4 from "../image/xlib.png"
function Interesno() {
  return (
<section className='interesno'>
    <div className="container">
        <h2>Друзья Signy</h2>
        <div className="interesno_wrapper">
            <img src={rasm1} alt="" />
            <img src={rasm2} alt="" />
            <img src={rasm3} alt="" />
            <img src={rasm4} alt="" />
        </div>
    </div>
</section>
  )
}

export default Interesno
