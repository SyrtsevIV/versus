
import Profile from './Components/Profile/Profile';

import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Layout/Main/Main';
import Error from './Components/Error/Error';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Route>
          <Error />
        </Route>
      </Switch>
        <Footer />
      </Router>
  );
}

export default App;
