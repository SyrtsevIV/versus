import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Layout/Footer/Footer";
import Bracket from "./Components/Brackets/Bracket";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error";
import Signup from "./Components/Auth/Signup/Signup";
import Signin from "./Components/Auth/Signin/Signin";
import Ratings from './Components/Ratings/Ratings';
import TournamentItem from "./Components/TournamentItem/TournamentItem";
import TournamentList from "./Components/TournamentList/TournamentList";

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
import Match from './Components/Match/Match';
import Tournament from "./Components/Tournament/Tournament";

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
              <Link className="brand-logo center" to="/tournament/new">
                Создать турнир
              </Link>
          <ul id="nav-mobile" className="right">
            <li>{userSession && `Привет, ${userSession.login}`}</li>
            <li>
              <NavLink to="/tournaments">Все турниры</NavLink>
            </li>
            <li>
              <NavLink to="/ratings">Рейтинг</NavLink>
            </li>
            {userSession && userSession ? (
              <>
              <li>
                <NavLink to={`/profile/${userSession._id}`}>Профиль</NavLink>
              </li>
              <li>
                <Link to='' onClick={() => dispatch(logoutUser())}>
                  Выйти
                </Link>
              </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/signin">Войти</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Зарегистрироваться</NavLink>
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
          <Route exact path="/tabletennis/match/:id">
            <Match />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/ratings">
            <Ratings />
          </Route>
          <Route exact path="/tabletennis/match/:id">
            <Match />
          </Route>
          <Route exact path="/tournament/new">
            <Tournament />
          </Route>  
          <Route exact path="/tournaments">
            <TournamentList />
          </Route>
          <Route path="/tournament/:id">
            <TournamentItem />
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
