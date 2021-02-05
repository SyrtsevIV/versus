

const Signin = () => {


  return (
    <div className="row container ">
      <div className="input-field col s6 offset-s3">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="validate" name='email' onChange={inputHandler} />
      </div>
      <div className="input-field col s6 offset-s3">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className="validate" name='password' onChange={inputHandler} />
      </div>
      <button className='btn col s2 offset-s5' onClick={signInHandler}>Зарегистрироваться</button>
    </div>
  );
}

export default Signin;
