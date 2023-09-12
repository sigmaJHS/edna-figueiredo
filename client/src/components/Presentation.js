import style from './Presentation.module.scss'
import bg from './../assets/vila-romana.jpg'

export default function Presentation (props) {
  return (
    <div id={style['presentation']}>
      <div
        className={style['bg']}
        style={
          {'backgroundImage': `url(${bg})`}
        }
      />
      <div className={style['caption']}>
        <div className={style['caption-inner']}>
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
            <button onClick={props.toggleModal}>Pedir simulação</button>
          </div>
        </div>
      </div>
    </div>
  )
}