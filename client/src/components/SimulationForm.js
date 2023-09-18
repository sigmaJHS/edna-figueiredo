import { useState } from 'react'

import style from './SimulationForm.module.scss'

import Form from './Form'
import FormRow from './FormRow'
import ButtonRow from './ButtonRow';

export default function SimulationForm (props) {
  const [showErrors, setShowErrors] = useState(false);
  const [fieldsAreValid, setFieldsAreValid] = useState(
    {
      'nome': false,
      'nascimento': false,
      'cidade': false,
      'renda': false,
      'fgts': true,
      'contato': false
    }
  );

  function updateFieldIsValid (fieldName, isValid) {
    setFieldsAreValid ({...fieldsAreValid, [fieldName]: isValid});
  }

  function validateForm () {
    for(let field of Object.entries(fieldsAreValid)) {
      if(field[1] === false) {
        setShowErrors(true);
        return false;
      }
    }

    return true;
  }

  function success (response) {
    props.triggerNotification('success', 'Simulação solicitada! Aguarde nosso contato nos próximos dias.')
  }

  function error (response) {
    props.triggerNotification('error', 'Ocorreu um erro ao solicitar sua simulação, por favor tente novamente mais tarde.')
  }

  return (
    <Form
      id={style['form']}
      action={process.env.REACT_APP_BACKEND_SERVER + '/simulation'}
      validate={validateForm}
      success={success}
      error={error}
      setLoading={props.setLoading}
      triggerNotification={props.triggerNotification}
    >
      <h3 className={style['title']}>Faça uma simulação gratuita!</h3>
      <FormRow
        type='text'
        name='nome'
        label='Nome completo'
        placeholder='ex. Fulano Da Silva'
        required={true}
        showErrors={(showErrors === true && fieldsAreValid.nome === false)}
        errorMessage='favor, digite seu nome completo'
        updateIsValid={updateFieldIsValid}
      />
      <FormRow
        type='date'
        name='nascimento'
        label='Data de nascimento'
        placeholder='ex. 01/01/2023'
        required={true}
        showErrors={(showErrors === true && fieldsAreValid.nascimento === false)}
        errorMessage='Por favor, digite uma data válida'
        updateIsValid={updateFieldIsValid}
      />
      <FormRow
        type='text'
        name='cidade'
        label='Cidade onde mora'
        placeholder='ex. Itatiba/SP'
        required={true}
        showErrors={(showErrors === true && fieldsAreValid.cidade === false)}
        errorMessage='Por favor, digite o nome da sua cidade'
        updateIsValid={updateFieldIsValid}
      />
      <FormRow
        type='money'
        name='renda'
        label='Renda familiar mensal'
        placeholder='ex. R$ 4.000,00'
        required={true}
        errorMessage='Por favor, digite um valor válido'
        showErrors={(showErrors === true && fieldsAreValid.renda === false)}
        updateIsValid={updateFieldIsValid}
      />
      <FormRow
        type='money'
        name='fgts'
        label='Valor do FGTS (opcional)'
        placeholder='ex. R$ 1.000,00'
        required={false}
        errorMessage='Por favor, digite um valor válido'
        showErrors={(showErrors === true && fieldsAreValid.fgts === false)}
        updateIsValid={updateFieldIsValid}
      />
      <FormRow
        type='contact'
        name='contato'
        label='Email ou telefone para contato'
        placeholder='Certifique-se que está digitado corretamente'
        showErrors={(showErrors === true && fieldsAreValid.contato === false)}
        errorMessage='Por favor, digite um email ou telefone válido'
        required={true}
        updateIsValid={updateFieldIsValid}
      />
      <ButtonRow>Pedir simulação</ButtonRow>
    </Form>
  );
}