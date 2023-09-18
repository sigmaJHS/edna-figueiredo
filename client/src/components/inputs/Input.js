import style from './Input.module.scss'

export default function Input (props) {
  return (
    <div className={style['input-row']}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...props}
      />
      <p
        className={style['error']}
        data-show={props.showError ? 'true' : 'false'}
      >
        {props.errorMessage}
      </p>
    </div>
  )
}