import style from './SimulationForm.module.scss'

export default function SimulationForm () {
  return (
    <form id={style['form']}>
      <div className={style['form-row']}>
        <label htmlFor='nome'>Nome completo</label>
        <input
          type='text'
          id='nome'
          name='nome'
          placeholder='ex. Fulano Da Silva'
        />
      </div>
      <div className={style['form-row']}>
        <label htmlFor='nascimento'>Data de nascimento</label>
        <input
          type='date'
          id='nascimento'
          name='nascimento'
          placeholder='ex. 01/01/2023'
        />
      </div>
      <div className={style['form-row']}>
        <label htmlFor='cidade'>Cidade onde mora</label>
        <input
          type='text'
          id='cidade'
          name='cidade'
          placeholder='ex. Itatiba/SP'
        />
      </div>
      <div className={style['form-row']}>
        <label htmlFor='renda'>Renda Familiar Mensal</label>
        <input
          type='text'
          id='renda'
          name='renda'
          placeholder='ex. R$ 5.000,00'
        />
      </div>
      <div className={style['form-row']}>
        <label htmlFor='contato'>Email ou telefone para contato</label>
        <input
          type='text'
          id='contato'
          name='contato'
          placeholder='ex. (99) 99999-9999'
        />
      </div>
      <div className={`${style['form-row']} ${style['button-row']}`}>
        <button>Pedir simulação</button>
      </div>
    </form>
  );
}