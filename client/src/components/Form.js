import axios from 'axios'

export default function Form (props) {
  function handleSubmit (event) {
    event.preventDefault();
    if(!props.validate()) {
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
      function (response) {
        props.triggerNotification('success', props.successNotification)
      }
    ).catch(
      function (response) {
        props.triggerNotification('error', props.errorNotification)
      }
    ).finally(
      function () {
        props.setLoading(false);
      }
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
}