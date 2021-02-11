import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from "../../../redux/actionCreators/authActionCreator";
import { useEffect } from "react";
import style from './header.module.css';

const Header = () => {
  const userSession = useSelector((store) => store.authReducer.userSession);
  const dispatch = useDispatch()

  return (

<nav className="navbar navbar-expand-lg navbar-light header" style={{color: 'white'}}>
  <div className="container-fluid justify-content-between px-5 p-2">
      <Link className="navbar-brand" to="/" style={{color: 'white'}}>
       Versus
      </Link>
        {userSession && userSession ? (
          <Link className="navbar-brand" to="/tournament/new" style={{color: 'white'}}>
              Создать турнир
        </Link>
          ) : (
            <Link className="navbar-brand" to="/tournament/new" style={{color: 'white'}}>
              Создать турнир
            </Link>
          )}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <NavLink to="/tournaments">Все турниры</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink to="/ratings">Рейтинг</NavLink>
        </li>
        {userSession && userSession ? (
          <>
            <li className="nav-item px-3">
              <NavLink to={`/profile/${userSession._id}`}>Профиль</NavLink>
            </li>
            <li className="nav-item px-3">
              <Link to="" onClick={() => dispatch(logoutUser())}>
                Выйти
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item px-3">
              <NavLink to="/signin">Войти</NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/signup">Зарегистрироваться</NavLink>
            </li>
          </>
        )}
      </ul>
  </div>
</nav>
  );
};

export default Header;
