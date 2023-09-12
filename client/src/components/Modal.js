import style from './Modal.module.scss'

export default function Modal (props) {
  return (
    <div>
      <div id={style['modal']} data-open={(true) ? 'true' : 'false'}>
        <div className={style['close']}>x</div>
        <div className={style['modal-inner']}>
          {props.children}
        </div>
      </div>
      <div id={style['overlay']} />
    </div>
  );
}