import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import {AppCars} from './pages/AppCars';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          
          </ul>
        </nav>
        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
