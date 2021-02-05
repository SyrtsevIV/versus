import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Signup from "./Components/Auth/Signup/Signup";
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
      <Signup />
      <Switch>
        <Route exact path="/">
          <h1>Main page</h1>
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
