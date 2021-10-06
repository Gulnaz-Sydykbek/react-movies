import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import SearchBar from './components/SearchBar/SearchBar';
import HomePage from './pages/HomePage/HomePage';
import LibraryPage from './pages/LibraryPage/LibraryPage';

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={SearchBar} />
          <Route path="/library" component={LibraryPage} />

          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
