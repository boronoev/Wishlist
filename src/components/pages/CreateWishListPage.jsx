
export default function CreateWishlist() {
  let sitestring ='';
  const onClick = () => {
    fetch('https://www.avito.ru/cheboksary/odezhda_obuv_aksessuary/nike_air_force_2381050723')
      .then(res => res.text())
      .then(data => {
        sitestring = data;
        // console.log(data);
      })
  };
  const parser = new DOMParser();
  let doc;
  let price;
  let description;
  let imageSource;
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
  return (
    <div className="center-wrapper">
      <h3>Создание персонального списка подарков</h3>
      <div>
        <form>
          <label>Введите название списка:</label>
          <input placeholder="необязательно"></input>
          <label>Введите url ссылки</label>
          <input></input>
          <button type="button">+</button>
          <label>Название товара</label>
          <input></input>
          <label>Цена (руб.)</label>
          <input></input>
          <label>Описание</label>
          <input placeholder="необязательно"></input>
          <button>Добавить</button>
        </form>
        <button onClick={onClick}> fetch</button>
        <button onClick={makeDocSMM}>Sbermegamarket: make doc</button>
        <button onClick={makeDocOzon}>Ozon: make doc</button>
        <button onClick={makeDocWB}>WB: make doc</button>
        <button onClick={makeDocAli}>Aliexpress: make doc</button>
        <button onClick={makeDocAvito}>Avito market: make doc</button>
        <button onClick={()=>console.log( description , price, imageSource)}> консоль</button>
      </div>
    </div>
  )
}

