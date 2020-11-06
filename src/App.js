import './App.css';
import { Router } from '@reach/router';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/People';
import Planets from './components/Planets';
import Spaceships from './components/Spaceships';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <SearchForm/>
      
      <Router>
      <People path="/people/:id"/>
      <Planets path="/planets/:id"/>
      <Spaceships path="/starships/:id"/>
      <Error path="/error"/>
      </Router>
    </div>
  );
}

export default App;
