import axios from 'axios'

export default function Form (props) {

  function handleSubmit (event) {
    event.preventDefault();

    if(props.validate() === false) {
      return;
    }

    props.setLoading(true);

    axios.post(
      props.action,
      new FormData(event.target),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).then(
      props.success
    ).catch(
      props.error
    ).finally(
      function () {
        props.setLoading(false);
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
    >
      {props.children}
    </form>
  );
}