import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signupUser } from "../../../redux/actionCreators/authActionCreator";

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
      <form>
        <input onChange={inputHandler} type='text' name='login' placeholder='Ваше имя'></input>
        <input onChange={inputHandler} type='email' name='email' placeholder='Электронная почта'></input>
        <input onChange={inputHandler} type='password' name='password' placeholder='Пароль'></input>
        <input onChange={inputHandler} type='password' name='passwordCheck' placeholder='Повторите пароль'></input>
        <button onClick={(e) => {
          e.preventDefault()
          dispatch(signupUser(input, history, setErrorValue))
        }}>Зарегистрироваться</button>
      </form>
      <a href='http://localhost:3001/auth/google'><button>Войти через Google</button></a>
      {errorValue && errorValue ? errorValue  : null}
    </>
  );
}

export default Signup;
