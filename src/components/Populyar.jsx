import React from 'react'
import "../style/popular.css"
import rasm1 from "../image/+.png"
import rasm2 from "../image/-.png"
function Populyar() {
  return (
 <section className='popular'>
    <div className="container">
<h2>Популярные вопросы и ответы на них</h2>
<div className="popular_content">
<img src={rasm1} alt="" />
<p>Почему круглую пиццу ставят в квадратную коробку, а нарезают треугольниками?</p>
</div>
<div className="popular_content">
<img src={rasm2} alt="" />
<p>Почему после ремонта дорога опять проваливается?
- Потому что делают ее без соблюдения технологических процессов.
</p>
</div>
<div className="popular_content">
<img src={rasm1} alt="" />
<p>Почему вода мокрая?</p>
</div>
<div className="popular_content">
<img src={rasm1} alt="" />
<p>Видят ли микробы друг друга?</p>
</div>
<div className="popular_content">
<img src={rasm1} alt="" />
<p>Почему кровь красная а вены синие?</p>
</div>
<div className="popular_content">
<img src={rasm1} alt="" />
<p>Из чего сделана радуга? </p>
</div>
    </div>
 </section>
  )
}

export default Populyar
