import React from 'react'
import "../style/videolar.css"
import rasm1 from "../image/kontakt1.png"
import rasm2 from "../image/kontakt2.png"
import rasm3 from "../image/kontakt3.png"
import rasm4 from "../image/kontakt4.png"
import rasm5 from "../image/kontakt5.png"
import rasm6 from "../image/rasamm1.png"
import rasm7 from "../image/rasamm2.png"
import rasm8 from "../image/rasamm3.png"
import AboutBannerCard from './AboutBannerCard'
function VIdeolar() {
  return (
 <section className='videolar'>
    <div className="container">
<h1>Видео инструкции</h1>
<h2>Название видео инструкции</h2>
<img className='video_img_img' src={rasm1} alt="" />
<div className="video_wrapper">
    <div>
    <img src={rasm2} alt="" />
    <h3>Burn Calories Quicker in 30 Min.</h3>
    </div>
    <div>
    <img src={rasm3} alt="" />
    <h3>Burn Calories Quicker in 30 Min.</h3>
    </div>
    <div>
    <img src={rasm4} alt="" />
    <h3>Burn Calories Quicker in 30 Min.</h3>
    </div>
    <div>
    <img src={rasm5} alt="" />
    <h3>Burn Calores Quicker in 30 Min.</h3>
    </div>
</div>
<h2>Может быть интересно:</h2>
<div className="videolar_bottom">
    <AboutBannerCard img={rasm6}  title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности"/>
    <AboutBannerCard img={rasm7}  title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности"/>
    <AboutBannerCard img={rasm8}  title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности"/>
</div>
    </div>
 </section>
  )
}

export default VIdeolar
