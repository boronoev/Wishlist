import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export default function Mainpage() {
  const state = useSelector(state => state);
  return (
    <div className="mainpage center-wrapper">
      <h3 className="mainpage__title">Создавайте свои списки</h3>
      <h4 className="mainpage__smalltitle">Получайте в подарок только желанное</h4>
      <div className="mainpage__container">
        <div className="mainpage__item">
          <h4 className="mainpage-item__title">Сделать персональный список подарков </h4>
          <p className="mainpage-item__text">Расскажите с помощью списка свои друзьям и знакомым о том, что вы желаете получить</p>
          <Link to='/wishlist'  className="mainpage-item__create">Создать</Link>
        </div>
        <div className="mainpage__item">
          <h4 className="mainpage-item__title">Создать список для праздничного события</h4>
          <p className="mainpage-item__text">Организуйте выбор подарков для гостей вашего праздника в приятный и удобный процесс</p>
          <Link to='/giftregistry' className="mainpage-item__create">Создать</Link>
          {/* <a href="https://www.vecteezy.com/free-vector/gift">Gift Vectors by Vecteezy</a> */}
        </div>
      </div>
      <button onClick={() => console.log(state)}>посмотреть весь глобальный state</button>
    </div>
  )
}
