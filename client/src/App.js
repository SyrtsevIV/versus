import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

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