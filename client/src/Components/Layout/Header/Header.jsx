import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
    <div className="nav-wrapper">
        <Link className="brand-logo" to='/'>Logo</Link>
      <ul>
        <li><Link class="brand-logo center" to='/tournament/new'>Создать турнир</Link></li>
      </ul>
      <ul id="nav-mobile" className="right">
       <li><NavLink to='/rating'>Рейтинг</NavLink></li>
        <li><NavLink to='/signout'>Выйти</NavLink></li>
        <li><NavLink to='/signin'>Войти</NavLink></li>
        <li><NavLink to='/signup'>Зарегистрироваться</NavLink></li>
        <li><NavLink to='/profile'>Профиль</NavLink></li>
      </ul>
      </div>
      </nav>
    );
};

export default Header;
