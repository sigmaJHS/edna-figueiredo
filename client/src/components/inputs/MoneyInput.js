import Input from './Input'
import { useMaskito } from '@maskito/react';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

export default function MoneyInput (props) {
  function validate (event) {
    let rawValue = parseFloat(
      event.target.value.replaceAll(/R|\$| /g, '').replace(',','.')
    );
    
    props.updateFieldIsValid(rawValue > 0);
  }

  const options = maskitoNumberOptionsGenerator(
    {
      decimalSeparator: ',',
      thousandSeparator: ' ',
      precision: 2,
      prefix: 'R$ ',
      min: 0
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