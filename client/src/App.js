import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Signup from "./Components/Auth/Signup/Signup";

function App() {
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
