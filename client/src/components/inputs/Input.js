import { useMaskito } from '@maskito/react'

export default function Input (props) {
  const options = props.maskOptions ?? {};

  function validate (event) {
    let
      value = event.target.value.trim(),
      additionalisValid =
        (props.additionalValidation === undefined)
        ? false
        : props.additionalValidation(value);

    props.updateIsValid (
      (
        additionalisValid
      ) || (
        value.length === 0 && props.required === false
      )
    )
  }

  return (
    <input
      ref={useMaskito({options})}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onInput={validate}
    />
  );
}