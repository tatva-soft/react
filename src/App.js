import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';

import Products from './Products';

import TopPanel from './TopPanel';

const App = () => {
  return (
    <>
      <Router>
        <TopPanel />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
