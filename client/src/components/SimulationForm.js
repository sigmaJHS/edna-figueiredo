import { useState, useRef } from 'react'
import axios from 'axios'

import TextInput from './inputs/TextInput'
import DateInput from './inputs/DateInput'
import MoneyInput from './inputs/MoneyInput'
import ContactInput from './inputs/ContactInput'
import SubmitButton from './inputs/SubmitButton'

import style from './SimulationForm.module.scss'

export default function SimulationForm (props) {
  const [showErrors, setShowErrors] = useState(false);
  // const fieldsAreValid = useRef(
  //   {
  //     'nome': false,
  //     'nascimento': false,
  //     'cidade': false,
  //     'renda': false,
  //     'fgts': false,
  //     'contato': false
  //   }
  // );

  function updateFieldIsValid (inputName, valid) {
    // fieldsAreValid.current[inputName] = valid;
    // console.log(fieldsAreValid.current);
  }

  function handleSubmit (event) {
    event.preventDefault();
    
    // for(let isValid of fieldsAreValid.current) {
    //   if(isValid === false) {
    //     setShowErrors(true);
    //     return false;
    //   }
    // }

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
        props.triggerNotification('error', 'Ocorreu um erro ao solicitar sua simulação, por favor tente novamente mais tarde.')
      }
    ).finally(
      function () {
        props.setLoading(false);
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3 className={style['title']}>Faça uma simulação gratuita!</h3>
      <TextInput
        name='nome'
        label='Nome completo'
        placeholder='ex. Fulano Da Silva'
        required={true}
        error='Por favor digite seu nome completo'
        showError={showErrors}
        updateFieldIsValid={updateFieldIsValid}
      />
      <DateInput
        name='nascimento'
        label='Data de nascimento'
        placeholder='ex. 01/01/2023'
        required={true}
        error='Por favor, digite uma data válida'
        showError={showErrors}
        updateFieldIsValid={updateFieldIsValid}
      />
      <TextInput
        name='cidade'
        label='Cidade onde mora'
        placeholder='ex. Itatiba/SP'
        required={true}
        error='Por favor, digite o nome da sua cidade'
        showError={showErrors}
        updateFieldIsValid={updateFieldIsValid}
      />
      <MoneyInput
        name='renda'
        label='Renda familiar mensal'
        placeholder='ex. R$ 5.000,00'
        required={true}
        error='Por favor, digite um valor válido'
        showError={showErrors}
        updateFieldIsValid={updateFieldIsValid}
      />
      <MoneyInput
        name='fgts'
        label='Valor do FGTS (opcional)'
        placeholder='ex. R$ 1.000,00'
        required={false}
        error='Por favor, digite um valor válido'
        showError={showErrors}
        updateFieldIsValid={updateFieldIsValid}
      />
      <ContactInput
        name='contato'
        label='Email ou telefone para contato'
        placeholder='Certifique-se que está digitado corretamente'
        required={true}
        error='Por favor, digite um email ou telefone válido'
        showError={showErrors}
        updateFieldIsValid={updateFieldIsValid}
      />
      <SubmitButton
        value='Pedir simulação'
      />
    </form>
  );
}