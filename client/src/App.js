import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Layout/Main/Main';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
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
