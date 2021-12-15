import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";
import { Front, Confirm, Result } from './routes';

function App() {
    return (
      <StateMachineProvider>
        <Router basename="/">
          <Route exact path="/" component={Front} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/result" component={Result} />
        </Router>
      </StateMachineProvider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
