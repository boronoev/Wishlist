import { async } from "@firebase/util";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useRegistration from "../../hooks/useRegistration";

export default function Signup() {

  const reg = useRegistration();
  const { auth, update, module } = useAuth();
  const [newloginvalue, setNewLogin] = useState('');
  const handleNewLoginChange = (e) => {
    setNewLogin(e.target.value);
  }
  const [newpasswordvalue, setNewPassword] = useState('');
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  }
  const [newnamevalue, setNewName] = useState('');
  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = newloginvalue
    await reg(email, newpasswordvalue)
    await auth(email, newpasswordvalue)
    await update({displayName: newnamevalue})

    console.log( module.currentUser )
  }

  // onSubmit()



  return (
    <div className="signup center-wrapper">
      <h3 className="signup__welcome">Добро пожаловать!</h3>
      <div className="signup__container">
        <div className="signup__title">Регистрация</div>
        <form className="signup__form" onSubmit={onSubmit}>
          <label className="signup__label" htmlFor="signup__login">Логин</label>
          <input name="login" className="signup__input" placeholder="Email" id="signup__login" required value={newloginvalue} onChange={handleNewLoginChange}></input>
          <label className="signup__label" htmlFor="signup__password">Пароль</label>
          <input name="password" className="signup__input" type='password' placeholder="Придумайте пароль" id="signup__password" required value={newpasswordvalue} onChange={handleNewPasswordChange}></input>
          <label className="signup__label" htmlFor="signup__name">Имя</label>
          <input name="name" className="signup__input" placeholder="Имя (необязательно) " id="signup__name" value={newnamevalue} onChange={handleNewNameChange}></input>
          <button className="signup__button">Зарегистрироваться</button>
        </form>

      </div>
    </div>
  )
}
