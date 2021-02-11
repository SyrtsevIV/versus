import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signupUser } from "../../../redux/actionCreators/authActionCreator";
import style from '../auth.module.css';

const Signup = () => {
  const [errorValue, setErrorValue] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const [input, setInput] = useState({
    login: '',
    email: '',
    password: '',
    passwordCheck: ''
  })

  const inputHandler = (event) => {
    setInput(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }

  return (
    <>
    <div className={style.container}>
      <h1>Регистрация</h1>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Введите Логин</label>
        <input onChange={inputHandler} type='text' name='login' placeholder='Логин' class="form-control" />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Введите Email</label>
        <input onChange={inputHandler} type='email' name='email' placeholder='Электронная почта' class="form-control" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Введите пароль</label>
        <input onChange={inputHandler} type='password' name='password' placeholder='Пароль' class="form-control"/>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Повторите пароль</label>
        <input onChange={inputHandler} type='password' name='passwordCheck' placeholder='Повторите пароль' class="form-control"/>
      </div>
          {errorValue && errorValue ? errorValue  : null}
        <div className="d-flex justify-content-md-evenly">
       <button className='btn btn-primary' onClick={(e) => {
          e.preventDefault()
          dispatch(signupUser(input, history, setErrorValue))}}>Зарегистрироваться</button><br/>
        <a href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}>
        <button className='btn btn-danger'>Google</button>
      </a>
      </div>
{/*         <input onChange={inputHandler} type='text' name='login' placeholder='Ваше имя'></input>
        <input onChange={inputHandler} type='email' name='email' placeholder='Электронная почта'></input>
        <input onChange={inputHandler} type='password' name='password' placeholder='Пароль'></input>
        <input onChange={inputHandler} type='password' name='passwordCheck' placeholder='Повторите пароль'></input>
        <button onClick={(e) => {
          e.preventDefault()
          dispatch(signupUser(input, history, setErrorValue))
        }}>Зарегистрироваться</button>
      <a href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}><button>Войти через Google</button></a> */}
      </div>
    </>
  );
}

export default Signup;
