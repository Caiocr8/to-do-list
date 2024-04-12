import { IonApp } from '@ionic/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/dashboard';

function App() {
  return (
    <Router>
      <IonApp>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </IonApp>
    </Router>
  );
}

export default App;