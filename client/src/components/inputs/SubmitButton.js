import style from './SubmitButton.module.scss'

export default function SubmitButton (props) {
  return (
    <div className={`${style['input-row']} ${style['button-row']}`}>
      <button>{props.value}</button>
    </div>
  );
}