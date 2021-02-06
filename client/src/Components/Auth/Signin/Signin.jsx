import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Signin = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [input, setInput] = useState({
    login: '',
    email: '',
    password: '',
    passwordCheck: ''
  })

  const signInHandler = async (e) => {
    e.preventDefault()
    const req = await fetch('http://localhost:3001/auth/signin', {
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
      <div className="row container ">
        <div className="input-field col s6 offset-s3">
          <input id="email" type="email" placeholder='Email' className="validate" name='email' onChange={inputHandler} />
        </div>
        <div className="input-field col s6 offset-s3">
          <input id="password" placeholder='Password' type="password" className="validate" name='password' onChange={inputHandler} />
        </div>
        <button className='btn col s2 offset-s5' onClick={signInHandler}>Войти</button>
      </div>
      <a href='http://localhost:3001/auth/google'><button>Войти через Google</button></a>
    </>
  );
}

export default Signin;
