
export default function LogIn() {
  return (
    <div className="login center-wrapper">
      <h3 className="login__welcome">Добро пожаловать!</h3>
      <div className="login__container">
        <div className="login__title">Вход</div>
        <label className="login__label" htmlFor="login__login">Логин</label>
        <input name="login" className="login__input" placeholder="Email или телефон" id="login__login"></input>
        <label className="login__label" htmlFor="login__password">Пароль</label>
        <input name="password" className="login__input" type='password' id="login__password" placeholder="Введите пароль"></input>
        <button className="login__button">Войти</button>

      </div>
    </div>
  )
}
