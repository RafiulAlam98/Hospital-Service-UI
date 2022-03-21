import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Appointments from './Pages/Appointments/Appointments/Appointments';
import Departments from './Pages/Departments/Departments/Departments';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import Home from './Pages/Home/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Navigation></Navigation>
            <Home></Home>
          </Route>

          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='/register'>
            <Register></Register>
          </Route>

          <Route path='/home'>
            <Navigation></Navigation>
            <Home></Home>
          </Route>

          <Route path='/doctors'>
            <Navigation></Navigation>
            <Doctors></Doctors>
          </Route>

          <Route path='/departments'>
            <Navigation></Navigation>
            <Departments></Departments>
          </Route>

          <PrivateRoute path="/appointments/:id">
            <Navigation></Navigation>
            <Appointments></Appointments>
          </PrivateRoute>

          <Route path='*'>
            
          </Route>
        </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
