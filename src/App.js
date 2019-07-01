import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/Login'
import Chat from './components/Chat'

function App() {
  return (
    <Router>
      <div>
        
        <Route exact path='/' component={Login} />
        <Route exact path='/chat/:userName' component={Chat} />
      </div>
    </Router>
  );
}

export default App;
