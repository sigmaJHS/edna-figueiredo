import axios from 'axios'

import TextInput from './inputs/TextInput'

import style from './SimulationForm.module.scss'

export default function SimulationForm (props) {
  function handleSubmit (event) {
    event.preventDefault();

    props.setLoading(true);

    axios.post(
      process.env.REACT_APP_BACKEND_SERVER + '/simulation',
      new FormData(event.target),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).then(
      function (response) {
        props.triggerNotification('success', 'success')
      }
    ).catch(
      function (response) {
        props.triggerNotification('error', 'error')
      }
    ).finally(
      function () {
        props.setLoading(false);
      }
    );
  }

  const fields = [
    {
      'name': 'nome',
      'label': 'Nome completo',
      'placeholder': 'ex. Fulano Da Silva',
      'component': TextInput
    },
    {
      'name': 'nascimento',
      'label': 'Data de nascimento',
      'placeholder': 'ex. 01/01/2023',
      'component': TextInput
    },
    {
      'name': 'cidade',
      'label': 'Cidade onde mora',
      'placeholder': 'ex. Itatiba/SP',
      'component': TextInput
    },
    {
      'name': 'renda',
      'label': 'Renda familiar mensal',
      'placeholder': 'ex. R$ 5.000,00',
      'component': TextInput
    },
    {
      'name': 'fgts',
      'label': 'Valor do FGTS (opcional)',
      'placeholder': 'ex. R$ 1.000,00',
      'component': TextInput
    },
    {
      'name': 'contato',
      'label': 'Email ou telefone para contato',
      'placeholder': 'ex. (99) 99999-9999',
      'component': TextInput
    }
  ];

  return (
    <form id={style['form']} onSubmit={handleSubmit}>
      <h3 className={style['title']}>Faça uma simulação gratuita!</h3>
      {
        fields.map(
          function (field, key) {
            return (
              <div key={key} className={style['form-row']}>
                <label htmlFor={field.name}>{field.label}</label>
                <field.component
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            );
          }
        )
      }
      <div className={`${style['form-row']} ${style['button-row']}`}>
        <button>Pedir simulação</button>
      </div>
    </form>
  );
}