import Input from './Input'

import { maskitoDateOptionsGenerator } from '@maskito/kit'

export default function DateInput (props) {
  function validate (event) {
    let numbersOnlyValue = event.target.value.replaceAll('/', '');
    
    props.updateValidity(numbersOnlyValue.length === 8);
  }

  const options = maskitoDateOptionsGenerator(
    {
      mode: 'dd/mm/yyyy',
      separator: '/'
    }
  );

  return (
    <Input
      type='text'
      name={props.name}
      placeholder={props.placeholder}
      maskOptions={options}
      onInput={validate}
    />
  )
}