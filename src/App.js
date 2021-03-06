import logo from './logo.svg';
import './App.css';
import 'react-notifications/lib/notifications.css';
import MainPage from './containers';
import Spinner from './components/Spinner';
import {
    BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <MainPage/>
        </Router>
    </div>
  );
}

export default App;
