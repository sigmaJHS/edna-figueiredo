import Input from './Input'

export default function ContactInput (props) {
  function validate (value) {
    let numbersOnlyValue = value.replaceAll(/\D/g, '');
        
    return (
      (
        numbersOnlyValue.length >= 8 && numbersOnlyValue.length <= 15
      ) || (
        (
          value.indexOf('@') > 0 && value.indexOf('@') < value.length - 1
        ) && (
          value.indexOf('.') > 0 && value.indexOf('.') < value.length - 1
        ) && (
          value.lastIndexOf('.') > value.indexOf('@')
        )
      )
    );
  }

  return (
    <Input
      {...props}
      type={'text'}
      additionalValidation={validate}
    />
  );
}