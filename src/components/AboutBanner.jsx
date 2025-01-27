import React from 'react'
import "../style/aboutBanner.css"
import rasm2 from "../image/aboutbanner1.png"
import rasm3 from "../image/aboutbanner2.png"
import rasm4 from "../image/aboutbanner3.png"
import AboutBannerCard from './AboutBannerCard'
function AboutBanner() {
  return (
 <section className='aboutBanner'>
    <div className="container">
        <div className="aboutBanner_top">
            <select>
            <option value="Все">Все</option>
        <option value="новости">новости</option>
        <option value="обучение">обучение</option>
        <option value="законы">законы</option>
            </select>
            <span>Все</span>
            <span>новости</span>
            <span>обучение</span>
            <span>законы</span>
        </div>
        <div className="aboutBanner_wrapper">
        <AboutBannerCard  img={rasm2} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
<AboutBannerCard  img={rasm3} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
<AboutBannerCard  img={rasm4} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
<AboutBannerCard  img={rasm2} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
<AboutBannerCard  img={rasm3} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
<AboutBannerCard  img={rasm4} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
<AboutBannerCard  img={rasm2} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
<AboutBannerCard  img={rasm3} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
<AboutBannerCard  img={rasm4} title="Burn Calories Quicker in 30 Min." btn1="про " btn2="Теги" tex="Не следует, однако забывать, что дальнейшее развитие различных форм деятельности" />
        </div>
        <div className="aboutBanner_bottom">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>дальше</span>
        </div>
    </div>
 </section>
  )
}

export default AboutBanner
