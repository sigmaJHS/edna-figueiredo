import Input from './Input'

export default function TextInput (props) {
  function validate (event) {
    props.updateIsValid(event.target.value.length > 2);
  }

  return (
    <Input
      name={props.name}
      type={'text'}
      placeholder={props.placeholder ?? ''}
      onInput={validate}
    />
  );
}