import React from 'react'
import rasm1 from "../image/header_skrin.png"
import "../style/komfort.css"
function Komfort() {
  return (
  <sectin className ="komfort">
    <div className="container">
<div className="komfort_wrapper">
    <div className="komfort_content">
        <h2>Комфорт в работе</h2>
        <p>-
Создавай документы по твоим личным привычным шаблонам. Это индивидуально!
-
Настраивай порядок подписание документа, если вас несколько человек. Это ответственно!
-
Загружай XML файл с собственным шаблоном готового документа. Это удобно!
-
Работай в супер простом и понятном интерфейсе без сложностей. Это приятно!</p>
<button className='comfort_btn1'>Узнать больше</button>
    </div>
    <div className="komfort_img">
        <img src={rasm1} alt="" />
    </div>
</div>
<div className="komfort_wrapper">
<div className="komfort_img">
        <img src={rasm1} alt="" />
    </div>
    <div className="komfort_content">
        <h2>Наш продукт это:</h2>
        <p>-
        Web версия без установки программного обеспечения
        -
Возможность бесплатно и безлимитно обрабатывать входящие документы
-
Простота интеграции с 1С и другими сервисами
-
Поддержка входа через Mobile ID</p>
<button className='comfort_btn2'>Зарегистрироваться</button>
    </div>
</div>
    </div>
  </sectin>
  )
}

export default Komfort
