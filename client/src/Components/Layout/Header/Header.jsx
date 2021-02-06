import { NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const logoutUser = async () => {
    const response = await fetch("http://localhost:3001/auth/logout", {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      }
    })
    if (response.status === 200) {
      dispatch({ type: 'LOGOUT', payload: {} })
      history.push('/')
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to='/'>Logo</Link>
        <ul>
          <li><Link className="brand-logo center" to='/tournament/new'>Создать турнир</Link></li>
        </ul>
        <ul id="nav-mobile" className="right">
          <li><NavLink to='/rating'>Рейтинг</NavLink></li>
          <li><Link onClick={logoutUser}>Выйти</Link></li>
          <li><NavLink to='/signin'>Войти</NavLink></li>
          <li><NavLink to='/signup'>Зарегистрироваться</NavLink></li>
          <li><NavLink to='/profile'>Профиль</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
