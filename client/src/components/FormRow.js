import style from './FormRow.module.scss'

import Input from './inputs/Input'
import TextInput from './inputs/TextInput'
import DateInput from './inputs/DateInput'
import MoneyInput from './inputs/MoneyInput'
import ContactInput from './inputs/ContactInput'

export default function FormRow (props) {
  let Component = null;
  switch(props.type){
    case 'text':
      Component = TextInput
    break;
    case 'date':
      Component = DateInput
    break;
    case 'money':
      Component = MoneyInput
    break;
    case 'contact':
      Component = ContactInput
    break;
    default:
      Component = Input
    break;
  }

  return (
    <div className={style['form-row']}>
      <label htmlFor={props.name}>{props.label}</label>
      <Component
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        updateIsValid={(isValid) => props.updateIsValid(props.name, isValid)}
      />
      <p
        className={style['error']}
        show={(props.showErrors === true) ? 'true' : 'false'}
      >
        {props.errorMessage}
      </p>
    </div>
  );
}