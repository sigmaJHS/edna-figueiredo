import { useMaskito } from '@maskito/react';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

export default function MoneyInput (props) {
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
    <input
      type='text'
      name={props.name}
      placeholder={props.placeholder}
      ref={useMaskito({options})}
    />
  )
}