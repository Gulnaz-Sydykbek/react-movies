import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container/Container';
import HeaderPage from './Pages/HeaderPage/HeaderPage';
import HomePage from './Pages/HomePage/HomePage';
import LibraryPage from './Pages/LibraryPage/LibraryPage';
import SearchBarPageList from './Pages/SearchBarPage/SearchBarPageList';

function App() {
  const [routeClick, setRouteClick] = useState(true);

  const onRouteFalseClick = falseClick => {
    setRouteClick(falseClick);
  };

  return (
    <div>
      <HeaderPage
        onRouteFalseClick={onRouteFalseClick}
        routeClick={routeClick}
      />

      <Container>
        <Switch>
          <Route
            exact
            path="/"
            component={routeClick ? HomePage : SearchBarPageList}
          />

          <Route path="/library" component={LibraryPage} />

          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
