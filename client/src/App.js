import Profile from './Components/Profile/Profile';
import Footer from './Components/Layout/Footer/Footer';
import Bracket from './Components/Bracket/Bracket';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Main/Main';
import Error from './Components/Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const userSession = useSelector((store) => store.userSession);
  const dispatch = useDispatch();

  const getUser = async () => {
    const response = await fetch("http://localhost:3001/auth/", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    const res = await response.json();
    console.log(res);
    dispatch({ type: "IN_SESSION", payload: res });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <Header />
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
        <Route>
          <Error />
        </Route>
        </Switch>
      </div>
        <Footer />
      </Router>
  );
}

export default App;
