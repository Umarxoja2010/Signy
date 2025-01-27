import React, { useRef } from 'react'
import "../style/header.css"
import rasm1 from "../image/header_logo.png"
import rasm2 from "../image/burger_icon.png"
import { NavLink, useLocation } from 'react-router-dom'
function Header() {
let place=useLocation()
let modal=useRef()
function openModal (){
modal.current.classList.add("openModal")
}
function closeModal (){
modal.current.classList.remove("openModal")
}
  return (
<section className={place.pathname === "/" ? 'header' : "header_main"} >
    <div className="container">
    <div ref={modal} className="modal  ">
    <div className="modal_header">
    <NavLink to="/">
    <img src={rasm1} alt="" />
    </NavLink>
    <h1 onClick={closeModal} >X</h1>
    </div>
  <div className="modal_content">
    <NavLink to="/video" >
    <select>
      <option>
           Видео 
      </option>
      <option>
           Видео 
      </option>
    </select>
    </NavLink>
    <NavLink to="/about">
    <select>
    <option>
      ПРО НАС
      </option>
    <option>
      ПРО НАС
      </option>
    
    </select>
    </NavLink>
    <NavLink to="/new">
    <select>
    <option>
      ЦЕНЫ
      </option>
    <option>
      ЦЕНЫ
      </option>
    
    </select>
    </NavLink>
    <NavLink to="malumot">
    <select>
    <option>
      КОНТАКТЫ
      </option>
    <option>
      КОНТАКТЫ
      </option>
    
    </select>
    </NavLink>
    <button className='modal_btn1'>Вход</button>
    <NavLink to="/register">
    <button className='modal_btn2' >регистрация</button>
    </NavLink>
    <div className="modal_contant_div">
    <span>Ru</span>
<span>Eng</span>
<span>Uz</span>
    </div>
  </div>
  </div>
<div className="header_wrapper">

  <div className="header_logo">
    <NavLink to="/">
    <img src={rasm1} alt="" />
    </NavLink>
  </div>
  <div className="header_content">
    <NavLink to="/video" >
    <select>
      <option>
      Видео
      </option>
    </select>
    </NavLink>
    <NavLink to="/about">
    <select>
    <option>
      ПРО НАС
      </option>
    
    </select>
    </NavLink>
    <NavLink to="/new">
    <select>
    <option>
      ЦЕНЫ
      </option>
    
    </select>
    </NavLink>
    <NavLink to="malumot">
    <select>
    <option>
      КОНТАКТЫ
      </option>
    
    </select>
    </NavLink>
    <button className='header_btn1'>Вход</button>
    <NavLink to="/register">
    <button className='header_btn2' >регистрация</button>
    </NavLink>
    <select>
    <option>
    Рус
      </option>
    <option>
Uz
      </option>
    <option>
Eng
      </option>
    
    </select>
  </div>
  <div className="burger" onClick={openModal} >
<img src={rasm2} alt="" />
  </div>
</div>
    </div>
</section>
  )
}

export default Header

