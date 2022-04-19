
export default function Signup() {
  return (
    <div className="signup center-wrapper">
      <h3 className="signup__welcome">Добро пожаловать!</h3>
      <div className="signup__container">
        <div className="signup__title">Регистрация</div>
        <form className="signup__form">
          <label className="signup__label" htmlFor="signup__login">Логин</label>
          <input name="login" className="signup__input" placeholder="Email или телефон" id="signup__login" required></input>
          <label className="signup__label" htmlFor="signup__password">Пароль</label>
          <input name="password" className="signup__input" type='password' placeholder="Придумайте пароль" id="signup__password" required></input>
          <label className="signup__label" htmlFor="signup__name">Имя</label>
          <input name="name" className="signup__input" placeholder="Имя (необязательно) " id="signup__name"></input>
          <button className="signup__button">Зарегистрироваться</button>
        </form>

      </div>
    </div>
  )
}
