import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreateWishlist() {
  let sitestring = '';

  const parser = new DOMParser();
  let doc;
  let price;
  let description;
  let imageSource;
  const dispatch = useDispatch();
  const addList = () => {
    dispatch({ type: 'ADDLIST', payload: list });
    setList({...list, id: Date.now(), title: titlevalue, items: [] });
    setDescription('');
    setTitle('');
    setName('');
    setPrice('');
    setURL('');
  }
  const [list, setList] = useState({ id: Date.now(), title: 'noname', items: [] });
  const handleNewSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const item = { url: data.get('url'), name: data.get('name'), price: data.get('price'), description: data.get('description') };
    console.log(item);
    setList({ ...list, title: titlevalue, items: [...list.items, item] });
    setDescription('');
    setName('');
    setPrice('');
    setURL('');
  }


  const [titlevalue, setTitle] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const [urlvalue, setURL] = useState('');
  const handleURLChange = (e) => {
    setURL(e.target.value);
  }
  const [namevalue, setName] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const [pricevalue, setPrice] = useState('');
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }
  const [descriptionvalue, setDescription] = useState('');
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const onClick = () => {
    fetch('https://www.avito.ru/cheboksary/odezhda_obuv_aksessuary/nike_air_force_2381050723')
      .then(res => res.text())
      .then(data => {
        sitestring = data;
        // console.log(data);
      })
  };
  const makeDocSMM = () => {
    doc = parser.parseFromString(sitestring, "text/html");
    imageSource = doc.querySelector('.slide__image').src;
    description = doc.querySelector('.pdp-header__title').textContent;
    price = doc.querySelector('.pdp-sales-block__price-final').textContent;
  };
  const makeDocOzon = () => {
    doc = parser.parseFromString(sitestring, "text/html");
    imageSource = doc.querySelector('.ix5 img').src;
    description = doc.querySelector('.k1y').textContent;
    price = doc.querySelector('.wk9 span').textContent;
  };
  const makeDocWB = () => {
    doc = parser.parseFromString(sitestring, "text/html");
    imageSource = doc.querySelector('.photo-zoom__preview').src;
    description = doc.querySelector('.same-part-kt__header').textContent;
    price = doc.querySelector('.price-block__final-price').textContent;
  };
  const makeDocAli = () => {
    doc = parser.parseFromString(sitestring, "text/html");

    imageSource = doc.querySelector('.Product_Gallery__img__9bm18').src;
    description = doc.querySelector('.Product_Name__productTitleText__hntp3').textContent;
    price = doc.querySelector('.product-price-current').textContent;
  };
  const makeDocAvito = () => {
    doc = parser.parseFromString(sitestring, "text/html");
    console.log(doc);
    imageSource = doc.querySelector('.gallery-img-frame.js-gallery-img-frame').dataset.url;
    description = doc.querySelector('.title-info-title-text').textContent;
    price = doc.querySelector('.js-item-price').textContent;
  };
  const stateView = useSelector(state => state) ;

  return (
    <div className="center-wrapper">
      <h3>Создание персонального списка подарков</h3>
      <div>
        <div>
          <label>Введите название списка:</label>
          <input placeholder="необязательно" value={titlevalue} onChange={handleTitleChange} name="title"></input>
        </div>

        <form onSubmit={handleNewSubmit}>
          <label>Введите url ссылки</label>
          <input className="wishlist__url-input" value={urlvalue} onChange={handleURLChange} name="url"></input>
          <button type="button">+</button>
          <label>Название товара</label>
          <input value={namevalue} onChange={handleNameChange} name="name"></input>
          <label>Цена (руб.)</label>
          <input value={pricevalue} onChange={handlePriceChange} name="price"></input>
          <label>Описание</label>
          <input placeholder="необязательно" value={descriptionvalue} onChange={handleDescriptionChange} name="description"></input>
          <button>Добавить</button>
        </form>
        {/* <button onClick={onClick}> fetch</button>
        <button onClick={makeDocSMM}>Sbermegamarket: make doc</button>
        <button onClick={makeDocOzon}>Ozon: make doc</button>
        <button onClick={makeDocWB}>WB: make doc</button>
        <button onClick={makeDocAli}>Aliexpress: make doc</button>
        <button onClick={makeDocAvito}>Avito market: make doc</button>
        <button onClick={() => console.log(description, price, imageSource)}> консоль</button> */}
        <button onClick={() => console.log(list)}> консоль списка</button>
        <div>
          {list.items.map(item=>(<div key={item.url}><p>{item.name}</p><p>{item.price}</p><a href={item.url}>{item.url}</a></div>))}
        </div>
        <button onClick={addList}>Сохранить</button>
        <button onClick={()=> console.log(stateView)}>посмотреть глобальный state</button>
      </div>
    </div>
  )
}

