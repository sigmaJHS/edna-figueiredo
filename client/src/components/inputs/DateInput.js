import { useMaskito } from '@maskito/react';
import { maskitoDateOptionsGenerator } from '@maskito/kit';

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
    <input
      type='text'
      name={props.name}
      placeholder={props.placeholder}
      ref={useMaskito({options})}
      onInput={validate}
    />
  )
}