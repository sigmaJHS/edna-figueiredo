import style from './Footer.module.scss'

export default function Footer () {
  return (
    <div id={style['footer']}>
      Desenvolvido por <a href='https://github.com/sigmaJHS' target='blank'>Gabriel Figueiredo Costa</a>
    </div>
  );
}