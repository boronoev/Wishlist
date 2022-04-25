import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function Wishlist() {
  const params = useParams();
  const lists = useSelector(state => state.lists);
  const [list, setList] = useState(lists.find(item => item.id == params.id));

  const addGiverName = () => {
    if (document.querySelector('.wishlist__giver').value) {
      document.querySelector('.wishlist__wishlist').classList.remove('hidden');
      document.querySelector('.wishlist__giver').setAttribute('disabled', 'disabled');
      document.querySelector('.wishlist__giver-button').setAttribute('disabled', 'disabled');
      document.querySelector('.wishlist__giver-label').textContent = 'Введенное имя: ';
      document.querySelector('.wishlist__giver-button').classList.add('hidden');
      document.querySelector('.wishlist__giver').classList.add('gray');

    }
  }
  return (
    <div className="center-wrapper">
      <div className="wishlist__giver-container">

        <label htmlFor="giver" className="wishlist__giver-label">Для перехода к списку введите имя: </label>
        <input id="giver" className="wishlist__giver" autocomplete="off"></input>
        <button className="wishlist__giver-button" onClick={addGiverName}>Перейти к выбору</button>
      </div>


      <div className="wishlist__wishlist hidden">
        <p className="create-wishlist__url-label">{list.title}</p>
        <div className="wishlist__items">
          {list.items.map(item => (<div className="wishlist__item" key={item.url}><p className="wish__item">Название: {item.name}</p><p className="wish__item">Цена: {item.price}</p><a className="wish__item" href={item.url}>{item.url}</a><button className="wishlist__book" onClick={(e) => { e.target.setAttribute('disabled', 'disabled'); item.isBlocked = true; item.giver = document.querySelector('.wishlist__giver').value }}>Забронировать</button></div>))}
        </div>
      </div>
      {/* <button onClick={() => console.log(lists)}>посмотреть глобальный state</button>
      <button onClick={() => console.log(list)}>посмотреть текущий список</button> */}

    </div>
  )

}
