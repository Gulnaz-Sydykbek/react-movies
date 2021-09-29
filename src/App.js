import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container/Container';
import HeaderPage from './Pages/HeaderPage/HeaderPage';
import HomePage from './Pages/HomePage/HomePage';
import LibraryPage from './Pages/LibraryPage/LibraryPage';

function App() {
  return (
    <div>
      <HeaderPage />

      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/library" component={LibraryPage} />

          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
