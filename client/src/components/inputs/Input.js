import { useMaskito } from '@maskito/react'

export default function Input (props) {
  const options = props.maskOptions ?? {};

  return (
    <input
      ref={useMaskito({options})}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onInput={props.onInput}
    />
  );
}