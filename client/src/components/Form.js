import axios from 'axios'
import { useContext } from 'react'
import { LoadingContext } from './../contexts/LoadingContext'

export default function Form (props) {
  const setLoading = useContext(LoadingContext);

  function handleSubmit (event) {
    event.preventDefault();

    if(props.validate() === false) {
      return;
    }

    setLoading(true);

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
        setLoading(false);
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