import style from './Loading.module.scss'
import loader from './../assets/loader.svg'

export default function Loading (props) {
  return (
    <div
      id={style['loading']}
      data-loading={(props.isLoading) ? 'true' : 'false'}
    >
      <img src={loader} alt='enviando...' />
    </div>
  );
}