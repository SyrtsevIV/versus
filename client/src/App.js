import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bracket from './Components/Bracket/Bracket';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <h1>Main page</h1>
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
