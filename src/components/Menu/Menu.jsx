import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import './menu.css'
import LoginImage from '/home/boronoev/myproject/src/images/login.svg';
export default function Menu() {

  const container = useRef(null);
  const area = useRef(null);
  useOutsideClick(container, area, () => document.querySelector('.menu__container').classList.add('hidden'));
  return (
    <div className='menu__container hidden'>
      <div className="menu"
        ref={area}
      // onClick={() => document.querySelector('.menu__container').classList.add('hidden')}
      >
        <div className='menu__background' ref={container}>
          {/* <div className='menu__wrapper' > */}
          <div className='menu__nav'>
            <div className='back-button' onClick={() => document.querySelector('.menu__container').classList.add('hidden')}>
              <div className='arrow'></div>
            </div>
            <img className='menu__login' src={LoginImage} alt="LoginImage"/>
            <Link to='/sign' className='menu__item' onClick={() => document.querySelector('.menu__container').classList.add('hidden')}>Войти</Link>


            <Link to='/wishlist'  className='menu__item' onClick={() => document.querySelector('.menu__container').classList.add('hidden')}>Создать свой вишлист</Link>
            <Link to='/giftregistry' className='menu__item' onClick={() => document.querySelector('.menu__container').classList.add('hidden')}>Составить праздничный список</Link>
            <p className='menu__item'>Слово </p>
            <p className='menu__item'>Советы</p>
            <p className='menu__item menu__fit'>О сайте</p>

          </div>
          {/* </div> */}
        </div>
      </div>



    </div>

  )
}
