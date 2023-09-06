import style from './Topbar.module.scss'
import logo from './../assets/logo-edna-figueiredo.jpg'
import whatsapp from './../assets/whatsapp.png'

export default function Topbar () {
  return (
    <div id={style['topbar']}>
      <div className='container'>
        <div className={style['topbar-inner']}>
          <img
            className={style['brand']}
            src={logo}
            alt='Edna Figueiredo Corretora de Imóveis (CRECI 168556)'
          />
          <a
            className={style['contact']}
            href='https://wa.me/5511942242089'
            target='blank'
          >
            <img src={whatsapp} alt='whatsapp' />
            (11) 94224-2089
          </a>
        </div>
      </div>
    </div>
  );
}