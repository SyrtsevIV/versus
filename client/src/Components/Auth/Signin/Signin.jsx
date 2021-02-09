import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signinUser } from "../../../redux/actionCreators/authActionCreator";

const Signin = () => {
  const [errorValue, setErrorValue] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

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
    <>
      <div className="row container ">
        <div className="input-field col s6 offset-s3">
          <input id="email" type="email" placeholder='Email' className="validate" name='email' onChange={inputHandler} />
        </div>
        <div className="input-field col s6 offset-s3">
          <input id="password" placeholder='Password' type="password" className="validate" name='password' onChange={inputHandler} />
        </div>
        <button className='btn col s2 offset-s5' onClick={() => dispatch(signinUser(input, history, setErrorValue))}>Войти</button>
      </div>
      <a href='http://localhost:3001/auth/google'><button>Войти через Google</button></a>
      {errorValue && errorValue ? errorValue : null}
    </>
  );
}

export default Signin;
