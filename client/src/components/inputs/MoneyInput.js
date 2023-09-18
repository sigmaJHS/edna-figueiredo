import Input from './Input'
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

export default function MoneyInput (props) {
  function validate (event) {
    let rawValue = parseFloat(
      event.target.value.replaceAll(/R|\$| /g, '').replace(',','.')
    );
    
    props.updateValidity(rawValue > 0);
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
      type='text'
      name={props.name}
      placeholder={props.placeholder}
      onInput={validate}
      maskOptions={options}
    />
  )
}