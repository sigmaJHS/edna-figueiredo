import { useState } from 'react'
import axios from 'axios'

import TextInput from './inputs/TextInput'
import DateInput from './inputs/DateInput'
import MoneyInput from './inputs/MoneyInput'
import ContactInput from './inputs/ContactInput'

import style from './SimulationForm.module.scss'

export default function SimulationForm (props) {
  const [showErrors, setShowErrors] = useState(false);
  const [fieldsAreValid, setFieldsAreValid] = useState(
    {
      'nome': false,
      'nascimento': false,
      'cidade': false,
      'renda': false,
      'fgts': false,
      'contato': false
    }
  );

  const fields = [
    {
      'name': 'nome',
      'label': 'Nome completo',
      'placeholder': 'ex. Fulano Da Silva',
      'component': TextInput,
      'required': true,
      'valid': false,
      'error': 'Por favor, digite seu nome completo'
    },
    {
      'name': 'nascimento',
      'label': 'Data de nascimento',
      'placeholder': 'ex. 01/01/2023',
      'component': DateInput,
      'required': true,
      'valid': false,
      'error': 'Por favor, digite uma data válida'
    },
    {
      'name': 'cidade',
      'label': 'Cidade onde mora',
      'placeholder': 'ex. Itatiba/SP',
      'component': TextInput,
      'required': true,
      'valid': false,
      'error': 'Por favor, digite o nome da sua cidade'
    },
    {
      'name': 'renda',
      'label': 'Renda familiar mensal',
      'placeholder': 'ex. R$ 5.000,00',
      'component': MoneyInput,
      'required': true,
      'valid': false,
      'error': 'Por favor, digite um valor válido'
    },
    {
      'name': 'fgts',
      'label': 'Valor do FGTS (opcional)',
      'placeholder': 'ex. R$ 1.000,00',
      'component': MoneyInput,
      'required': false,
      'valid': false,
      'error': 'Por favor, digite um valor válido'
    },
    {
      'name': 'contato',
      'label': 'Email ou telefone para contato',
      'placeholder': 'Certifique-se que está digitado corretamente',
      'component': ContactInput,
      'required': true,
      'valid': false,
      'error': 'Por favor, digite um email ou telefone válido'
    }
  ];

  function handleSubmit (event) {
    event.preventDefault();
    
    for(let field of Object.entries(fieldsAreValid)) {
      if(field[1] === false) {
        setShowErrors(true);
        return;
      }
    }

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
        props.triggerNotification('success', 'Simulação solicitada! Aguarde nosso contato nos próximos dias.')
      }
    ).catch(
      function (response) {
        props.triggerNotification('error', 'Ocorreu um erro ao solicitar sua simulação, por favor tente novamente mais tarde')
      }
    ).finally(
      function () {
        props.setLoading(false);
      }
    );
  }

  function updateFieldIsValid (inputName, isValid) {
    setFieldsAreValid ({...fieldsAreValid, [inputName]: isValid});
  }

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
                  updateFieldIsValid={(valid) => {updateFieldIsValid(field.name, valid)}}
                />
                <p
                  className={style['error']}
                  show={(showErrors === true && fieldsAreValid[field.name] === false) ? 'true' : 'false'}
                >
                  {field.error}
                </p>
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