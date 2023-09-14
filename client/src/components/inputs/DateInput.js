import { useMaskito } from '@maskito/react';
import { maskitoDateOptionsGenerator } from '@maskito/kit';

export default function DateInput (props) {
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
    />
  )
}