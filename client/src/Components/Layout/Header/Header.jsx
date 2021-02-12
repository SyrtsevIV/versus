import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from "../../../redux/actionCreators/authActionCreator";
import style from './header.module.css';

const Header = () => {
  const userSession = useSelector((store) => store.authReducer.userSession);
  const dispatch = useDispatch()

  return (

    <nav className="navbar navbar-expand-lg navbar-light header fixed-top" style={{ color: 'white' }}>
      <div className="container-fluid justify-content-between ">
        <Link className="navbar-brand" to="/" style={{ color: 'white' }}>
          Versus
      </Link>
      <ul className="navbar-nav mb-2 mb-lg-0">
        {userSession && userSession ? (
          <Link className="navbar-brand" to="/tournament/new" style={{ color: 'white' }}>
            <span id='buttonCreateTournament'>Создать турнир</span>
          </Link>
        ) : (
            <Link className="navbar-brand" to="/signup" style={{ color: 'white' }}>
              <span id='buttonCreateTournament'>Создать турнир</span>
            </Link>
          )}
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
