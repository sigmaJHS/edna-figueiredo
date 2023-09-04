import style from './ProgressGallery.module.scss'

import img1 from './../assets/andamento-obras-1.jpg';
import img2 from './../assets/andamento-obras-2.jpg';
import img3 from './../assets/andamento-obras-3.jpg';

export default function ProgressGallery () {
  const images = [img1, img2, img3];

  return (
    <div id={style['progress']}>
      <div className='container'>
        <h3>Confira o andamento as obras</h3>
        <h4>(imagens de agosto de 2023)</h4>
        <ul className={style['images']}>
          {
            images.map (
              function (image, key) {
                return (
                  <li key={key}>
                    <img
                      src={image}
                      alt={'Andamento das Obras ' + key+1}
                    />
                  </li>
                );
              }
            )
          }
        </ul>
      </div>
    </div>
  );
}