import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signinUser } from "../../../redux/actionCreators/authActionCreator";
import style from '../auth.module.css';

const Signin = () => {
  const [errorValue, setErrorValue] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const error = useSelector(state => state.authReducer.error)

  const [input, setInput] = useState({
    login: '',
    email: '',
  })

  const inputHandler = (event) => {
    setInput(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }

  return (
    <div className={style.container}>
      {error ?
        <h1>{error}</h1> :
        <>
          <h1>Авторизация</h1>
          <div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Введите Email</label>
            <input id="email" type="email" placeholder='Email' className="form-control" name='email' onChange={inputHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Введите пароль</label>
            <input id="password" placeholder='Пароль' type="password" className="form-control" name='password' onChange={inputHandler} />
          </div>
          {errorValue && errorValue ? errorValue : null}
          <div className="d-flex">
            <button className='btn btn-primary mx-3' onClick={(e) => {
              e.preventDefault()
              dispatch(signinUser(input, history, setErrorValue))
            }}>Войти</button><br />
            <a href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}>
              <button className='btn btn-dark' >Google</button>
            </a>
          </div>
        </>
      }
    </div>
  );
}

export default Signin;
