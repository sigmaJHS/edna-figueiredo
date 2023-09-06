import style from './FormModal.module.scss'

import SimulationForm from './SimulationForm'

export default function FormModal () {
  return (
    <div>
      <div id={style['modal']} data-open={(true) ? 'true' : 'false'}>
        <div className={style['close']}>x</div>
        <div className={style['modal-inner']}>
          <h3>Faça uma simulação gratuita!</h3>
          <SimulationForm />
        </div>
      </div>
      <div id={style['overlay']} />
    </div>
  );
}