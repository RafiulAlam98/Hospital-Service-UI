import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Navigation></Navigation>
            <Home></Home>
          </Route>
        </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
