import Input from './Input'

import { maskitoDateOptionsGenerator } from '@maskito/kit'

export default function DateInput (props) {
  function validate (value) {
    let numbersOnlyValue = value.replaceAll('/', '');
    
    return (numbersOnlyValue.length === 8);
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
      additionalValidation={validate}
      maskOptions={options}
    />
  )
}