import React from 'react'
import "../style/aboutHero.css"
import rasm1 from "../image/aboutHeroimg.png"
function AboutHero() {
  return (
<section className='aboutHero'>
    <div className="container">
<h1>Интересно пишем про</h1>
<div className="aboutHero_wrapper">
    <div className="aboutHero_left">
        <img src={rasm1} alt="" />
    </div>
    <div className="aboutHero_right">
<h2>Burn Calories Quicker in 30 Min.</h2>
<div className="aboutHero_btn_div">
<button>про </button>
<button>теги</button>
<button>много </button>
</div>
<p>Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.
Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.</p>
    </div>
</div>
    </div>
</section>
  )
}

export default AboutHero
