import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function LogIn() {
  const [loginvalue, setLogin] = useState('');
  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }
  const [passwordvalue, setPassword] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const { auth } = useAuth();
  const credentials = useSelector(state => state.credentials);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const init = async () => {
    try {
      const credentials = await auth(loginvalue, passwordvalue);
      console.log(credentials);
      dispatch({type: 'AUTH', payload: credentials});
      navigate("/");
    }
    catch (err) {
      alert ("Введён неверный логин или пароль");
    }
  }

  // useEffect(() => {
  //   init();
  // },[])

  // if(!credentials) return null;

  return (
    <div className="login center-wrapper">
      <h3 className="login__welcome">Добро пожаловать!</h3>
      <div className="login__container">
        <div className="login__title">Вход</div>
        <label className="login__label" htmlFor="login__login">Логин</label>
        <input name="login" className="login__input" placeholder="Email или телефон" id="login__login" value={loginvalue} onChange={handleLoginChange}></input>
        <label className="login__label" htmlFor="login__password">Пароль</label>
        <input name="password" className="login__input" type='password' id="login__password" placeholder="Введите пароль" value={passwordvalue} onChange={handlePasswordChange}></input>
        <button className="login__button" onClick={init}>Войти</button>

      </div>
    </div>
  )
}
