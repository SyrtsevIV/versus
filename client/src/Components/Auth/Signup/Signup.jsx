import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [input, setInput] = useState({
    login: '',
    email: '',
    password: '',
    passwordCheck: ''
  })
  const signUpHandler = async (e) => {
    e.preventDefault()
    const req = await fetch('http://localhost:3001/auth/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(input)
    })
    const res = await req.json()
    if (req.status === 200) {
      dispatch({ type: 'ADD_USER', payload: res })
      history.push('/')
    }
  }

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
        <button onClick={signUpHandler}>Зарегистрироваться</button>
      </form>

      <a href='http://localhost:3001/auth/google'><button>Войти через Google</button></a>
    </>
  );
}

export default Signup;
