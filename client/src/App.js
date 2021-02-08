import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Layout/Footer/Footer";
import Bracket from "./Components/Bracket/Bracket";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error";
import Signup from "./Components/Auth/Signup/Signup";
import Signin from "./Components/Auth/Signin/Signin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInSession, logoutUser } from "./redux/actionCreators/authActionCreator";
import Preloader from "./Components/Preloader/Preloader";


function App() {
  const dispatch = useDispatch();
  const userSession = useSelector((store) => store.authReducer.userSession);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(userInSession());
    setLoading(false)
  }, [dispatch]);

  return (
    <Router>
      {loading ? < Preloader /> :
      <>
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">
            Logo
          </Link>
          <ul>
            <li>
              <Link className="brand-logo center" to="/tournament/new">
                Создать турнир
              </Link>
            </li>
          </ul>
          <ul id="nav-mobile" className="right">
            <li>{userSession && `Привет, ${userSession.login}`}</li>
            <li>
              <NavLink to="/rating">Рейтинг</NavLink>
            </li>
            {userSession && userSession ? (
              <li>
                <Link to='' onClick={() => dispatch(logoutUser())}>
                  Выйти
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/signin">Войти</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Зарегистрироваться</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">Профиль</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    
          <div className="main">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/bracket">
            <Bracket />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
    </div>
     <Footer />
     </>
    }
     </Router>
  );
}

export default App;
