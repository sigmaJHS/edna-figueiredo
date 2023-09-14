export default function ContactInput (props) {
  return (
    <input
      name={props.name}
      type={'text'}
      placeholder={props.placeholder ?? ''}
    />
  );
}