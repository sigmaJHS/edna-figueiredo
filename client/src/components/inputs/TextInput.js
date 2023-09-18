import Input from './Input'

export default function TextInput (props) {
  function validate (value) {
    let additionalisValid =
      (props.additionalValidation === undefined)
      ? true
      : props.additionalValidation(value);

    return (value.length > 2 && additionalisValid);
  }

  return (
    <Input
      {...props}
      type={'text'}
      additionalValidation={validate}
    />
  );
}