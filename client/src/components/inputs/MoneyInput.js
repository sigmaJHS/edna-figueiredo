import Input from './Input'
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

export default function MoneyInput (props) {
  function validate (value) {
    let rawValue = parseFloat(
      value.replaceAll(/R|\$| /g, '').replace(',','.')
    );
    
    return (rawValue > 0);
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
      additionalValidation={validate}
      maskOptions={options}
    />
  )
}