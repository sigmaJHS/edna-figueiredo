import style from './Presentation.module.scss'

import bg from './../assets/vila-romana-portaria.jpg'

export default function Presentation () {
  return (
    <div
      id={style['presentation']}
      style={
        {'backgroundImage': `url(${bg})`}
      }
    >
      <div className='container'>
        <div className={style['caption']}>
          <h1>Excelente<br />apartamento<br />em Itatiba/SP</h1>
          <h2>Subsídio Minha Casa Minha Vida<br />+ Casa Paulista</h2>
        </div>
      </div>
    </div>
  )
}