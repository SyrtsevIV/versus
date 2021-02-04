
const Signup = () => {

  const signupWithGoogle = async () => {
    const response = fetch('http://localhost:3001/auth/google')
    /* const result = await response.json() */
    console.log(response);
  }

  return (
      <button onClick={signupWithGoogle}>Войти с помощью Google</button>
  );
}

export default Signup;
