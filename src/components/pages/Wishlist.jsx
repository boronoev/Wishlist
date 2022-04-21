import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function Wishlist() {
  const params = useParams();
  const lists = useSelector(state => state.lists);
  const [list, setList] = useState(lists.find(item => item.id == params.id));

  const addGiverName = () => {
    if (document.querySelector('.wishlist__giver').value) {
      document.querySelector('.wishlist__wishlist').removeAttribute('hidden');
      document.querySelector('.wishlist__giver').setAttribute('disabled', 'disabled');
      document.querySelector('.wishlist__addGiverName-button').setAttribute('disabled', 'disabled');

    }
  }
  return (
    <div>
      <p>{list.title}</p>
      <label htmlFor="giver">Введите имя</label>
      <input id="giver" className="wishlist__giver"></input>
      <button className="wishlist__addGiverName-button" onClick={addGiverName}>Перейти к выбору</button>


      <div className="wishlist__wishlist" hidden>

        {list.items.map(item => (<div key={item.url}><p>{item.name}</p><p>{item.price}</p><a href={item.url}>{item.url}</a><button onClick={(e) => { e.target.setAttribute('disabled', 'disabled'); item.isBlocked = true; item.giver = document.querySelector('.wishlist__giver').value }}>Забронировать</button></div>))}
      </div>
      <button onClick={() => console.log(lists)}>посмотреть глобальный state</button>
      <button onClick={() => console.log(list)}>посмотреть текущий список</button>

    </div>
  )

}
