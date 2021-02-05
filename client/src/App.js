
import Profile from './Components/Profile/Profile';

import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Main/Main';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bracket from './Components/Bracket/Bracket';

function App() {
  return (
    <Router>
        <Header />
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
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
