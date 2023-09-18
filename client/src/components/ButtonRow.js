import style from './ButtonRow.module.scss'

export default function ButtonRow (props) {
  return (
    <div className={`${style['button-row']} ${style['button-row']}`}>
      <button>{props.children}</button>
    </div>
  )
}