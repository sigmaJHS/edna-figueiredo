import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FsLightbox from 'fslightbox-react';

import style from './ProgressGallery.module.scss'

import img1 from './../assets/andamento-obras-1.min.jpg';
import img2 from './../assets/andamento-obras-2.min.jpg';
import img3 from './../assets/andamento-obras-3.min.jpg';

export default function ProgressGallery () {
  const minifiedImages = [img1, img2, img3];
  const originalImages = [
    'andamento-obras-1.jpg',
    'andamento-obras-2.jpg',
    'andamento-obras-3.jpg'
  ];

  const [lightboxController, setLightboxController] = useState(
    {
      toggler: false,
      slide: 1
    }
  );

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

  return (
    <div id={style['progress']}>
      <FsLightbox
        sources={originalImages}
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
      />
      <div className='container'>
        <h3>Confira o andamento das obras</h3>
        <h4>(imagens de agosto de 2023)</h4>
        <ul className={style['images']}>
          {
            minifiedImages.map (
              function (image, key) {
                return (
                  <li
                    key={key}
                    onClick={() => openLightboxOnSlide(key+1)}
                  >
                    <LazyLoadImage
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