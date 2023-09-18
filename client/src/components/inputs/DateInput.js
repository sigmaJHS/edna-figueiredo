import Input from './Input'
import { useMaskito } from '@maskito/react';
import { maskitoDateOptionsGenerator } from '@maskito/kit';

export default function DateInput (props) {
  function validate (event) {
    let numbersOnlyValue = event.target.value.replaceAll('/', '');
    
    props.updateFieldIsValid(numbersOnlyValue.length === 8);
  }

  const options = maskitoDateOptionsGenerator(
    {
      mode: 'dd/mm/yyyy',
      separator: '/'
    }
  );

  return (
    <Input
      {...props}
      type='text'
      ref={useMaskito({options})}
      onInput={validate}
    />
  )
}