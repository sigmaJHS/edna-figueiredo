import Input from './Input'

export default function TextInput (props) {
  function validate (event) {
    props.updateFieldIsValid(event.target.value.length > 2);
  }

  return (
    <Input
      {...props}
      type={'text'}
      onInput={validate}
    />
  );
}