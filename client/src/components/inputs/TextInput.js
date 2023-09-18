import { forwardRef } from 'react'

export default forwardRef(
  function TextInput (props, ref) {
    function validate (event) {
      props.updateValidity(event.target.value.length > 2);
    }
  
    return (
      <input
        name={props.name}
        type={'text'}
        placeholder={props.placeholder ?? ''}
        onInput={validate}
      />
    );
  }
)