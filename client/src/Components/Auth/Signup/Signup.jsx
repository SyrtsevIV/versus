import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signupUser } from "../../../redux/actionCreators/authActionCreator";
import style from '../auth.module.css';

const Signup = () => {
  const [errorValue, setErrorValue] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const error = useSelector(state => state.authReducer.error)

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
        {error ?
          <h1>{error}</h1> :
          <>
            <h1>Регистрация</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Введите Логин</label>
              <input onChange={inputHandler} type='text' name='login' placeholder='Логин' className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Введите Email</label>
              <input onChange={inputHandler} type='email' name='email' placeholder='Электронная почта' className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Введите пароль</label>
              <input onChange={inputHandler} type='password' name='password' placeholder='Пароль' className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Повторите пароль</label>
              <input onChange={inputHandler} type='password' name='passwordCheck' placeholder='Повторите пароль' className="form-control" />
            </div>
            {errorValue && errorValue ? errorValue : null}
            <div className="d-flex">
              <button className='btn btn-primary mx-3' onClick={(e) => {
                e.preventDefault()
                dispatch(signupUser(input, history, setErrorValue))
              }}>Зарегистрироваться</button><br />
              <a href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}>
                <button className='btn btn-dark'>Google</button>
              </a>
            </div>
          </>
        }

      </div>
    </>
  );
}

export default Signup;
