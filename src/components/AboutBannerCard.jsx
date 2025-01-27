import React from 'react'

function AboutBannerCard({img,title,btn1,btn2,tex}) {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <button>{btn1}</button>
      <button>{btn2}</button>
      <p>{tex}</p>
    </div>
  )
}

export default AboutBannerCard
