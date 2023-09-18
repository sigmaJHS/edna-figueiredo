import Input from './Input'

export default function TextInput (props) {
  function validate (value) {
    return (value.length > 2);
  }

  return (
    <Input
      {...props}
      type={'text'}
      additionalValidation={validate}
    />
  );
}