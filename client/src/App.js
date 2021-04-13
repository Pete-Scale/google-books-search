import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Search from './pages/search'
import Saved from './pages/saved'
import Nav from './components/nav/nav'
import Header from './components/header/header'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/saved">
          <Header title="Your Saved Books" />
          <Saved />
        </Route>
        <Route path="/">
          <Header title="Search For New Books" />
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
