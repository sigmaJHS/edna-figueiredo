// import SimulationForm from './SimulationForm'

import style from './Presentation.module.scss'

import bg from './../assets/vila-romana.jpg'

export default function Presentation () {
  return (
    <div
      id={style['presentation']}
      style={
        {'backgroundImage': `url(${bg})`}
      }
    >
      <div className={style['caption']}>
        <h1><span>2</span> DORMs</h1>
        <h3>Suíte | Varanda Gourmet</h3>
        <h2>Itatiba/SP</h2>
        <ul>
          <li>Subsídio MCMV + Casa Paulista</li>
          <li>Entrada facilitada</li>
          <li>Escritura gratuita</li>
          <li>Use seu FGTS</li>
          <li>Excelente localização</li>
          <li>Saia do aluguel!</li>
        </ul>
        <div className={style['button-row']}>
          <button>Pedir simulação</button>
        </div>
      </div>
      {/* <div className='container'>
        <div className={style['caption']}>
          <h1>Excelente<br />apartamento<br />em Itatiba/SP</h1>
          <h2>Subsídio Minha Casa Minha Vida<br />+ Casa Paulista</h2>
        </div>
        <div className={style['form']}>
          <SimulationForm />
        </div>
      </div> */}
    </div>
  )
}