export default function TextInput (props) {
  return (
    <input
      name={props.name}
      type={'text'}
      placeholder={props.placeholder ?? ''}
    />
  );
}