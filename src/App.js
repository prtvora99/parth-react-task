import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import LoginForm from './containers/login/form';
// import { EmployeeList } from './containers/employee/list';
import { routes } from './routes';

const App = () => {

  return (
    <Router>
      {routes && routes.map(({ path, component: Component }, key) =>
        <Route path={path} component={Component} key={'comp-' + key} exact />
      )}
    </Router>
  );
}

export default App;